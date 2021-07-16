import React from "react";

const Select = ({name, label, items, error, ...rest}) => {
  return(
    <div className="form-group mb-3">
      <label htmlFor={name} className="form-label">{label}</label>
      <select
        {...rest}
        id={name}
        name={name}
        className="form-control"
      >
        {items.map(item =>
          <option
            key={item._id}
            value={item._id}
          >
            {item.name}
          </option>
        )}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Select;