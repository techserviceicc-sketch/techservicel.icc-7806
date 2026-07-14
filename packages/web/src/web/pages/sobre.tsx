import { Target, Eye, Gem, Award, Gauge, FileCheck } from "lucide-react";
import { Layout } from "../components/layout";
import { Reveal } from "../components/reveal";
import { Eyebrow } from "../components/ui-kit";
import { useLanguage } from "../lib/i18n";

const credIcons = [Award, Gauge, FileCheck];

export default function SobrePage() {
  const { t } = useLanguage();
  const values: string[] = t("about.values");
  const creds: { title: string; desc: string }[] = t("about.creds");

  return (
    <Layout>
      <section className="relative pt-40 pb-24 px-6 md:px-12 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal>
            <Eyebrow>{t("about.eyebrow")}</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl text-[#f4f1e8] mb-6 leading-[1.08]">{t("about.title")}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#a8b0bf] text-base leading-relaxed mb-4">{t("about.p1")}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[#a8b0bf] text-base leading-relaxed">{t("about.p2")}</p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="relative">
            <img src="/images/mechanic-repair.jpg" alt="" className="w-full h-[460px] object-cover rounded-sm" />
            <div className="absolute -inset-3 border border-[rgba(201,162,75,0.3)] rounded-sm -z-10" />
          </div>
        </Reveal>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 md:py-24 bg-[#0b1220] border-y border-[rgba(201,162,75,0.18)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal>
            <div className="border border-[rgba(201,162,75,0.18)] rounded-sm p-8 h-full">
              <Target size={22} className="text-[#c9a24b] mb-4" />
              <h3 className="font-display text-2xl text-[#f4f1e8] mb-3">{t("about.missionTitle")}</h3>
              <p className="text-sm text-[#a8b0bf] leading-relaxed">{t("about.mission")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-[rgba(201,162,75,0.18)] rounded-sm p-8 h-full">
              <Eye size={22} className="text-[#c9a24b] mb-4" />
              <h3 className="font-display text-2xl text-[#f4f1e8] mb-3">{t("about.visionTitle")}</h3>
              <p className="text-sm text-[#a8b0bf] leading-relaxed">{t("about.vision")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="border border-[rgba(201,162,75,0.18)] rounded-sm p-8 h-full">
              <Gem size={22} className="text-[#c9a24b] mb-4" />
              <h3 className="font-display text-2xl text-[#f4f1e8] mb-3">{t("about.valuesTitle")}</h3>
              <ul className="space-y-2">
                {values.map((v) => (
                  <li key={v} className="text-sm text-[#a8b0bf]">— {v}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 md:py-28 px-6 md:px-12 max-w-[1280px] mx-auto">
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="flex justify-center"><Eyebrow>{t("about.credEyebrow")}</Eyebrow></div>
            <h2 className="font-display text-3xl md:text-4xl text-[#f4f1e8]">{t("about.credTitle")}</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creds.map((c, i) => {
            const Icon = credIcons[i % credIcons.length];
            return (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="text-center bg-[#0b1220] border border-[rgba(201,162,75,0.18)] rounded-sm p-8 h-full">
                  <div className="h-12 w-12 mx-auto rounded-full border border-[#c9a24b] flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#c9a24b]" />
                  </div>
                  <h3 className="text-[#f4f1e8] font-medium mb-2">{c.title}</h3>
                  <p className="text-sm text-[#a8b0bf] leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/engine-repair.jpg" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/90 to-[#05070d]/70" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <div className="flex justify-center"><Eyebrow>{t("about.teamEyebrow")}</Eyebrow></div>
            <h2 className="font-display text-3xl md:text-5xl text-[#f4f1e8] mb-5 max-w-2xl mx-auto">{t("about.teamTitle")}</h2>
            <p className="text-[#a8b0bf] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">{t("about.teamDesc")}</p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
