import heroImg from "@/assets/hero-barbershop.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior de Mirage"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="font-body text-primary tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
          {t("hero.subtitle")}
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          ROYAL <span className="text-gradient-gold">BARBER SHOP</span>
        </h1>
        <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {t("hero.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://wa.me/34643719547?text=Hola%2C%20me%20gustaría%20reservar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity shadow-gold text-lg"
          >
            {t("hero.bookWhatsapp")}
          </a>
          <a
            href="#servicios"
            className="border border-primary/30 text-foreground font-body font-medium px-8 py-3.5 rounded-md hover:border-primary/60 transition-colors text-lg"
          >
            {t("hero.viewServices")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
