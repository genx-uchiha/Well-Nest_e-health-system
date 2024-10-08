import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | WellNest E-health appliction"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoarewe.png"} />
    </>
  );
};

export default AboutUs;
