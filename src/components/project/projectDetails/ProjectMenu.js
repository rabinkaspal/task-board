import React from "react";
import { Link } from "react-router-dom";

const ProjectMenu = ({ issueCreateModalOpen, issueSearchModalOpen }) => {
    return (
        <div className="project-menu">
            <Link to="/projects">
                <span className="material-symbols-outlined">api</span>
            </Link>
            <div className="menu">
                <div className="issueMenu">
                    <button onClick={issueSearchModalOpen}>
                        <span className="material-symbols-outlined">
                            search
                        </span>
                        <p>Search Issues</p>
                    </button>

                    <button onClick={issueCreateModalOpen}>
                        <span className="material-symbols-outlined">add</span>
                        <p>Create Issue</p>
                    </button>
                </div>
                <button>
                    <span className="material-symbols-outlined">help</span>
                    <p>About</p>
                </button>
            </div>
        </div>
    );
};

export default ProjectMenu;
