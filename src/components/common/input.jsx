import React from "react";

const Input = ({name, label, error, ...rest}) => {
    return (
        <div className="form-group mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
              {...rest}
              id={name}
              name={name}
              className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;

// Second Implementation
/*const Input = ({type, name, label, value, error, onChange}) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name} className="form-label">{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};*/

// First Implementation
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