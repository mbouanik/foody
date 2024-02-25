import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div>
      {" "}
      <h1 style={{ color: "green" }}>
        <Spinner />
        Loading{" "}
      </h1>
    </div>
  );
};
export default Loading;
