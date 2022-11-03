import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export const List = ({ item }) => {
  return (
    <div className="grocery-list">
      {item.map((item) => {
        const { id, newItem } = item;
        return <article key={id}></article>;
      })}
    </div>
  );
};
