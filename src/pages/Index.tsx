import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const SITE_URL = "https://miragepalma2.lovable.app";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ccdc6b1c-6df4-400d-a768-dcad1076063c/id-preview-9861061d--7dde52f0-45d0-4d2e-9ced-d106459bb2f2.lovable.app-1774909098368.png";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["BarberShop", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: "MIRAGE | BARBERSHOP PALMA",
  alternateName: "Mirage Barbershop",
  description:
    "Barbería premium en Palma de Mallorca. Cortes de cabello, fade, arreglo de barba y afeitado clásico. Estilo y precisión profesional.",
  url: SITE_URL,
  image: OG_IMAGE,
  logo: OG_IMAGE,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  telephone: "+34617957732",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer de l'Arxiduc Lluís Salvador, 23A, Nord",
    postalCode: "07004",
    addressLocality: "Palma",
    addressRegion: "Illes Balears",
    addressCountry: "ES",
  },
  geo: { "@type": "GeoCoordinates", latitude: 39.5801, longitude: 2.6545 },
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
  hasMenu: {
    "@type": "Menu",
    name: "Servicios de Barbería",
    hasMenuItem: [
      {
        "@type": "MenuItem",
        name: "Corte",
        offers: { "@type": "Offer", price: "12.00", priceCurrency: "EUR" }
      },
      {
        "@type": "MenuItem",
        name: "Corte & Barba",
        offers: { "@type": "Offer", price: "18.00", priceCurrency: "EUR" }
      },
      {
        "@type": "MenuItem",
        name: "Jubilado",
        offers: { "@type": "Offer", price: "10.00", priceCurrency: "EUR" }
      },
      {
        "@type": "MenuItem",
        name: "Niños",
        offers: { "@type": "Offer", price: "10.00", priceCurrency: "EUR" }
      },
      {
        "@type": "MenuItem",
        name: "Champú",
        offers: { "@type": "Offer", price: "2.00", priceCurrency: "EUR" }
      },
      {
        "@type": "MenuItem",
        name: "Arreglo de Barba",
        offers: { "@type": "Offer", price: "8.00", priceCurrency: "EUR" }
      }
    ]
  },
  hasMap: "https://www.google.com/maps?q=MIRAGE+%7C+BARBERSHOP+PALMA",
  sameAs: [
    "https://www.instagram.com/miragepalma",
    "https://www.facebook.com/miragepalma",
    "https://www.tiktok.com/@miragepalma",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Mirage Barbershop Palma",
  inLanguage: ["es-ES", "en", "fr"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Necesito cita previa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aunque recomendamos reservar para asegurar tu hueco, también aceptamos clientes sin cita previa (walk-ins) según disponibilidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es vuestro horario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Estamos abiertos todos los días de la semana, de lunes a domingo, desde las 09:00 hasta las 21:30."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde estáis ubicados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos encontramos en Carrer de l'Arxiduc Lluís Salvador, 23A, Nord, 07004 Palma, Illes Balears."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecéis servicios para niños?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos cortes de pelo para niños con un estilo adaptado y mucha paciencia por 10€."
      }
    }
  ]
};

const TITLE = "Mirage Barbershop Palma | Barbería Premium en Palma de Mallorca";
const DESCRIPTION =
  "Mirage Barbershop en Palma de Mallorca: cortes de cabello, fade, arreglo de barba y afeitado clásico. Abierto todos los días 09:00-21:30. Reserva por WhatsApp.";

const Index = () => {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="barbería Palma, barber shop Palma de Mallorca, corte de pelo Palma, fade Palma, arreglo de barba, afeitado clásico, Mirage Barbershop"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta property="og:type" content="business.business" />
        <meta property="og:site_name" content="Mirage Barbershop Palma" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mirage Barbershop Palma" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(businessJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>


      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
