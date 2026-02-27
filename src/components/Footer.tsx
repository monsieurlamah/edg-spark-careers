import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoEdg from "@/assets/logo-edg.png";

export default function Footer() {
  return (
    <footer className="bg-edg-dark text-white pb-20 lg:pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoEdg} alt="EDG" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold text-white">RECRUEDG</h3>
                <p className="text-xs text-white/60">Électricité de Guinée</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              La plateforme officielle de recrutement d'Électricité de Guinée. 
              Rejoignez une entreprise au service de la nation.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40">Navigation</h4>
            <div className="space-y-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "Offres d'emploi", href: "/offres" },
                { label: "Candidature spontanée", href: "/candidature-spontanee" },
                { label: "À propos d'EDG", href: "/a-propos" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Légal */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40">Informations légales</h4>
            <div className="space-y-3">
              {[
                { label: "Mentions légales", href: "/mentions-legales" },
                { label: "Politique de confidentialité", href: "/confidentialite" },
                { label: "Conditions d'utilisation", href: "/conditions" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3 text-sm text-white/60">
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
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40">Newsletter</h4>
            <p className="text-sm text-white/60">Recevez les nouvelles offres par email</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 rounded-xl gradient-energy-bg text-sm font-semibold text-white hover:opacity-90 transition-opacity">
                OK
              </button>
            </div>
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary/30 transition-colors text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} RECRUEDG — Électricité de Guinée. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-white/40">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
            <Link to="/conditions" className="hover:text-white transition-colors">
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
