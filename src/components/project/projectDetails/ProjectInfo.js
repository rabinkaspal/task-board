import React from "react";

import ghIcon from "../../../images/svgs/github.svg";

const ProjectInfo = ({ projectName }) => {
    return (
        <div className="boardHeader">
            <div className="boardInfo">
                <p className="breadcrumbs">
                    <span>Projects</span>
                    <span>{projectName}</span>
                    <span>Kanban Board</span>
                </p>
                <h2>Kanban Board</h2>
            </div>
            <a
                className="button"
                href="https://github.com/rabinkaspal/task-board"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={ghIcon} alt="gh" />
                <span>Github Repo</span>
            </a>
        </div>
    );
};

export default ProjectInfo;
