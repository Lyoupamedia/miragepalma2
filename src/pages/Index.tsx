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
  name: "Royal Barber Shop",
  description: "Barbería premium en Palma de Mallorca. Cortes de cabello, arreglo de barba y afeitado clásico. Estilo y precisión profesional.",
  url: "https://lmbarbershop.lovable.app",
  image: "/hero-barbershop.jpg",
  priceRange: "$$",
  openingHours: "Mo-Su 09:00-21:00",
  telephone: "+34643719547",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer Arxiduc Lluís Salvador, 23A",
    postalCode: "07004",
    addressLocality: "Palma",
    addressRegion: "Illes Balears",
    addressCountry: "ES",
  },
  sameAs: [],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Royal Barber Shop | Barbería Premium en Palma de Mallorca</title>
        <meta
          name="description"
          content="Royal Barber Shop - Barbería premium en Palma de Mallorca. Cortes de cabello, arreglo de barba y afeitado clásico. Reserva tu cita por WhatsApp."
        />
        <meta name="keywords" content="barbería, Palma de Mallorca, corte de cabello, barba, afeitado, fade, barbería premium, Royal Barber Shop" />
        <meta property="og:title" content="Royal Barber Shop | Barbería Premium en Palma" />
        <meta property="og:description" content="Cortes de cabello, arreglo de barba y afeitado clásico con precisión profesional. Reserva tu cita por WhatsApp." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lmbarbershop.lovable.app" />
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
