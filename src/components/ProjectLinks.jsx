import React from "react";

export default function ProjectLinks({ link, title }) {
  const handlaLinks = () => {
    window.open(link);
  };

  return <li onClick={handlaLinks}>{title}</li>;
}
