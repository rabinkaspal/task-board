import React from "react";
import { CgSpinnerTwo } from "react-icons/cg";

const NewIssue = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                color: "#2657a1",
            }}
        >
            <CgSpinnerTwo
                size="12rem"
                style={{
                    color: "#2657a1",
                    animation:
                        "rotate 12s infinite cubic-bezier(0.55, 0.02, 0, 0.6)",
                }}
            />{" "}
            <h1>Loading...</h1>
        </div>
    );
};

export default NewIssue;
