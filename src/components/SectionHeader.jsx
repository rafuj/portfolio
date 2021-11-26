import React from "react";

export default function SectionHeader({ cate, title, txt, center }) {
  return (
    <div
      className={`section__header ${center ? "section__header__center" : ""}`}
    >
      <span className="section__category">{cate}</span>
      <h2 className="section__title">
        <span className="text--base">{title}</span>
      </h2>
      <p>{txt}</p>
    </div>
  );
}
