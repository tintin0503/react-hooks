import React from "react";

const Panel = (props) => {
  return (
    <section className="panel">
      <h1>{props.title}</h1>
      {props.children}
    </section>
  )
};

export default Panel;
