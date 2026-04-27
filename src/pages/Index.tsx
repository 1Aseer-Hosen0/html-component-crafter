import { useState } from "react";
import { Navbar } from "@/components/mindsphere/Navbar";
import { Hero } from "@/components/mindsphere/Hero";
import { About } from "@/components/mindsphere/About";
import { Blog } from "@/components/mindsphere/Blog";
import { Events } from "@/components/mindsphere/Events";
import { Testimonials } from "@/components/mindsphere/Testimonials";
import { JoinCta } from "@/components/mindsphere/JoinCta";
import { Faq } from "@/components/mindsphere/Faq";
import { Collab } from "@/components/mindsphere/Collab";
import { Contact } from "@/components/mindsphere/Contact";
import { Newsletter } from "@/components/mindsphere/Newsletter";
import { Footer } from "@/components/mindsphere/Footer";
import { NewsletterModal } from "@/components/mindsphere/NewsletterModal";
import { useScrollReveal } from "@/components/mindsphere/hooks";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Blog />
        <Events />
        <Testimonials />
        <JoinCta />
        <Faq />
        <Collab />
        <Contact />
        <Newsletter onOpen={() => setModalOpen(true)} />
      </main>
      <Footer />
      <NewsletterModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Index;
