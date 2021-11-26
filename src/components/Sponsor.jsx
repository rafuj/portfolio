import React from "react";
import image1 from "../assets/images/partner/01.png";
import image2 from "../assets/images/partner/02.png";
import image3 from "../assets/images/partner/03.png";
import image4 from "../assets/images/partner/04.png";
import image5 from "../assets/images/partner/05.png";
import image6 from "../assets/images/partner/06.png";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SponsorImage from "./SponsorImage";
export default function Sponsor() {
  return (
    <Section background="bg--section">
      <SectionHeader
        center
        cate="Sponsor"
        title="My Sponsor"
        txt="Magni, modi autem velit deserunt cum libero blanditiis quibusdam officia non illum, nemo maiores, quae neque rerum!"
      />
      <div className="row justify-content-center g-3">
        <SponsorImage image={image1} />
        <SponsorImage image={image2} />
        <SponsorImage image={image3} />
        <SponsorImage image={image4} />
        <SponsorImage image={image5} />
        <SponsorImage image={image6} />
      </div>
    </Section>
  );
}
