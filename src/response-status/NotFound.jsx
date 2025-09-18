import React from "react";

function NotFound({ message }) {
  return (
    <>
      <h3>404</h3>
      <p>{message || "Cannot be found"}</p>
    </>
  );
}

export default NotFound;
