import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  const mapsKey = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY;
  const placeId = import.meta.env.VITE_MAP_PLACE_ID?.trim();
  const mapQuery =
    import.meta.env.VITE_MAP_QUERY?.trim() ||
    "MIRAGE | BARBERSHOP PALMA, Carrer de l'Arxiduc Lluís Salvador 23A, 07004 Palma";
  const mapEmbedSrc = placeId
    ? `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=place_id:${placeId}&language=es&region=ES`
    : `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${encodeURIComponent(mapQuery)}&language=es&region=ES`;

  return (
    <section id="contacto" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-3">
            {t("contact.subtitle")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            <span className="text-gradient-gold">{t("contact.title")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <address className="not-italic bg-card border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-colors">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t("contact.location")}</h3>
            <p className="font-body text-muted-foreground text-sm">
              <a
                href="https://maps.google.com/?q=MIRAGE+BARBERSHOP+PALMA+Carrer+de+l%27Arxiduc+Llu%C3%ADs+Salvador+23A+Nord+07004+Palma"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Carrer de l'Arxiduc Lluís Salvador, 23A, Nord<br />
                07004 Palma, Illes Balears
              </a>
            </p>
          </address>

          <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-colors">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t("contact.phone")}</h3>
            <p className="font-body text-muted-foreground text-sm">
              <a href="tel:+34617957732" className="hover:text-primary transition-colors">+34 617 957 732</a>
            </p>
            <p className="font-body text-muted-foreground text-sm mt-2">
              <a href="mailto:info@miragepalma.com" className="hover:text-primary transition-colors">info@miragepalma.com</a>
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-colors">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t("contact.schedule")}</h3>
            <p className="font-body text-muted-foreground text-sm">
              {t("contact.daily")}
            </p>
            <p className="font-body text-primary text-xs mt-2 font-medium">
              {t("contact.walkins")}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-12 rounded-lg overflow-hidden border border-border shadow-lg">
          <iframe
            title="MIRAGE | BARBERSHOP PALMA location on Google Maps"
            src={mapEmbedSrc}
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full border-0"
          />
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a href="https://instagram.com/miragepalma" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/miragepalma" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://tiktok.com/@miragepalma" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z" />
            </svg>
          </a>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/34617957732?text=Hola%2C%20me%20gustaría%20reservar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-body font-semibold px-10 py-4 rounded-md hover:opacity-90 transition-opacity shadow-gold text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            {t("contact.whatsappCta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
