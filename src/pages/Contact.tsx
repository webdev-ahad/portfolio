import { useMemo, useState } from "react";
import { Copy, Mail } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { portfolio } from "../data/portfolio";
import useInView from "../hooks/useInView";

type Notice = { type: "success" | "error"; text: string } | null;

export default function Contact() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState<Notice>(null);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}\n\n— Sent from portfolio`,
    );
    return `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  return (
    <section id="contact" className="py-20 md:py-24">
      <Container>
        <div
          ref={ref}
          className={[
            "grid gap-10 md:grid-cols-2",
            isInView ? "fade-in-up" : "opacity-0",
          ].join(" ")}
        >
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something great."
              subtitle="This form opens your email app (mailto). If you don’t have an email app set up, use Copy Message and paste into Gmail/Outlook."
            />

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/35 p-6">
              <div className="text-sm font-semibold text-white">Direct</div>
              <div className="mt-2 text-sm text-slate-300">{portfolio.email}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(portfolio.email);
                      setNotice({ type: "success", text: "Email copied." });
                    } catch {
                      setNotice({ type: "error", text: "Could not copy email. Please copy manually." });
                    }
                  }}
                >
                  <Copy className="h-4 w-4 text-emerald-200" />
                  Copy email
                </button>
                <a
                  href={`mailto:${portfolio.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100"
                >
                  <Mail className="h-4 w-4" />
                  Open email
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {portfolio.socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      <Icon className="h-4 w-4 text-emerald-200" />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <form
            className="rounded-[2rem] border border-white/10 bg-slate-900/35 p-6"
            onSubmit={(e) => {
              e.preventDefault();
              setNotice(null);
              if (!message.trim()) {
                setNotice({ type: "error", text: "Please write a message." });
                return;
              }

              // mailto can only open the user's email client; it can't send automatically without a backend.
              window.open(mailtoHref, "_blank", "noopener,noreferrer");
              setNotice({
                type: "success",
                text: "Opened your email app. If nothing happened, use Copy Message and paste into Gmail/Outlook.",
              });
            }}
          >
            <div className="grid gap-4">
              {notice ? (
                <div
                  className={[
                    "rounded-2xl border px-4 py-3 text-sm",
                    notice.type === "success"
                      ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
                      : "border-rose-400/30 bg-rose-500/10 text-rose-100",
                  ].join(" ")}
                >
                  {notice.text}
                </div>
              ) : null}
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-200">Name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="h-12 rounded-xl border border-white/10 bg-slate-950/30 px-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-200">Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="you@email.com"
                  className="h-12 rounded-xl border border-white/10 bg-slate-950/30 px-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-200">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="resize-none rounded-xl border border-white/10 bg-slate-950/30 p-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
                />
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100"
                >
                  Send message
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={async () => {
                    const text = `To: ${portfolio.email}\nName: ${name}\nEmail: ${email}\n\n${message}`;
                    try {
                      await navigator.clipboard.writeText(text);
                      setNotice({ type: "success", text: "Message copied. Paste it into Gmail/Outlook." });
                    } catch {
                      setNotice({
                        type: "error",
                        text: "Could not copy message. Please select and copy manually.",
                      });
                    }
                  }}
                >
                  <Copy className="mr-2 h-4 w-4 text-emerald-200" />
                  Copy message
                </button>
                <a
                  href={mailtoHref}
                  className="text-sm font-semibold text-emerald-200 hover:text-emerald-100"
                >
                  Or open email directly
                </a>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

