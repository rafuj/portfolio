import React from "react";
import { Carousel } from "react-responsive-carousel";
import abir from "../assets/images/testimonial/abir.jpg";
import rifat from "../assets/images/testimonial/rifat.jpg";
import sohidul from "../assets/images/testimonial/sohidul.jpg";
import Client from "./Client";
import Section from "./Section";
export default function Clients() {
  return (
    <Section background="bg--body">
      <Carousel axis="vertical" autoPlay showThumbs={false} showStatus={false}>
        <Client
          name="Md. Rifayet Rifat"
          designation="Founder of Thesoftking"
          quote="I gotta say, this is one of the best html templates for price i've ever found. Seriously, top tier work. Great job! Thank You Mr. Rafuj for this Awesome work"
          image={rifat}
        />
        <Client
          image={abir}
          name="Md. Abir Khan"
          designation="Co-Founder of Thesoftking"
          quote="I gotta say, this is one of the best html templates for price i've ever found. Seriously, top tier work. Great job! Thank You Mr. Rafuj for this Awesome work"
        />
        <Client
          image={sohidul}
          name="Md. Sohidul Islam"
          designation="Founder of Pixner"
          quote="I gotta say, this is one of the best html templates for price i've ever found. Seriously, top tier work. Great job! Thank You Mr. Rafuj for this Awesome work"
        />
      </Carousel>
    </Section>
  );
}
