import React from "react";

import { useField } from "formik";

const DropDown = ({ label, options, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="form-control">
            <label>{label}</label>
            <select
                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-error" : ""}
            >
                {options &&
                    options.map((option, key) => (
                        <option key={key} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
            <div className="input-hint">{props.hint}</div>
            {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
            )}
        </div>
    );
};
export default DropDown;
