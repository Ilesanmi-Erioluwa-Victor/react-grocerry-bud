import React from "react";

export const Alert = ({ type, msg }) => {
  return <p className={`alert alert-${type}`}>{msg}</p>;
};
