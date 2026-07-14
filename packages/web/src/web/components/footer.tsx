import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "../lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  const services: { name: string }[] = t("services.list");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#05070d] border-t border-[rgba(201,162,75,0.18)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/logo.jpeg" alt="TechService" className="h-10 w-10 rounded-full object-cover border border-[rgba(201,162,75,0.4)]" />
            <span className="font-display text-xl tracking-wide text-[#f4f1e8]">
              Tech<span className="text-[#c9a24b]">Service</span>
            </span>
          </div>
          <p className="text-sm text-[#a8b0bf] leading-relaxed max-w-xs">{t("footer.tagline")}</p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="h-9 w-9 flex items-center justify-center border border-[rgba(201,162,75,0.25)] rounded-full text-[#a8b0bf] hover:text-[#c9a24b] hover:border-[#c9a24b] transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="h-9 w-9 flex items-center justify-center border border-[rgba(201,162,75,0.25)] rounded-full text-[#a8b0bf] hover:text-[#c9a24b] hover:border-[#c9a24b] transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.15em] text-[#c9a24b] mb-4">{t("footer.servicesTitle")}</h4>
          <ul className="space-y-2.5">
            {services?.slice(0, 6).map((s) => (
              <li key={s.name}>
                <Link to="/servicos" className="text-sm text-[#a8b0bf] hover:text-[#e8cd82] transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.15em] text-[#c9a24b] mb-4">{t("footer.companyTitle")}</h4>
          <ul className="space-y-2.5">
            <li><Link to="/sobre" className="text-sm text-[#a8b0bf] hover:text-[#e8cd82] transition-colors">{t("nav.about")}</Link></li>
            <li><Link to="/frota" className="text-sm text-[#a8b0bf] hover:text-[#e8cd82] transition-colors">{t("nav.fleet")}</Link></li>
            <li><Link to="/contato" className="text-sm text-[#a8b0bf] hover:text-[#e8cd82] transition-colors">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.15em] text-[#c9a24b] mb-4">{t("footer.contactTitle")}</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2.5 text-sm text-[#a8b0bf]">
              <Phone size={15} className="text-[#c9a24b] shrink-0" /> +55 (41) 99739-8179
            </li>
            <li className="flex items-center gap-2.5 text-sm text-[#a8b0bf]">
              <Mail size={15} className="text-[#c9a24b] shrink-0" /> techservice.icc@gmail.com
            </li>
            <li className="flex items-start gap-2.5 text-sm text-[#a8b0bf]">
              <MapPin size={15} className="text-[#c9a24b] shrink-0 mt-0.5" /> Av. Agílio Leão de Macedo, 10 — Caiobá, Matinhos - PR, 83260-000, Brasil
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[rgba(201,162,75,0.1)] py-5 text-center text-xs text-[#6b7280]">
        © {year} TechService. {t("footer.rights")}
      </div>
    </footer>
  );
}
