import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import ProjectLinks from "./ProjectLinks";
import SocialIcons from "./SocialIcons";
import classes from "./styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between gy-5 gx-xl-5">
            <div className="col-xl-3 col-md-6">
              <div className="footer__widget">
                <div className="logo">
                  <Logo />
                </div>
                <p>
                  Aut assumenda architecto iure eum quasi. Minus optio, pariatur
                  labore dolor id quibusdam ullam, dolore eos architecto, odit
                  ipsum.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="footer__widget">
                <h5 className="widget__title">Latest Projects</h5>
                <ul className={classes.latestProject}>
                  <ProjectLinks
                    link="https://pixner.net/mosto"
                    title="Mosto - app landing page"
                  />
                  <ProjectLinks
                    link="http://brotherslab.thesoftking.com/html/arohyip/"
                    title="Arohyip - HYIP Investment Business HTML Template"
                  />
                  <ProjectLinks
                    link="https://themeforest.net/item/hyipland-hyip-investment-html-template/25892443?s_rank=23"
                    title="Hyipland - HYIP Investment HTML Template"
                  />
                  <ProjectLinks
                    link="https://themeforest.net/item/boleto-online-ticket-booking-website-html-template/25691030?s_rank=25"
                    title="Boleto - Online Ticket Booking Website HTML Template"
                  />
                  <ProjectLinks
                    link="https://thesoftking.com/html/gymio/"
                    title="Gymio - Fitness and Gym HTML Template"
                  />
                  <ProjectLinks
                    link="http://idealbrothers.thesoftking.com/html/webino/"
                    title="Webino - Webinar Landing Page HTML Template"
                  />
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="footer__widget">
                <h5 className="widget__title">Contact Information</h5>
                <ul className="contact__information">
                  <li>
                    <span className="subtitle">WhatsApp</span>
                    <Link to="Tel:+880 1707592756">+880 1707592756</Link>
                  </li>
                  <li>
                    <span className="subtitle">Email</span>
                    <Link to="Mailto:raihanrafuj9978@gmail.com">
                      raihanrafuj9978@gmail.com
                    </Link>
                  </li>
                  <li>
                    <span className="subtitle">Address</span>
                    <span className="info">Uttara, Dhaka</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="footer__widget">
                <h5 className="widget__title">Quick Information</h5>
                <ul className="widget__information">
                  <li>
                    <span className="subtitle">Total Project</span>
                    <span className="info">40+</span>
                  </li>
                  <li>
                    <span className="subtitle">Total Happy Client's</span>
                    <span className="info">1000+</span>
                  </li>
                  <li>
                    <span className="subtitle">Total Subscriber</span>
                    <span className="info">1.7K</span>
                  </li>
                  <li>
                    <span className="subtitle">Total Sponsor</span>
                    <span className="info">11</span>
                  </li>
                  <li>
                    <span className="subtitle">Total Sale</span>
                    <span className="info">2000+</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-3">
        <div className="container">
          <div className="row g-3 align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <span className="copyright">
                &copy; All Right Reserved by{" "}
                <Link to="/" className="text--base">
                  Rafuj
                </Link>
              </span>
            </div>
            <div className="col-md-6">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
