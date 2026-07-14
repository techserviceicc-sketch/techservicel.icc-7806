import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Layout } from "../components/layout";
import { Reveal } from "../components/reveal";
import { Eyebrow } from "../components/ui-kit";
import { useLanguage } from "../lib/i18n";

export default function ContatoPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const inputClass =
    "w-full bg-[#0b1220] border border-[rgba(201,162,75,0.25)] rounded-sm px-4 py-3 text-sm text-[#f4f1e8] placeholder:text-[#6b7280] focus:outline-none focus:border-[#c9a24b] transition-colors";

  return (
    <Layout>
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14">
        <div className="lg:col-span-2">
          <Reveal>
            <Eyebrow>{t("contact.eyebrow")}</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl text-[#f4f1e8] mb-5 leading-tight">{t("contact.title")}</h1>
            <p className="text-[#a8b0bf] leading-relaxed mb-10">{t("contact.subtitle")}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-xs uppercase tracking-[0.15em] text-[#c9a24b] mb-5">{t("contact.infoTitle")}</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <Phone size={18} className="text-[#c9a24b] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-[#6b7280] uppercase tracking-wide">{t("contact.phone")}</div>
                  <div className="text-[#f4f1e8]">+55 (41) 99739-8179</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <Mail size={18} className="text-[#c9a24b] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-[#6b7280] uppercase tracking-wide">{t("contact.email")}</div>
                  <div className="text-[#f4f1e8]">techservice.icc@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <MapPin size={18} className="text-[#c9a24b] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-[#6b7280] uppercase tracking-wide">{t("contact.address")}</div>
                  <div className="text-[#f4f1e8]">{t("contact.addressValue")}</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <Clock size={18} className="text-[#c9a24b] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-[#6b7280] uppercase tracking-wide">{t("contact.hours")}</div>
                  <div className="text-[#f4f1e8]">{t("contact.hoursValue")}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 h-48 rounded-sm border border-[rgba(201,162,75,0.18)] bg-[#0b1220] flex items-center justify-center text-[#6b7280] text-sm">
              <MapPin size={18} className="mr-2 text-[#c9a24b]" /> {t("contact.mapNote")}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-3">
          <Reveal delay={0.1}>
            <div className="bg-[#0b1220] border border-[rgba(201,162,75,0.18)] rounded-sm p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-16">
                  <CheckCircle2 size={40} className="text-[#c9a24b] mb-4" />
                  <p className="text-[#f4f1e8] text-lg">{t("contact.thanks")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input className={inputClass} placeholder={t("contact.formName")} required />
                  <input className={inputClass} type="email" placeholder={t("contact.formEmail")} required />
                  <input className={inputClass} placeholder={t("contact.formPhone")} required />
                  <input className={inputClass} placeholder={t("contact.formVessel")} />
                  <textarea
                    className={`${inputClass} md:col-span-2 min-h-[140px] resize-none`}
                    placeholder={t("contact.formMessage")}
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="md:col-span-2 inline-flex items-center justify-center gap-2 bg-[#c9a24b] text-[#05070d] text-sm uppercase tracking-[0.1em] font-medium px-7 py-3.5 rounded-sm hover:bg-[#e8cd82] transition-colors disabled:opacity-60"
                  >
                    {loading ? "..." : <>{t("contact.formSubmit")} <Send size={16} /></>}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
