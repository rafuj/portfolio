import React from "react";
import image from "../assets/images/banner/banner.jpg";
import SocialIcons from "./SocialIcons";
import classes from "./styles/Banner.module.css";
export default function Banner() {
  return (
    <section className="banner__section bg--section">
      <div className="container-fluid p-0">
        <div className="row g-0 flex-wrap-reverse">
          <div className="col-lg-6">
            <div className={`${classes.bannerThumb} h-100 bg--body`}>
              <img src={image} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className={classes.banner__content}>
              <div className={classes.banner__content__content}>
                <h5 className={`${classes.banner__content__cate} text--base`}>
                  Hi
                </h5>
                <h1 className={classes.banner__content__title}>
                  I'm{" "}
                  <span className="white--stroke">
                    Abu Raihan <span className="base--stroke">Rafuj</span>
                  </span>
                </h1>
              </div>
              <SocialIcons bannerPage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
