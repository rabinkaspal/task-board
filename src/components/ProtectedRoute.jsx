import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    const userLoggedIn = localStorage.getItem("userLoggedIn") || false;
    console.log("userLoggedIn: Protected", userLoggedIn);

    if (!userLoggedIn) {
        return <Navigate to="/" />;
    }
    return children;
};
export default Protected;
