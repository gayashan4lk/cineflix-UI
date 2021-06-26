import React from "react";

const Input = ({name, label, value, onChange}) => {
    return (
        <div className="form-group mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                value={value}
                onChange={onChange}
                id={name}
                name={name}
                type="text"
                className="form-control" />
        </div>
    );
};
// This function is the same thing as below!
/*const Input = (props) => {
    return (
        <div className="form-group mb-3">
            <label htmlFor={props.name} className="form-label">{props.label}</label>
            <input
                value={props.value}
                onChange={onChange}
                id={props.name}
                name={props.name}
                type="text"
                className="form-control" />
        </div>
    );
};*/

export default Input;