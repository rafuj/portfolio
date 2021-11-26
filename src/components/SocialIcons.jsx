import React from "react";
import facebook from "../assets/images/banner/facebook.png";
import instagram from "../assets/images/banner/instagram.png";
import linkedin from "../assets/images/banner/linkedin.png";
import whatsapp from "../assets/images/banner/whatsapp.png";
import SocialLink from "./SocialLink";
import classes from "./styles/SocialIcons.module.css";
export default function SocialIcons({ bannerPage }) {
  return (
    <ul
      className={
        bannerPage
          ? `${classes.banner__social__icons}`
          : "social__icons justify-content-md-end justify-content-center"
      }
    >
      <SocialLink
        link="https://www.facebook.com/raihanrafuj9978/"
        icon={facebook}
      ></SocialLink>
      <SocialLink
        link="https:/api.whatsapp.com/send?phone=+8801707592756&text=Welcome Brother, This is Abu Raihan Rafuj"
        icon={whatsapp}
      ></SocialLink>
      <SocialLink
        link="https://www.instagram.com/raihanrafuj9978/?hl=en"
        icon={instagram}
      ></SocialLink>
      <SocialLink
        link="https://www.linkedin.com/in/abu-rahan-rafuj-11b934180/"
        icon={linkedin}
      ></SocialLink>
    </ul>
  );
}
