import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

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
              Tu dirección aquí<br />
              Ciudad, Estado
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-colors">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Teléfono</h3>
            <p className="font-body text-muted-foreground text-sm">
              +1 (XXX) XXX-XXXX
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-colors">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Horario</h3>
            <p className="font-body text-muted-foreground text-sm">
              Lun - Sáb: 9:00 - 20:00<br />
              Domingo: Cerrado
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://lmbarberia.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-gradient-gold text-primary-foreground font-body font-semibold px-10 py-4 rounded-md hover:opacity-90 transition-opacity shadow-gold text-lg"
          >
            Agenda Tu Cita Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
