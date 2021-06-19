import React from "react";
import {unstable_renderSubtreeIntoContainer} from "react-dom";

const ListGroup = (props) => {
    // Object destructuring
    const { items, textProperty, valueProperty } = props;

    return (
      <div className="genre-container">
          <ul className="list-group">
              { items.map(item =>
                  <li key={item[valueProperty]} className="list-group-item">
                      {item[textProperty]}
                  </li>)
              }
          </ul>
      </div>
    );
}

export default ListGroup;