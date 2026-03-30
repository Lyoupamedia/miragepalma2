import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceBeard from "@/assets/service-beard.jpg";
import serviceShave from "@/assets/service-shave.jpg";
import { Scissors, Sparkles, Wind } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Scissors,
      title: t("services.haircut.title"),
      description: t("services.haircut.description"),
      price: t("services.haircut.price"),
      image: serviceHaircut,
    },
    {
      icon: Sparkles,
      title: t("services.beard.title"),
      description: t("services.beard.description"),
      price: t("services.beard.price"),
      image: serviceBeard,
    },
    {
      icon: Wind,
      title: t("services.shave.title"),
      description: t("services.shave.description"),
      price: t("services.shave.price"),
      image: serviceShave,
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-3">
            {t("services.subtitle")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            {t("services.title")} <span className="text-gradient-gold">{t("services.premium")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground font-body font-bold text-sm px-3 py-1 rounded">
                  {service.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <service.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/34643719547?text=Hola%2C%20me%20gustaría%20reservar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            {t("services.bookCta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
