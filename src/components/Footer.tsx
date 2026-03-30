import { Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Scissors className="w-5 h-5 text-primary" />
            <span className="font-display text-lg font-bold text-foreground">
              LM <span className="text-gradient-gold">Barberia</span>
            </span>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} LM Barberia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
