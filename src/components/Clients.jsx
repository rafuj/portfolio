import React from "react";
import { Carousel } from "react-responsive-carousel";
import useClientsSay from "../hooks/useClientsSay";
import Client from "./Client";
import Section from "./Section";
export default function Clients() {
  const { loading, error, clientsSay } = useClientsSay();
  return (
    <Section background="bg--body">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={false}
        axis="vertical"
      >
        {!loading &&
          clientsSay.length > 0 &&
          clientsSay.map((item) => (
            <Client
              key={item.designation}
              name={item.name}
              designation={item.designation}
              quote={item.quote}
              image={item.image}
            />
          ))}
      </Carousel>
      {!loading && clientsSay.length === 0 && (
        <div className="noDataFound">No Testimonials Available</div>
      )}
      {error && <div className="errorFound">There Was an Error</div>}
      {loading && <div className="errorFound">Loading...</div>}
    </Section>
  );
}
