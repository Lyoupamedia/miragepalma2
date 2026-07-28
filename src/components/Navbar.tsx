import { useState } from "react";
import { Scissors, Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const navLinks = [
  { href: "#inicio", key: "nav.home" },
  { href: "#servicios", key: "nav.services" },
  { href: "#nosotros", key: "nav.about" },
  { href: "#galeria", key: "nav.gallery" },
  { href: "#contacto", key: "nav.contact" },
];

const languages: { code: Language; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <Scissors className="w-6 h-6 text-primary" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-2xl font-bold text-foreground tracking-[0.25em]">
              <span className="text-gradient-gold">MIRAGE</span>
            </span>
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary">
              Barbershop Palma
            </span>
          </div>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-md shadow-lg overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                    className={`block w-full px-4 py-2 text-sm font-body text-left hover:bg-primary/10 transition-colors ${language === lang.code ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://wa.me/34617957732?text=Hola%2C%20me%20gustaría%20reservar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground font-body font-semibold text-sm px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity"
          >
            {t("nav.bookCta")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
            <li className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setLanguage(lang.code); }}
                  className={`px-3 py-1 text-sm font-body rounded border transition-colors ${language === lang.code ? "border-primary text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}
                >
                  {lang.label}
                </button>
              ))}
            </li>
            <li>
              <a
                href="https://wa.me/34617957732?text=Hola%2C%20me%20gustaría%20reservar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-gold text-primary-foreground font-body font-semibold text-sm px-6 py-2.5 rounded-md"
              >
                {t("nav.bookCta")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
