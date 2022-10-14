import React from "react";

import { useField } from "formik";

const DropDown = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="form-control">
            <label>{label}</label>
            <select
                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-error" : ""}
            />
            <div className="input-hint">{props.hint}</div>
            {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
            )}
        </div>
    );
};
export default DropDown;
