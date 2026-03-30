import aboutTeam from "@/assets/about-team.jpg";
import { Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: "5+", label: "Años de experiencia" },
  { icon: Users, value: "2000+", label: "Clientes satisfechos" },
  { icon: Award, value: "100%", label: "Compromiso" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <img
              src={aboutTeam}
              alt="Equipo de barberos profesionales de Royal Barber Shop"
              className="w-full rounded-lg shadow-2xl"
              loading="lazy"
              width={1200}
              height={800}
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-3">
              Sobre Nosotros
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Más que una <span className="text-gradient-gold">Barbería</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              En LM Barberia combinamos la tradición del oficio con las tendencias más actuales. Nuestro equipo de barberos profesionales se dedica a ofrecer una experiencia única, donde cada cliente recibe atención personalizada.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Utilizamos productos de primera calidad y técnicas avanzadas para garantizar resultados impecables. Tu estilo, nuestra pasión.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
