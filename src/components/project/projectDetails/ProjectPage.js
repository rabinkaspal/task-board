import React from "react";
import Sidebar from "../../Sidebar";
import ProjectMenu from "./ProjectMenu";
import ProjectBoard from "./ProjectBoard";
import NewIssue from "../../issues/NewIssue";
import { Routes, Route } from "react-router-dom";
import Modal from "../../Modal";
import { useModalHelper } from "../../../hooks/useModalHelper";
import IssueCreate from "../../forms/IssueCreate/IssueCreate";
import IssueSearch from "../../forms/IssueSearch/IssueSearch";

const ProjectPage = ({ project, updateProjectIssues }) => {
    const {
        open: issueCreateModalOpen,
        close: issueCreateModalClose,
        isOpen: issueCreateModalIsOpen,
    } = useModalHelper("issue-create");

    const {
        open: issueSearchModalOpen,
        close: issueSearchModalClose,
        isOpen: issueSearchModalIsOpen,
    } = useModalHelper("issue-search");

    return (
        <div className="projectBoard">
            <div className="project-sidebar">
                <ProjectMenu
                    issueCreateModalOpen={issueCreateModalOpen}
                    issueSearchModalOpen={issueSearchModalOpen}
                />
                <Sidebar project={project} />
            </div>

            {issueSearchModalIsOpen() && (
                <Modal
                    isOpen
                    type="aside"
                    onClose={issueSearchModalClose}
                    renderContent={() => (
                        <IssueSearch
                            onClose={issueSearchModalClose}
                            project={project}
                        />
                    )}
                />
            )}

            {issueCreateModalIsOpen() && (
                <Modal
                    isOpen
                    onClose={issueCreateModalClose}
                    renderContent={modal => (
                        <IssueCreate project={project} onClose={modal.close} />
                    )}
                />
            )}

            {/* <Route
                    path="board/issues/:issueId"
                    element={
                        <Modal
                            isOpen
                            onClose={issueCreateModalClose}
                            renderContent={modal => (
                                <IssueCreate
                                    project={project}
                                    onCreate={() => history.back()}
                                    onClose={modal.close}
                                />
                            )}
                        />
                    }
                /> */}

            <Routes>
                {/* <Route path="/" element={<Navigate to="board" />} /> */}
                <Route
                    path="*"
                    element={
                        <ProjectBoard
                            project={project}
                            updateProjectIssues={updateProjectIssues}
                        />
                    }
                    replace
                />

                {/* <Route
                    path="board/*"
                    element={
                        <ProjectBoard
                            project={project}
                            updateProjectIssues={updateProjectIssues}
                        />
                    }
                /> */}

                <Route path="settings" element={<NewIssue />} replace />
            </Routes>
        </div>
    );
};

export default ProjectPage;
