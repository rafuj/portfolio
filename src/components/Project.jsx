import React from "react";

export default function Project({ image, title, link }) {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="project__item" onClick={handleClick}>
        <div className="project__thumb">
          <img src={image} alt="" />
        </div>
        <div className="project__content">
          <h6 className="project__title">{title}</h6>
        </div>
      </div>
    </div>
  );
}
