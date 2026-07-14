import { Anchor, ShieldCheck, Timer, Wrench, Sparkles, Check } from "lucide-react";
import { Layout } from "../components/layout";
import { Reveal } from "../components/reveal";
import { Eyebrow, GoldButton } from "../components/ui-kit";
import { useLanguage } from "../lib/i18n";

const icons = [ShieldCheck, Timer, Wrench, Anchor, Sparkles, ShieldCheck];

export default function ServicosPage() {
  const { t } = useLanguage();
  const services: { name: string; tag: string; desc: string; points: string[] }[] = t("services.list");
  const process: { step: string; title: string; desc: string }[] = t("services.process");

  return (
    <Layout>
      <section className="relative pt-40 pb-20 px-6 md:px-12 max-w-[1280px] mx-auto">
        <Reveal>
          <Eyebrow>{t("services.eyebrow")}</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl text-[#f4f1e8] max-w-2xl mb-5">{t("services.title")}</h1>
          <p className="text-[#a8b0bf] text-base md:text-lg leading-relaxed max-w-2xl">{t("services.subtitle")}</p>
        </Reveal>
      </section>

      <section className="px-6 md:px-12 max-w-[1280px] mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={s.name} delay={(i % 2) * 0.1}>
                <div className="bg-[#0b1220] border border-[rgba(201,162,75,0.18)] rounded-sm p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="h-12 w-12 rounded-full border border-[#c9a24b] flex items-center justify-center">
                      <Icon size={20} className="text-[#c9a24b]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#c9a24b] border border-[rgba(201,162,75,0.3)] rounded-sm px-2.5 py-1">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-[#f4f1e8] mb-3">{s.name}</h3>
                  <p className="text-sm text-[#a8b0bf] leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-[#a8b0bf]">
                        <Check size={15} className="text-[#c9a24b] mt-0.5 shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                  <GoldButton href="/contato" variant="secondary" className="w-fit">
                    {t("services.quote")}
                  </GoldButton>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-28 bg-[#0b1220] border-y border-[rgba(201,162,75,0.18)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl text-[#f4f1e8] mb-14 text-center">{t("services.processTitle")}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative">
                  <div className="font-display text-5xl text-[#8a7136] mb-3">{p.step}</div>
                  <h3 className="text-[#f4f1e8] font-medium mb-2">{p.title}</h3>
                  <p className="text-sm text-[#a8b0bf] leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto text-center">
        <Reveal>
          <GoldButton href="/contato">{t("home.ctaBandButton")}</GoldButton>
        </Reveal>
      </section>
    </Layout>
  );
}
