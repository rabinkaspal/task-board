import React from "react";

import { useField } from "formik";
import Select from "react-select";
import "./MultiSelect.module.css";

const MultiDropDown = ({ label, hint, ...props }) => {
    // const [field, meta] = useField(props);
    const [field, meta, helpers] = useField(props);

    const handleChange = val => {
        helpers.setValue(val);
        helpers.setTouched(true);
    };

    return (
        <div className="form-control">
            <label>{label}</label>
            <Select
                // className="mdd-container"
                // classNamePrefix="mdd"
                styles={customStyles}
                isMulti={true}
                value={field.value}
                {...props}
                {...field}
                onChange={handleChange}
            />

            <div className="input-hint">{hint}</div>
            {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
            )}
        </div>
    );
};
export default MultiDropDown;

const customStyles = {
    container: (provided, state) => ({
        ...provided,
        fontSize: 13,
        outline: "red",
    }),
    control: (provided, state) => ({
        ...provided,
        background: "#f0f0f0",
        borderRadius: 2,
        height: 35,
        minHeight: 10,
        borderColor: "#ddd",
        boxShadow: "none",
        "&:hover": {
            borderColor: "#ddd",
        },
    }),
    clearIndicator: (provided, state) => ({
        ...provided,
        padding: "0 8px",
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        padding: "0 8px",
    }),

    input: (provided, state) => ({
        ...provided,
        margin: 0,
        padding: 0,
        height: 30,
    }),
    inputContainer: (provided, state) => ({ ...provided, height: 30 }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: "0 8px",
    }),
    menu: (provided, state) => {
        return { ...provided, borderRadius: 2 };
    },
    multiValueLabel: (provided, state) => ({
        ...provided,
        fontSize: 13,
        color: "#525252",
    }),

    multiValue: (provided, state) => ({
        ...provided,
        backgroundColor: "hsl(218deg 100% 72% / 32%)",
    }),
    multiValueRemove: (provided, state) => ({
        ...provided,
        borderRadius: "0 2px 2px 0",
        color: "#97b0dc",
        transition: "all 0.2s ease-out",
        "&:hover": {
            color: "#2360c9",
            // background: "#4081f0",
            background: "transparent",
            cursor: "pointer",
        },
    }),
    svg: provided => ({
        fill: "#4081f0",
        strokeWidth: 7,
    }),

    // singleValue: (provided, state) => {
    //     const opacity = state.isDisabled ? 0.5 : 1;
    //     const transition = "opacity 300ms";

    //     return { ...provided, opacity, transition };
    // },
};
