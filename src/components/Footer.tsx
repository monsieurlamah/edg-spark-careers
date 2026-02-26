import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoEdg from "@/assets/logo-edg.png";

export default function Footer() {
  return (
    <footer className="bg-edg-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoEdg} alt="EDG" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold">RECRUEDG</h3>
                <p className="text-xs opacity-70">Électricité de Guinée</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              La plateforme officielle de recrutement d'Électricité de Guinée. 
              Rejoignez une entreprise au service de la nation.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider opacity-50">Navigation</h4>
            <div className="space-y-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "Offres d'emploi", href: "/offres" },
                { label: "Candidature spontanée", href: "/candidature-spontanee" },
                { label: "À propos d'EDG", href: "/a-propos" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider opacity-50">Contact EDG</h4>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Conakry, République de Guinée</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+224 621 00 00 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>recrutement@edg.gn</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider opacity-50">Newsletter</h4>
            <p className="text-sm opacity-70">Recevez les nouvelles offres par email</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-2 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 rounded-xl gradient-energy-bg text-sm font-semibold hover:opacity-90 transition-opacity">
                OK
              </button>
            </div>
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} RECRUEDG — Électricité de Guinée. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs opacity-50">
            <Link to="/mentions-legales" className="hover:opacity-100 transition-opacity">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="hover:opacity-100 transition-opacity">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
