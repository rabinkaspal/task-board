import React from "react";
import IconSpinner from "./IconSpinner";

const PageLoading = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                width: "100%",
                minHeight: "100vh",
                alignItems: "center",
                justifyContent: "center",
                color: "#2657a1",
            }}
        >
            <IconSpinner size="12rem" color="#2657a1" />
            <h1>Loading...</h1>
        </div>
    );
};

export default PageLoading;
