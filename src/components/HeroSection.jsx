import React from "react";

export default function HeroSection({ title }) {
  return (
    <section className="hero-section bg--section">
      <div className="container">
        <div className="text-center">
          <h1 className="title white--stroke">{title}</h1>
        </div>
      </div>
    </section>
  );
}
