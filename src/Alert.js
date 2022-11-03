import React from "react";

export const Alert = ({ type, msg }) => {
  return <p className={`error error-${type}`}>{msg}</p>;
};
