import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage, type Lang } from "../lib/i18n";

const links = [
  { to: "/", key: "home" },
  { to: "/servicos", key: "services" },
  { to: "/sobre", key: "about" },
  { to: "/frota", key: "fleet" },
  { to: "/contato", key: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [location] = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0b1220]/95 backdrop-blur-md border-b border-[rgba(201,162,75,0.18)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src="/images/logo.jpeg" alt="TechService" className="h-10 w-10 rounded-full object-cover border border-[rgba(201,162,75,0.4)]" />
          <span className="font-display text-xl md:text-2xl tracking-wide text-[#f4f1e8]">
            Tech<span className="text-[#c9a24b]">Service</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm uppercase tracking-[0.12em] transition-colors relative py-1 group ${
                location === l.to ? "text-[#c9a24b]" : "text-[#a8b0bf] hover:text-[#e8cd82]"
              }`}
            >
              <span>{t(`nav.${l.key}`)}</span>
              <span
                className={`absolute left-0 -bottom-0.5 h-px bg-[#c9a24b] transition-all duration-300 ${
                  location === l.to ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 text-sm text-[#a8b0bf] hover:text-[#e8cd82] uppercase tracking-wide border border-[rgba(201,162,75,0.25)] rounded-sm px-3 py-1.5"
            >
              {t(`langNames.${lang}`)}
              <ChevronDown size={14} />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1 bg-[#0b1220] border border-[rgba(201,162,75,0.25)] rounded-sm overflow-hidden min-w-[64px]">
                {(["pt", "en", "es"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-sm uppercase tracking-wide hover:bg-[#121b2e] ${
                      lang === l ? "text-[#c9a24b]" : "text-[#a8b0bf]"
                    }`}
                  >
                    {t(`langNames.${l}`)}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/contato"
            className="bg-[#c9a24b] text-[#05070d] text-sm uppercase tracking-[0.1em] font-medium px-5 py-2.5 rounded-sm hover:bg-[#e8cd82] transition-colors"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <button className="lg:hidden text-[#f4f1e8]" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0b1220] border-t border-[rgba(201,162,75,0.18)] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-base uppercase tracking-wide ${location === l.to ? "text-[#c9a24b]" : "text-[#a8b0bf]"}`}
            >
              {t(`nav.${l.key}`)}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            {(["pt", "en", "es"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-sm uppercase tracking-wide border border-[rgba(201,162,75,0.25)] rounded-sm px-3 py-1.5 ${
                  lang === l ? "text-[#c9a24b] border-[#c9a24b]" : "text-[#a8b0bf]"
                }`}
              >
                {t(`langNames.${l}`)}
              </button>
            ))}
          </div>
          <Link
            to="/contato"
            className="bg-[#c9a24b] text-[#05070d] text-sm uppercase tracking-[0.1em] font-medium px-5 py-3 rounded-sm text-center"
          >
            {t("nav.cta")}
          </Link>
        </div>
      )}
    </header>
  );
}
