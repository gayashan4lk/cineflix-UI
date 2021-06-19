import React from "react";

const ListGroup = (props) => {
    // Object destructuring
    const { items, textProperty, valueProperty, selectedItem, onItemSelect } = props;

    return (
      <div className="genre-container">
          <ul className="list-group">
              { items.map(item =>
                  <li
                      onClick={() => onItemSelect(item)}
                      key={item[valueProperty]}
                      className={ item === selectedItem ? "list-group-item active" : "list-group-item"}
                  >
                      {item[textProperty]}
                  </li>)
              }
          </ul>
      </div>
    );
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}

export default ListGroup;