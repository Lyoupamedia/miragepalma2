import aboutTeam from "@/assets/about-team.jpg";
import { Award, Clock, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Clock, value: "+15", label: t("about.stats.experience") },
    { icon: Users, value: "2000+", label: t("about.stats.clients") },
    { icon: Award, value: "100%", label: t("about.stats.commitment") },
  ];

  return (
    <section id="nosotros" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative">
            <img
              src={aboutTeam}
              alt="Mirage team"
              className="w-full rounded-lg shadow-2xl"
              loading="lazy"
              width={1200}
              height={800}
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-lg -z-10" />
          </div>

          <div>
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-3">
              {t("about.subtitle")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("about.titlePre")} <span className="text-gradient-gold">{t("about.titleHighlight")}</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              {t("about.p1")}
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              {t("about.p2")}
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
