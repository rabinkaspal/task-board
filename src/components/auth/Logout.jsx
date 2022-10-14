import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Logout = () => {
    const { logOut } = useLogin();

    useEffect(() => {
        logOut();
    }, []);

    return <Navigate to="/" />;
};

export default Logout;
