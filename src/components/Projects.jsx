import React from "react";
import arohyip_image from "../assets/images/project/arohyip.jpg";
import boleto_image from "../assets/images/project/boleto.jpg";
import bzen_image from "../assets/images/project/bzen.jpg";
import currencia_image from "../assets/images/project/currencia.jpg";
import eveneu_image from "../assets/images/project/eveneu.jpg";
import footme_image from "../assets/images/project/footme.jpg";
import gymio_image from "../assets/images/project/gymio.jpg";
import hyipland_image from "../assets/images/project/hyipland.jpg";
import kasino_image from "../assets/images/project/kasino.jpg";
import mosto_image from "../assets/images/project/mosto.jpg";
import sbidu_image from "../assets/images/project/sbidu.jpg";
import webino_image from "../assets/images/project/webino.jpg";
import Project from "./Project";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Projects({ bg }) {
  return (
    <Section background={bg ? bg : "bg--section"}>
      <SectionHeader
        center
        cate="Projects"
        title="Some Envato Projects"
        txt="Magni, modi autem velit deserunt cum libero blanditiis quibusdam officia non illum, nemo maiores, quae neque rerum!"
      />
      <div className="row g-4 justify-content-center">
        <Project
          image={mosto_image}
          link="https://pixner.net/mosto"
          title="Mosto - app landing page"
        />
        <Project
          image={arohyip_image}
          link="http://brotherslab.thesoftking.com/html/arohyip/"
          title="Arohyip - HYIP Investment Business HTML Template"
        />
        <Project
          image={hyipland_image}
          link="https://themeforest.net/item/hyipland-hyip-investment-html-template/25892443?s_rank=23"
          title="Hyipland - HYIP Investment HTML Template"
        />
        <Project
          image={boleto_image}
          link="https://themeforest.net/item/boleto-online-ticket-booking-website-html-template/25691030?s_rank=25"
          title="Boleto - Online Ticket Booking Website HTML Template"
        />
        <Project
          image={gymio_image}
          link="https://thesoftking.com/html/gymio/"
          title="Gymio - Fitness and Gym HTML Template"
        />
        <Project
          image={webino_image}
          link="http://idealbrothers.thesoftking.com/html/webino/"
          title="Webino - Webinar Landing Page HTML Template"
        />
        <Project
          image={kasino_image}
          link="https://pixner.net/mosto"
          title="Kasino - Casino HTML Template"
        />
        <Project
          image={eveneu_image}
          link="http://idealbrothers.thesoftking.com/html/eveneu/"
          title="Eveneu - Neumorphic Conference &amp; Seminar Template"
        />
        <Project
          image={footme_image}
          link="https://template.viserlab.com/footme"
          title="Footme - Football Player Portfolio HTML Template"
        />
        <Project
          image={sbidu_image}
          link="https://pixner.net/sbidu/"
          title="Sbidu - Bid And Auction HTML Template"
        />
        <Project
          image={currencia_image}
          link="https://brotherslab.thesoftking.com/html/currencia/"
          title="Currencia - Dark Currency Exchanger HTML Template"
        />
        <Project
          image={bzen_image}
          link="https://rexbd.net/html/bzen/"
          title="Bzen - Neomorphic Business Website HTML Template"
        />
      </div>
    </Section>
  );
}
