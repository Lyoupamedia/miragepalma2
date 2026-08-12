import { Scissors } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Scissors className="w-5 h-5 text-primary" />
              <span className="font-display text-lg font-bold text-foreground">
                <span className="text-gradient-gold">MIRAGE</span>
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground text-center md:text-left max-w-xs">
              {t("hero.description")}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-display text-base font-semibold text-foreground mb-4 uppercase tracking-wider">
              {t("footer.quickLinks")}
            </h4>
            <nav>
              <ul className="flex flex-col items-center md:items-start gap-2">
                <li>
                  <a href="#inicio" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.home")}
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.services")}
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.about")}
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.gallery")}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.faq")}
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.contact")}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-display text-base font-semibold text-foreground mb-4 uppercase tracking-wider">
              {t("contact.location")}
            </h4>
            <address className="not-italic text-center md:text-left font-body text-sm text-muted-foreground">
              Carrer de l'Arxiduc Lluís Salvador, 23A, Nord<br />
              07004 Palma, Illes Balears
            </address>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/50">
          <p className="font-body text-xs text-muted-foreground order-2 md:order-1">
            © {new Date().getFullYear()} Mirage. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6 order-1 md:order-2">
            <a href="https://instagram.com/miragepalma" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <span className="text-xs font-body">Instagram</span>
            </a>
            <a href="https://facebook.com/miragepalma" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
              <span className="text-xs font-body">Facebook</span>
            </a>
            <a href="https://tiktok.com/@miragepalma" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
              <span className="text-xs font-body">TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
