import React from "react";
import { Link } from "react-router-dom";

const ProjectMenu = ({
    issueCreateModalOpen,
    issueSearchModalOpen,
    logOut,
}) => {
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
                <div className="bottomLinks">
                    <button>
                        <span className="material-symbols-outlined">help</span>
                        <p>About</p>
                    </button>
                    <button onClick={logOut}>
                        <span className="material-symbols-outlined">
                            exit_to_app
                        </span>
                        <p>Logout</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectMenu;
