import React from "react";

const Title = (props) => {
  return (
    <>
      <div className="container has-text-centered">
        <h1 className="title has-text-">{props.text}</h1>
        <p className="subtitle">{/* Top Rated Categories */}</p>
      </div>
    </>
  );
};

export default Title;
