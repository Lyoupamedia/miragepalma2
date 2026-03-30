import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-3">
            Encuéntranos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            <span className="text-gradient-gold">Contacto</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-colors">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Ubicación</h3>
            <p className="font-body text-muted-foreground text-sm">
              Carrer Arxiduc Lluís Salvador, 23A<br />
              07004 Palma, Illes Balears
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-colors">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Teléfono</h3>
            <p className="font-body text-muted-foreground text-sm">
              <a href="tel:+34643719547" className="hover:text-primary transition-colors">+34 643 719 547</a>
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-colors">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Horario</h3>
            <p className="font-body text-muted-foreground text-sm">
              Todos los días: 9:00 - 21:00
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z" />
            </svg>
          </a>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/34643719547?text=Hola%2C%20me%20gustaría%20reservar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-body font-semibold px-10 py-4 rounded-md hover:opacity-90 transition-opacity shadow-gold text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Agenda Tu Cita por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
