import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export const List = ({ item, removeItem }) => {
  return (
    <div className="grocery-list">
      {item.map((item) => {
        const { id, itemName } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{itemName}</p>

            <div className="btn-container">
              <button type="button" className="edit-btn">
                {" "}
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                {" "}
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
