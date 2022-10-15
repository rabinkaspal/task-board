import { doc, getDoc } from "firebase/firestore";
import db from "../../../firebase/firebase-config";
import { useParams } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import React, { useEffect, useState } from "react";

function ProjectDetails() {
    const [project, setProject] = useState();
    const { id: projectId } = useParams();

    useEffect(() => {
        const projectRef = doc(db, "projects", projectId);

        const fetchProject = async () => {
            const projectDoc = await getDoc(projectRef);
            if (projectDoc.exists()) {
                console.log("call remote");
                setProject(project => ({
                    ...project,
                    ...projectDoc.data(),
                    id: projectDoc.id,
                }));
                // setPending(false);
            } else {
                console.log("does not exists doc");
                // setPending(false);
            }
        };
        fetchProject();
    }, [projectId]);

    return (
        <>
            {project && (
                <ProjectPage
                    project={project}
                    updateProjectIssues={setProject}
                />
            )}
        </>
    );
}

export default ProjectDetails;
