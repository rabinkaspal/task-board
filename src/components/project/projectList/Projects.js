import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { useCollection } from "../../../hooks/useCollection";
import ProfileCard from "../../../components/ProfileCard";
import ProjectHeader from "./ProjectHeader";
import ProjectList from "./ProjectList";
import { useLogin } from "../../../hooks/useLogin";
import { Navigate } from "react-router-dom";

const Projects = () => {
    const { document: projects } = useCollection("projects");
    console.log("projects", projects);

    const user =
        useAuthContext().user ||
        JSON.parse(localStorage.getItem("loggedInUser"));

    const isUserLoggedIn = localStorage.getItem("userLoggedIn") || false;

    const { logOut } = useLogin();

    return isUserLoggedIn ? (
        <div style={{ paddingTop: "40px" }}>
            <ProjectHeader user={user} logOut={logOut} />
            {projects && <ProjectList projects={projects} />}
            {user && <ProfileCard user={user} />}
        </div>
    ) : (
        <Navigate to="/" />
    );
};

export default Projects;
