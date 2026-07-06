import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Clock, Linkedin, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Struqton Structural" },
      {
        name: "description",
        content:
          "Brief the Struqton Structural team on your building, civil, industrial, mining, energy or agricultural project. Office in Harare, Zimbabwe.",
      },
      { property: "og:title", content: "Contact Struqton Structural" },
      {
        property: "og:description",
        content: "Brief our building and civil engineering team in Harare, Zimbabwe.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  interest: z.enum([
    "Commercial",
    "Industrial",
    "Residential",
    "Infrastructure",
    "Mining",
    "Energy",
    "Agricultural",
    "Other",
  ]),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      form.reset();
    }, 600);
  }

  return (
    <>
      <section className="container-page pb-12 pt-24 md:pt-32">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
          Tell us about the project.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Share a few details and the right person will reply within one
          business day. For tenders and urgent site enquiries, call the office
          directly.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {sent ? (
              <div className="rounded-sm border border-border bg-surface p-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-ink">Message received</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you. We'll be in touch within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-ink hover-underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5">
                <Field label="Full name" name="name" error={errors.name} required />
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Email" name="email" type="email" error={errors.email} required />
                  <Field label="Company" name="company" error={errors.company} />
                </div>
                <div>
                  <Label htmlFor="interest" required>Project type</Label>
                  <select
                    id="interest"
                    name="interest"
                    defaultValue="Commercial"
                    className="h-12 w-full rounded-sm border border-input bg-background px-3 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
                  >
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Residential</option>
                    <option>Infrastructure</option>
                    <option>Mining</option>
                    <option>Energy</option>
                    <option>Agricultural</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message" required>Project brief</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={2000}
                    placeholder="Site location, scope, timing, anything relevant."
                    className="w-full rounded-sm border border-input bg-background p-3 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex h-12 items-center justify-center rounded-sm bg-ink px-6 text-sm font-semibold text-background hover:bg-accent disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send message"}
                </button>
                <p className="text-xs text-muted-foreground">
                  By submitting this form you agree we may contact you about your enquiry. We won't share your details.
                </p>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-sm bg-surface p-8">
              <h2 className="text-lg font-semibold text-ink">Office</h2>
              <ul className="mt-6 space-y-5 text-sm text-ink-soft">
                <InfoRow icon={MapPin}>
                  Struqton Structural (Pvt) Ltd<br />
                  Harare, Zimbabwe
                </InfoRow>
                <InfoRow icon={Mail}>
                  <a href="mailto:info@struqton.com" className="hover-underline">info@struqton.com</a>
                </InfoRow>
                <InfoRow icon={Phone}>
                  <a href="tel:+263774751861" className="hover-underline">+263 774 751 861</a>
                </InfoRow>
                <InfoRow icon={Clock}>
                  Mon–Fri · 08:00–17:00 CAT
                </InfoRow>
                <InfoRow icon={Linkedin}>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-underline"
                  >
                    Struqton on LinkedIn
                  </a>
                </InfoRow>
              </ul>
              <div className="mt-8 border-t border-border pt-6">
                <p className="eyebrow">Registrations</p>
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <li>CIFOZ Category B General Contractor</li>
                  <li>PRAZ registered supplier · 2026</li>
                  <li>ZIMRA VAT registered · Tax cleared</li>
                  <li>NSSA Compliance Cert. 94184/2025</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-sm border border-border">
              <iframe
                title="Struqton Structural office location — Harare"
                src="https://www.openstreetmap.org/export/embed.html?bbox=31.020%2C-17.845%2C31.070%2C-17.815&layer=mapnik"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Label({ children, htmlFor, required }: { children: React.ReactNode; htmlFor: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-soft">
      {children}{required && <span className="text-accent"> *</span>}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-sm border border-input bg-background px-3 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoRow({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
      <div>{children}</div>
    </li>
  );
}
