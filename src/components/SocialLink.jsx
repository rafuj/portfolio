import React from "react";

export default function SocialLink({ link, icon }) {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <li onClick={handleClick}>
      <img src={icon} alt="" />
    </li>
  );
}
