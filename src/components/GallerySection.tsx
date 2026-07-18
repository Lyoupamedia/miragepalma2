import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceShave from "@/assets/service-shave.jpg";
import heroImg from "@/assets/hero-barbershop.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const images = [
  { src: gallery1, alt: "Mirage - Fade" },
  { src: gallery2, alt: "Mirage - Beard" },
  { src: gallery3, alt: "Mirage - Modern cut" },
  { src: serviceHaircut, alt: "Mirage - Styling" },
  { src: serviceShave, alt: "Mirage - Classic shave" },
  { src: heroImg, alt: "Mirage - Interior" },
];

const GallerySection = () => {
  const { t } = useLanguage();

  return (
    <section id="galeria" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-3">
            {t("gallery.subtitle")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            <span className="text-gradient-gold">{t("gallery.title")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
