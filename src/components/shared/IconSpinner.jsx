import React from "react";
import { CgSpinnerTwo } from "react-icons/cg";

const IconSpinner = ({ size, color }) => {
    return (
        <CgSpinnerTwo
            size={size}
            style={{
                color: { color },
                animation:
                    "rotate 12s infinite cubic-bezier(0.55, 0.02, 0, 0.6)",
            }}
        />
    );
};

export default IconSpinner;
