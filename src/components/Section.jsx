import React from "react";

export default function Section({ background, children }) {
  return (
    <section className={`pt-120 pb-120 ${background}`}>
      <div className="container">{children}</div>
    </section>
  );
}
