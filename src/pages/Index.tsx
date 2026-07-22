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
  "@type": ["BarberShop", "LocalBusiness"],
  "@id": "https://lmbarbershop.lovable.app/#business",
  name: "MIRAGE | BARBERSHOP PALMA",
  alternateName: "Mirage Barbershop",
  description: "Barbería premium en Palma de Mallorca. Cortes de cabello, arreglo de barba y afeitado clásico. Estilo y precisión profesional.",
  url: "https://lmbarbershop.lovable.app",
  image: "https://lmbarbershop.lovable.app/hero-barbershop.jpg",
  logo: "https://lmbarbershop.lovable.app/hero-barbershop.jpg",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  telephone: "+34617957732",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer Arxiduc Lluís Salvador, 23A",
    postalCode: "07004",
    addressLocality: "Palma",
    addressRegion: "Illes Balears",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.5732,
    longitude: 2.6412,
  },
  areaServed: [
    { "@type": "City", name: "Palma de Mallorca" },
    { "@type": "AdministrativeArea", name: "Illes Balears" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:30",
    },
  ],
  hasMap: "https://www.google.com/maps?q=MIRAGE+%7C+BARBERSHOP+PALMA",
  sameAs: [
    "https://www.instagram.com/miragepalma",
    "https://www.facebook.com/miragepalma",
    "https://www.tiktok.com/@miragepalma",
  ],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mirage | Barbería Premium en Palma de Mallorca</title>
        <meta
          name="description"
          content="Mirage - Barbería premium en Palma de Mallorca. Cortes de cabello, arreglo de barba y afeitado clásico. Reserva tu cita por WhatsApp."
        />
        <meta name="keywords" content="barbería, Palma de Mallorca, corte de cabello, barba, afeitado, fade, barbería premium, Mirage" />
        <meta property="og:title" content="Mirage | Barbería Premium en Palma" />
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
