import { Anchor, ShieldCheck, Timer, Wrench, Sparkles, ArrowRight } from "lucide-react";
import { Layout } from "../components/layout";
import { Reveal } from "../components/reveal";
import { Eyebrow, GoldButton } from "../components/ui-kit";
import { useLanguage } from "../lib/i18n";

const serviceIcons = [Wrench, ShieldCheck, Timer, Sparkles, Anchor, Wrench];

export default function Index() {
  const { t } = useLanguage();
  const stats: { value: string; label: string }[] = t("home.stats");
  const why: { title: string; desc: string }[] = t("home.why");
  const services: { name: string; desc: string; tag: string }[] = t("services.list");

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-marina.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/85 to-[#05070d]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070d]/70 via-transparent to-[#05070d]/40" />
        </div>
        <div
          className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(201,162,75,0.5) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 pt-32 pb-20 w-full">
          <Reveal>
            <Eyebrow>{t("home.eyebrow")}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#f4f1e8] max-w-3xl mb-6">
              {t("home.title")}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[#a8b0bf] text-base md:text-lg leading-relaxed max-w-xl mb-10">{t("home.subtitle")}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <GoldButton href="/contato">{t("home.ctaPrimary")}</GoldButton>
              <GoldButton href="/servicos" variant="secondary">{t("home.ctaSecondary")}</GoldButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative bg-[#0b1220] border-y border-[rgba(201,162,75,0.18)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl text-[#c9a24b] mb-1">{s.value}</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.12em] text-[#a8b0bf]">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <Eyebrow>{t("home.servicesEyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#f4f1e8] max-w-xl mb-4">
              {t("home.servicesTitle")}
            </h2>
            <p className="text-[#a8b0bf] text-base md:text-lg leading-relaxed max-w-xl">{t("home.servicesSubtitle")}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <GoldButton href="/servicos" variant="secondary" className="whitespace-nowrap">
              {t("home.viewAllServices")} <ArrowRight size={16} />
            </GoldButton>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <Reveal key={s.name} delay={i * 0.08}>
                <div className="bg-[#0b1220] border border-[rgba(201,162,75,0.18)] border-t-2 border-t-[#c9a24b] rounded-sm p-7 h-full flex flex-col hover:bg-[#121b2e] transition-colors duration-300">
                  <div className="h-12 w-12 rounded-full border border-[#c9a24b] flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#c9a24b]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#8a7136] mb-2">{s.tag}</span>
                  <h3 className="font-display text-xl text-[#f4f1e8] mb-2">{s.name}</h3>
                  <p className="text-sm text-[#a8b0bf] leading-relaxed flex-1">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Why us */}
      <section className="relative py-24 md:py-32 bg-[#0b1220] border-y border-[rgba(201,162,75,0.18)] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img src="/images/engine-room.jpg" alt="" className="w-full h-[420px] object-cover rounded-sm" />
              <div className="absolute -inset-3 border border-[rgba(201,162,75,0.3)] rounded-sm -z-10" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>{t("home.whyEyebrow")}</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#f4f1e8] mb-10">{t("home.whyTitle")}</h2>
            </Reveal>
            <div className="space-y-7">
              {why.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <span className="font-display text-2xl text-[#c9a24b] shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-[#f4f1e8] font-medium mb-1">{w.title}</h3>
                      <p className="text-sm text-[#a8b0bf] leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/yacht-lux.jpg" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070d] via-[#05070d]/80 to-[#05070d]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-[#f4f1e8] mb-4 max-w-2xl mx-auto">{t("home.ctaBandTitle")}</h2>
            <p className="text-[#a8b0bf] text-base md:text-lg mb-8 max-w-xl mx-auto">{t("home.ctaBandSubtitle")}</p>
            <GoldButton href="/contato">{t("home.ctaBandButton")}</GoldButton>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
