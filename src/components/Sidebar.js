import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ project }) => {
    const navigate = useNavigate();
    return (
        <div className="nav">
            <div className="projectDetail">
                <img src={project.iconUrl} alt="Project Icon" />
                <div>
                    <h2>{project.name}</h2>
                    <p>{project.category} Project</p>
                </div>
            </div>
            <div className="projectLinks">
                <div onClick={() => navigate("")} className="linkItem">
                    <div>
                        <span className="material-symbols-outlined">
                            credit_card
                        </span>
                        <h4>Kanban Board</h4>
                    </div>
                </div>
                <div onClick={() => navigate("settings")} className="linkItem">
                    <div>
                        <span className="material-symbols-outlined">
                            settings_suggest
                        </span>
                        <h4>Project Settings</h4>
                    </div>
                </div>

                <div className="separator"></div>
                <button className="linkItem unreleased">
                    <div>
                        <span className="material-symbols-outlined">
                            local_shipping
                        </span>
                        <h4>Releases</h4>
                    </div>
                </button>
                <button className="linkItem unreleased">
                    <div>
                        <span className="material-symbols-outlined">dns</span>
                        <h4>Issue & Filters</h4>
                    </div>
                </button>
                <button className="linkItem unreleased">
                    <div>
                        <span className="material-symbols-outlined">
                            description
                        </span>
                        <h4>Pages</h4>
                    </div>
                </button>
                <button className="linkItem unreleased">
                    <div>
                        <span className="material-symbols-outlined">
                            trending_up
                        </span>
                        <h4>Reports</h4>
                    </div>
                </button>
                <button className="linkItem unreleased">
                    <div>
                        <span className="material-symbols-outlined">
                            team_dashboard
                        </span>
                        <h4>Components</h4>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
