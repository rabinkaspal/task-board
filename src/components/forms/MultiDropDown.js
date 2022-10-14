import React from "react";

import { useField } from "formik";
import Select from "react-select";

const MultiDropDown = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="form-control">
            <label>{label}</label>
            <Select
                options={props.options}
                isMulti={true}
                value={props.values}
            />
            <div className="input-hint">{props.hint}</div>
            {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
            )}
        </div>
    );
};
export default MultiDropDown;
