import React from "react";

export default function SponsorImage({ image }) {
  return (
    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
      <div className="partner-thumb">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
