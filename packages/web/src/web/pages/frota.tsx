import { Sailboat, Ship, Anchor, Waves, Quote } from "lucide-react";
import { Layout } from "../components/layout";
import { Reveal } from "../components/reveal";
import { Eyebrow, GoldButton } from "../components/ui-kit";
import { useLanguage } from "../lib/i18n";

const typeIcons = [Ship, Sailboat, Anchor, Waves];
const partnerNames = ["Marina Central", "Marina Porto Sul", "NautiParts", "Blue Water Yachts", "Costa Marinas", "Ocean Distribuidora"];

export default function FrotaPage() {
  const { t } = useLanguage();
  const types: { name: string; desc: string }[] = t("fleet.types");
  const testimonials: { quote: string; author: string; role: string }[] = t("fleet.testimonials");

  return (
    <Layout>
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1280px] mx-auto">
        <Reveal>
          <Eyebrow>{t("fleet.eyebrow")}</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl text-[#f4f1e8] max-w-2xl mb-5">{t("fleet.title")}</h1>
          <p className="text-[#a8b0bf] text-base md:text-lg leading-relaxed max-w-2xl">{t("fleet.subtitle")}</p>
        </Reveal>
      </section>

      {/* Types */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto pb-24">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl text-[#f4f1e8] mb-8">{t("fleet.typesTitle")}</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {types.map((tp, i) => {
            const Icon = typeIcons[i % typeIcons.length];
            return (
              <Reveal key={tp.name} delay={i * 0.08}>
                <div className="bg-[#0b1220] border border-[rgba(201,162,75,0.18)] rounded-sm p-7 h-full">
                  <Icon size={24} className="text-[#c9a24b] mb-4" />
                  <h3 className="text-[#f4f1e8] font-medium mb-2">{tp.name}</h3>
                  <p className="text-sm text-[#a8b0bf] leading-relaxed">{tp.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 md:py-24 bg-[#0b1220] border-y border-[rgba(201,162,75,0.18)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <Reveal>
            <div className="max-w-xl mb-12">
              <h2 className="font-display text-3xl text-[#f4f1e8] mb-3">{t("fleet.partnersTitle")}</h2>
              <p className="text-[#a8b0bf] leading-relaxed">{t("fleet.partnersDesc")}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerNames.map((p, i) => (
              <Reveal key={p} delay={i * 0.05}>
                <div className="border border-[rgba(201,162,75,0.15)] rounded-sm h-20 flex items-center justify-center text-center px-3 text-xs uppercase tracking-wide text-[#6b7280] hover:text-[#c9a24b] hover:border-[#c9a24b] transition-colors">
                  {p}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-28 px-6 md:px-12 max-w-[1280px] mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl text-[#f4f1e8] mb-14 text-center">{t("fleet.testimonialsTitle")}</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((ts, i) => (
            <Reveal key={ts.author} delay={i * 0.1}>
              <div className="bg-[#0b1220] border border-[rgba(201,162,75,0.18)] rounded-sm p-7 h-full flex flex-col">
                <Quote size={20} className="text-[#c9a24b] mb-4" />
                <p className="text-sm text-[#a8b0bf] leading-relaxed italic flex-1 mb-5">"{ts.quote}"</p>
                <div className="border-t border-[rgba(201,162,75,0.18)] pt-4">
                  <div className="text-[#f4f1e8] text-sm font-medium">{ts.author}</div>
                  <div className="text-xs text-[#6b7280] uppercase tracking-wide">{ts.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Investors */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/yacht-lux.jpg" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070d] via-[#05070d]/85 to-[#05070d]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-[#f4f1e8] mb-5 max-w-2xl mx-auto">{t("fleet.investorsTitle")}</h2>
            <p className="text-[#a8b0bf] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">{t("fleet.investorsDesc")}</p>
            <GoldButton href="/contato">{t("home.ctaBandButton")}</GoldButton>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
