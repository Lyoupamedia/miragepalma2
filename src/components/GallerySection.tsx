import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceShave from "@/assets/service-shave.jpg";
import heroImg from "@/assets/hero-barbershop.jpg";

const images = [
  { src: gallery1, alt: "Corte fade precisión - LM Barberia" },
  { src: gallery2, alt: "Arreglo de barba profesional - LM Barberia" },
  { src: gallery3, alt: "Corte moderno texturizado - LM Barberia" },
  { src: serviceHaircut, alt: "Estilizado profesional - LM Barberia" },
  { src: serviceShave, alt: "Afeitado clásico con navaja - LM Barberia" },
  { src: heroImg, alt: "Interior de LM Barberia" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-3">
            Nuestro Trabajo
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            <span className="text-gradient-gold">Galería</span>
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
