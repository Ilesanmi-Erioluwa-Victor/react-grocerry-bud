import React, { useEffect } from "react";

export const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const hideAlert = setTimeout(() => {
      removeAlert();
    }, 2500);

    return () => clearTimeout(hideAlert);
  }, [removeAlert]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};
