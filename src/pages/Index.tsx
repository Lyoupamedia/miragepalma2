import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "LM Barberia",
  description: "Barbería premium con cortes de cabello, arreglo de barba y afeitado clásico. Estilo y precisión profesional.",
  url: "https://lmbarberia.lovable.app",
  image: "/hero-barbershop.jpg",
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-20:00",
  telephone: "+1-XXX-XXX-XXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tu dirección aquí",
    addressLocality: "Tu Ciudad",
    addressRegion: "Tu Estado",
    addressCountry: "US",
  },
  sameAs: [],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LM Barberia | Barbería Premium - Cortes, Barba y Afeitado</title>
        <meta
          name="description"
          content="LM Barberia - Barbería premium con cortes de cabello, arreglo de barba y afeitado clásico. Reserva tu cita online. Estilo y precisión profesional."
        />
        <meta name="keywords" content="barbería, corte de cabello, barba, afeitado, fade, barbería premium, LM Barberia" />
        <meta property="og:title" content="LM Barberia | Barbería Premium" />
        <meta property="og:description" content="Cortes de cabello, arreglo de barba y afeitado clásico con precisión profesional. Reserva tu cita online." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lmbarberia.lovable.app" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
