import React from "react";
import { BsQuestionLg } from "react-icons/bs";

export default function Client({ name, designation, quote, image }) {
  return (
    <div className="client__item">
      <span className="quote__icon">
        <BsQuestionLg />
      </span>
      <div className="client__thumb">
        <img src={image} alt="" />
      </div>
      <div className="client__content">
        <h3 className="client__title">{name}</h3>
        <span className="client__designation">{designation}</span>
        <blockquote className="client__quote">{quote}</blockquote>
      </div>
    </div>
  );
}
