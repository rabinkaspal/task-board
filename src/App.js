import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import ProjectDetails from "./components/project/projectDetails/ProjectDetails";
import Projects from "./components/project/projectList/Projects";
import Protected from "./components/ProtectedRoute";

function App() {
    return (
        <Routes>
            <Route path="/" exact element={<Login />} />

            <Route
                path="projects"
                exact
                element={
                    <Protected>
                        <Projects />
                    </Protected>
                }
            />

            <Route
                path="projects/:id/*"
                element={
                    <Protected>
                        <ProjectDetails />
                    </Protected>
                }
            />
            <Route path="login" exact element={<Login />} />
            <Route path="logout" exact element={<Logout />} />
            <Route path="*" element={<Navigate to="/" />} />
            {/* <Route path="/project" exact element={<Projects />} /> */}
        </Routes>
    );
}

export default App;
