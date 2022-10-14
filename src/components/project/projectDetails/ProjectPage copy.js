import React, { useState } from "react";
import Navigation from "../Navigation";
import Board from "../../Board";
import { DragDropContext } from "react-beautiful-dnd";
import ProjectInfo from "./ProjectInfo";
import IssueFilters from "../../issues/IssueFilters";
import { Link } from "react-router-dom";
import IssueStatus from "../../../constants";

const issueStatus = ["backlog", "selected", "inprogress", "completed"];

const ProjectPage = ({ project }) => {
    const backlogTasks = project.issues.filter(
        task => task.status === issueStatus[0]
    );
    const selectedTasks = project.issues.filter(
        task => task.status === issueStatus[1]
    );
    const inprogressTasks = project.issues.filter(
        task => task.status === issueStatus[2]
    );
    const completedTasks = project.issues.filter(
        task => task.status === issueStatus[3]
    );
    const tasks = [
        backlogTasks,
        selectedTasks,
        inprogressTasks,
        completedTasks,
    ];

    const [columns, setColumns] = useState(tasks);

    columns.map(column => {
        return column.sort((a, b) => a.listPosition - b.listPosition);
    });

    const handleDragEnd = (result, columns, setColumns) => {
        const { source, destination, draggableId } = result;
        if (!isPositionChanged(destination, source)) return;

        const newPosition = calculateIssueListPosition(
            project.issues,
            source,
            destination,
            draggableId,
            setColumns
        );

        console.log("newPosition", newPosition);

        // const sourceIndex = parseInt(source.droppableId);
        // const destIndex = parseInt(destination.droppableId);

        // if (source.droppableId !== destination.droppableId) {
        //     const sourceItems = [...columns[sourceIndex]];
        //     const destItems = [...columns[destIndex]];

        //     destItems.splice(
        //         destination.index,
        //         0,
        //         ...sourceItems.splice(source.index, 1)
        //     );

        //     const newColumns = [...columns];
        //     newColumns[sourceIndex] = sourceItems;
        //     newColumns[destIndex] = destItems;

        //     setColumns(newColumns);
        // } else {
        //     const sourceItems = [...columns[sourceIndex]];

        //     sourceItems.splice(
        //         destination.index,
        //         0,
        //         ...sourceItems.splice(source.index, 1)
        //     );

        //     const newColumns = [...columns];
        //     newColumns[sourceIndex] = sourceItems;

        //     setColumns(newColumns);
        // }
    };

    return (
        <div className="projectBoard">
            <div className="project-sidebar">
                <div className="project-menu">
                    <Link to="/">
                        <img
                            src="https://img.icons8.com/cute-clipart/60/kite-shape.png"
                            alt="img"
                        />
                    </Link>
                </div>
                <Navigation project={project} />
            </div>

            <div className="boardContent">
                <ProjectInfo projectName={project.name} />
                <IssueFilters projectUsers={project.users} />
                <div className="boardContainer">
                    <DragDropContext
                        onDragEnd={result =>
                            handleDragEnd(result, columns, setColumns)
                        }
                    >
                        {columns.map((column, i) => {
                            return (
                                <Board
                                    key={i}
                                    issues={column}
                                    column={i}
                                    users={project.users}
                                />
                            );
                        })}
                    </DragDropContext>
                </div>
            </div>
        </div>
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
        position =
            prevIssue.listPosition +
            (nextIssue.listPosition - prevIssue.listPosition) / 2;
    }
    return position;
};

const getAfterDropPrevNextIssue = (
    allIssues,
    destination,
    source,
    droppedIssueId,
    setColumns
) => {
    const beforeDropDestinationIssues = getSortedListIssues(
        allIssues,
        issueStatus[parseInt(destination.droppableId)]
    );

    const droppedIssue = allIssues.find(issue => issue.id === droppedIssueId);
    const isSameList = destination.droppableId === source.droppableId;

    const afterDropDestinationIssues = isSameList
        ? moveItemWithinArray(
              beforeDropDestinationIssues,
              droppedIssue,
              destination.index
          )
        : insertItemIntoArray(
              beforeDropDestinationIssues,
              droppedIssue,
              destination.index
          );

    return {
        prevIssue: afterDropDestinationIssues[destination.index - 1],
        nextIssue: afterDropDestinationIssues[destination.index + 1],
    };
};

const moveItemWithinArray = (arr, item, newIndex) => {
    const arrClone = [...arr];
    const oldIndex = arrClone.indexOf(item);
    arrClone.splice(newIndex, 0, arrClone.splice(oldIndex, 1)[0]);
    return arrClone;
};

const insertItemIntoArray = (arr, item, index) => {
    const arrClone = [...arr];
    arrClone.splice(index, 0, item);
    return arrClone;
};

const getSortedListIssues = (issues, status) =>
    issues
        .filter(issue => issue.status === status)
        .sort((a, b) => a.listPosition - b.listPosition);

export default ProjectPage;
