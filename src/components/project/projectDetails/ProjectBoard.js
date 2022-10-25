import React, { Fragment, useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import db from "../../../firebase/firebase-config";
import { DragDropContext } from "react-beautiful-dnd";
import ProjectInfo from "./ProjectInfo";
import IssueFilters from "../../issues/IssueFilters";
import { IssueStatus } from "../../../constants";
import Board from "../../Board";
import { Routes, Route, useLocation } from "react-router-dom";
import Modal from "../../Modal";
import IssueDetail from "../../forms/IssueDetail/IssueDetail";
import history from "./../../../shared/utils/BrowserHistory";

import {
  moveItemWithinArray,
  updateArrayItemById,
  getSortedListIssues,
  insertItemIntoArray,
} from "../../../shared/utils/ArrayHelpers";

const ProjectBoard = ({ project, updateProjectIssues }) => {
  const [filterIssuesUserIds, setFilterIssuesUserIds] = useState([]);
  const [filterText, setFilterText] = useState("");

  const location = useLocation();
  useEffect(() => {
    console.log("location.pathname", location.pathname);
  }, [location.pathname]);

  const handleDragEnd = async ({ source, destination, draggableId }) => {
    if (!isPositionChanged(destination, source)) return;

    const issueId = draggableId;

    const updatedFields = {
      status: destination.droppableId,
      listPosition: calculateIssueListPosition(project.issues, destination, source, issueId),
    };

    const updatedIssuesArray = updateArrayItemById(project.issues, issueId, updatedFields);

    updateProjectIssues(prevProject => ({
      ...prevProject,
      issues: updatedIssuesArray,
    }));

    const docRef = doc(db, "projects", project.id);
    await updateDoc(docRef, {
      issues: updatedIssuesArray,
    });
  };

  const setFilterUserIds = userId => {
    const idExists = filterIssuesUserIds.includes(userId);
    if (idExists) {
      setFilterIssuesUserIds(prevIds => prevIds.filter(id => id !== userId));
    } else {
      setFilterIssuesUserIds(prevIds => [...prevIds, userId]);
    }
  };

  // const setSearchFilter = text => {
  //     setFilterText(text);
  // };

  const getListStyle = isDraggingOver => ({
    // background: isDraggingOver ? "#b4d2ff" : "",
    borderRadius: "4px",
    // padding: isDraggingOver ? "4px" : "",
  });

  return (
    <Fragment>
      <div className="boardContent">
        <ProjectInfo projectName={project.name} />
        <IssueFilters
          projectUsers={project.users}
          setFilterUserIds={setFilterUserIds}
          filterIssuesUserIds={filterIssuesUserIds}
          setFilterText={setFilterText}
          setFilterIssuesUserIds={setFilterIssuesUserIds}
          filterText={filterText}
        />
        <div className="boardContainer">
          <DragDropContext onDragEnd={result => handleDragEnd(result)}>
            {Object.values(IssueStatus).map(status => {
              return (
                <Board
                  getListStyle={getListStyle}
                  key={status}
                  project={project}
                  status={status}
                  filterIssuesUserIds={filterIssuesUserIds}
                  filterText={filterText}
                />
              );
            })}
          </DragDropContext>
        </div>
      </div>

      <Routes>
        <Route
          path="issues/:issueId"
          element={
            <Modal
              isOpen
              onClose={() => history.back()}
              renderContent={modal => (
                <IssueDetail project={project} onSave={() => history.back()} onClose={modal.close} />
              )}
            />
          }
        />
      </Routes>
    </Fragment>
  );
};

const isPositionChanged = (destination, source) => {
  if (!destination) return false;
  const isSameList = destination.droppableId === source.droppableId;
  const isSamePosition = destination.index === source.index;
  return !isSameList || !isSamePosition;
};

const calculateIssueListPosition = (...args) => {
  const { prevIssue, nextIssue } = getAfterDropPrevNextIssue(...args);
  let position;

  if (!prevIssue && !nextIssue) {
    position = 1;
  } else if (!prevIssue) {
    position = nextIssue.listPosition - 1;
  } else if (!nextIssue) {
    position = prevIssue.listPosition + 1;
  } else {
    position = prevIssue.listPosition + (nextIssue.listPosition - prevIssue.listPosition) / 2;
  }
  return position;
};

const getAfterDropPrevNextIssue = (allIssues, destination, source, droppedIssueId) => {
  const beforeDropDestinationIssues = getSortedListIssues(allIssues, destination.droppableId);

  const droppedIssue = allIssues.find(issue => issue.id === droppedIssueId);

  const isSameList = destination.droppableId === source.droppableId;

  const afterDropDestinationIssues = isSameList
    ? moveItemWithinArray(beforeDropDestinationIssues, droppedIssue, destination.index)
    : insertItemIntoArray(beforeDropDestinationIssues, droppedIssue, destination.index);

  return {
    prevIssue: afterDropDestinationIssues[destination.index - 1],
    nextIssue: afterDropDestinationIssues[destination.index + 1],
  };
};

export default ProjectBoard;
