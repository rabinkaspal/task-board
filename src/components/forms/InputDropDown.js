import React from "react";
import { useField } from "formik";
import Select from "react-select";

const InputDropDown = ({ label, getOptionLabel, ...props }) => {
    const [field, meta] = useField(props);
    const dropdownOptions = [
        { value: "Food", label: "Food" },
        { value: "Being Fabulous", label: "Being Fabulous" },
        { value: "Ken Wheeler", label: "Ken Wheeler" },
        { value: "ReasonML", label: "ReasonML" },
        { value: "Unicorns", label: "Unicorns" },
        { value: "Kittens", label: "Kittens" },
    ];

    const getOptionsLabel = e => (
        <div
            style={{
                display: "flex",
                alignItems: "center",
            }}
        >
            {e.label}
            <span style={{ marginLeft: 5 }}>{e.value}</span>
        </div>
    );

    return (
        <div className="form-control">
            <label>{label}</label>
            <Select
                {...field}
                {...props}
                getOptionLabel={getOptionLabel}
                className={meta.touched && meta.error ? "input-error" : ""}
            />
            <div className="input-hint">{props.hint}</div>
            {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
            )}
        </div>
    );
};
export default InputDropDown;
