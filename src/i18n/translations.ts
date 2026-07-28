export type Language = "es" | "en" | "fr";

export const translations = {
  // Navbar
  nav: {
    home: { es: "Inicio", en: "Home", fr: "Accueil" },
    services: { es: "Servicios", en: "Services", fr: "Services" },
    about: { es: "Nosotros", en: "About", fr: "À propos" },
    gallery: { es: "Galería", en: "Gallery", fr: "Galerie" },
    contact: { es: "Contacto", en: "Contact", fr: "Contact" },
    bookCta: { es: "Reservar Cita", en: "Book Now", fr: "Réserver" },
  },

  // Hero
  hero: {
    subtitle: { es: "Barbería Premium", en: "Premium Barbershop", fr: "Barbier Premium" },
    description: {
      es: "Donde el estilo clásico se encuentra con la precisión moderna. Cortes de cabello, afeitados y grooming de primera clase.",
      en: "Where classic style meets modern precision. Haircuts, shaves, and first-class grooming.",
      fr: "Où le style classique rencontre la précision moderne. Coupes, rasages et soins de première classe.",
    },
    bookWhatsapp: { es: "Reservar por WhatsApp", en: "Book via WhatsApp", fr: "Réserver par WhatsApp" },
    viewServices: { es: "Ver Servicios", en: "View Services", fr: "Voir les Services" },
  },

  // Services
  services: {
    subtitle: { es: "Nuestros Servicios", en: "Our Services", fr: "Nos Services" },
    title: { es: "Servicios", en: "Services", fr: "Services" },
    premium: { es: "Premium", en: "Premium", fr: "Premium" },
    bookCta: { es: "Reservar Cita", en: "Book Appointment", fr: "Prendre Rendez-vous" },
    haircut: {
      title: { es: "Corte", en: "Haircut", fr: "Coupe" },
      description: {
        es: "Corte clásico o moderno con acabado profesional a tu gusto.",
        en: "Classic or modern cut with a professional finish to your taste.",
        fr: "Coupe classique ou moderne avec une finition professionnelle selon vos goûts.",
      },
      price: { es: "12€", en: "€12", fr: "12€" },
    },
    haircutBeard: {
      title: { es: "Corte & Barba", en: "Haircut & Beard", fr: "Coupe & Barbe" },
      description: {
        es: "Pack completo con corte de cabello y arreglo de barba.",
        en: "Complete pack with haircut and beard trim.",
        fr: "Pack complet avec coupe de cheveux et taille de barbe.",
      },
      price: { es: "18€", en: "€18", fr: "18€" },
    },
    senior: {
      title: { es: "Jubilado", en: "Senior", fr: "Senior" },
      description: {
        es: "Tarifa especial para jubilados con el mismo servicio de calidad.",
        en: "Special rate for seniors with the same quality service.",
        fr: "Tarif spécial pour seniors avec le même service de qualité.",
      },
      price: { es: "10€", en: "€10", fr: "10€" },
    },
    kids: {
      title: { es: "Niños", en: "Kids", fr: "Enfants" },
      description: {
        es: "Corte infantil con paciencia y estilo para los más pequeños.",
        en: "Kids' cut with patience and style for the little ones.",
        fr: "Coupe enfant avec patience et style pour les plus petits.",
      },
      price: { es: "10€", en: "€10", fr: "10€" },
    },
    shampoo: {
      title: { es: "Champú", en: "Shampoo", fr: "Shampoing" },
      description: {
        es: "Lavado refrescante con champú premium antes o después de tu corte.",
        en: "Refreshing wash with premium shampoo before or after your cut.",
        fr: "Lavage rafraîchissant avec shampoing premium avant ou après votre coupe.",
      },
      price: { es: "2€", en: "€2", fr: "2€" },
    },
    beard: {
      title: { es: "Arreglo de Barba", en: "Beard Trim", fr: "Taille de Barbe" },
      description: {
        es: "Perfilado, recorte y diseño de barba con productos premium.",
        en: "Shaping, trimming and beard design with premium products.",
        fr: "Façonnage, taille et design de barbe avec des produits premium.",
      },
      price: { es: "8€", en: "€8", fr: "8€" },
    },
  },

  // About
  about: {
    subtitle: { es: "Sobre Nosotros", en: "About Us", fr: "À Propos" },
    titlePre: { es: "Más que una", en: "More than a", fr: "Plus qu'un" },
    titleHighlight: { es: "Barbería", en: "Barbershop", fr: "Barbier" },
    p1: {
      es: "En Mirage combinamos la tradición del oficio con las tendencias más actuales. Nuestro equipo de barberos profesionales se dedica a ofrecer una experiencia única, donde cada cliente recibe atención personalizada.",
      en: "At Mirage we combine the tradition of the craft with the latest trends. Our team of professional barbers is dedicated to offering a unique experience, where every client receives personalized attention.",
      fr: "Chez Mirage, nous combinons la tradition du métier avec les dernières tendances. Notre équipe de barbiers professionnels se consacre à offrir une expérience unique, où chaque client reçoit une attention personnalisée.",
    },
    p2: {
      es: "Utilizamos productos de primera calidad y técnicas avanzadas para garantizar resultados impecables. Tu estilo, nuestra pasión.",
      en: "We use top-quality products and advanced techniques to guarantee flawless results. Your style, our passion.",
      fr: "Nous utilisons des produits de première qualité et des techniques avancées pour garantir des résultats impeccables. Votre style, notre passion.",
    },
    stats: {
      experience: { es: "Años de experiencia", en: "Years of experience", fr: "Années d'expérience" },
      clients: { es: "Clientes satisfechos", en: "Happy clients", fr: "Clients satisfaits" },
      commitment: { es: "Compromiso", en: "Commitment", fr: "Engagement" },
    },
  },

  // Gallery
  gallery: {
    subtitle: { es: "Nuestro Trabajo", en: "Our Work", fr: "Notre Travail" },
    title: { es: "Galería", en: "Gallery", fr: "Galerie" },
  },

  // Contact
  contact: {
    subtitle: { es: "Encuéntranos", en: "Find Us", fr: "Nous Trouver" },
    title: { es: "Contacto", en: "Contact", fr: "Contact" },
    location: { es: "Ubicación", en: "Location", fr: "Emplacement" },
    phone: { es: "Teléfono", en: "Phone", fr: "Téléphone" },
    schedule: { es: "Horario", en: "Schedule", fr: "Horaires" },
    daily: { es: "Todos los días: 9:00 - 21:30", en: "Daily: 9:00 AM - 9:30 PM", fr: "Tous les jours : 9h00 - 21h30" },
    walkins: {
      es: "Aceptamos clientes sin cita previa",
      en: "Walk-ins welcome — no appointment needed",
      fr: "Sans rendez-vous acceptés",
    },
    whatsappCta: { es: "Agenda Tu Cita por WhatsApp", en: "Book Your Appointment via WhatsApp", fr: "Prenez Rendez-vous par WhatsApp" },
  },

  // Footer
  footer: {
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved.", fr: "Tous droits réservés." },
  },
} as const;
