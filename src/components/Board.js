import React from "react";
import { Droppable } from "react-beautiful-dnd";
import IssueCard from "./issues/IssueCard";
import { IssueStatusText } from "../constants";

const Board = ({
    project,
    status,
    getListStyle,
    filterIssuesUserIds,
    filterText,
}) => {
    let sortedListIssues = getSortedListIssues(project.issues, status);

    let filteredListIssues = [];

    if (filterIssuesUserIds.length > 0) {
        filterIssuesUserIds.forEach(userId => {
            const res = sortedListIssues.filter(issue =>
                issue.userIds.includes(userId)
            );
            res.forEach(i => {
                if (!filteredListIssues.includes(i)) {
                    filteredListIssues = filteredListIssues.concat(i);
                }
            });
        });
        console.log("filteredListIssues", filteredListIssues);
    } else {
        filteredListIssues = sortedListIssues;
    }

    if (filterText !== "") {
        filteredListIssues = filteredListIssues.filter(issue =>
            issue.title.toLowerCase().includes(filterText.toLowerCase())
        );
    }

    return (
        <div className="board">
            <span className="boardTitle">
                {IssueStatusText[status]}{" "}
                {sortedListIssues ? sortedListIssues.length : 0}
            </span>
            <Droppable droppableId={status}>
                {(provided, snapshot) => (
                    <div
                        className="tasksContainer"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {filteredListIssues &&
                            filteredListIssues.map((issue, index) => {
                                return (
                                    <IssueCard
                                        key={issue.id}
                                        issue={issue}
                                        index={index}
                                        users={project.users}
                                    />
                                );
                            })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

//sort issues in a board acc to position
const getSortedListIssues = (issues, status) =>
    issues &&
    issues
        .filter(issue => issue.status === status)
        .sort((a, b) => a.listPosition - b.listPosition);

export default Board;
