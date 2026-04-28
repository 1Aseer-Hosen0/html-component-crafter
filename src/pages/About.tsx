import { Navbar } from "@/components/mindsphere/Navbar";
import { Footer } from "@/components/mindsphere/Footer";
import { JoinCta } from "@/components/mindsphere/JoinCta";
import { AboutHero } from "@/components/mindsphere/about/AboutHero";
import { Story } from "@/components/mindsphere/about/Story";
import { WhatWeDo } from "@/components/mindsphere/about/WhatWeDo";
import { Impact } from "@/components/mindsphere/about/Impact";
import { Vision } from "@/components/mindsphere/about/Vision";
import { Team } from "@/components/mindsphere/about/Team";
import { useScrollReveal } from "@/components/mindsphere/hooks";
import { useEffect } from "react";

const About = () => {
  useScrollReveal();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "About — Mindsphere";
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    meta?.setAttribute(
      "content",
      "Mindsphere is a teen-led mental wellness platform — built by teenagers, for teenagers. Meet the team, our story, vision and impact."
    );
    return () => {
      document.title = prevTitle;
      meta?.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <Story />
        <WhatWeDo />
        <Impact />
        <Vision />
        <Team />
        <JoinCta />
      </main>
      <Footer />
    </>
  );
};

export default About;