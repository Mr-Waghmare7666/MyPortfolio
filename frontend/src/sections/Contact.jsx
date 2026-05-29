import { useState } from "react";
import { motion } from "framer-motion";

const initialForm = { name: "", email: "", message: "" };

const contactCards = [
  { title: "Email", value: "omkarwaghmare282004@gmail.com" },
  { title: "Mobile", value: "+91 7666937321" },
  { title: "GitHub", value: "github.com/Mr-Waghmare7666" },
  { title: "LinkedIn", value: "linkedin.com/in/omkar-waghmare-59754b382" },
];

const resolveApiBase = () => {
  const configuredBase = import.meta.env.VITE_API_URL;

  if (configuredBase) {
    return configuredBase.replace(/\/$/, "");
  }

  if (import.meta.env.DEV) {
    return "http://127.0.0.1:8000";
  }

  return "/api";
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const apiBase = resolveApiBase();

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const send = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("Please fill in all fields before sending.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch(`${apiBase}/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || "Unable to send your message right now.");
      }

      setForm(initialForm);
      setStatus(result?.status || "Message sent successfully. I will get back to you soon.");
    } catch (error) {
      if (error.name === "AbortError") {
        setStatus("Request timed out. Please try again.");
      } else {
        setStatus(error.message || "Something went wrong. Please try again.");
      }
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <h2 className="section-title">Let&apos;s Build Something Great</h2>
      <p className="section-subtitle">
        Open to Java Full Stack Developer and Data Analyst opportunities. Feel free to connect for
        internships, entry-level roles, or collaborations.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="space-y-4"
        >
          {contactCards.map((card) => (
            <article key={card.title} className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.17em] text-[var(--muted)]">{card.title}</p>
              <p className="mt-2 text-sm sm:text-base">{card.value}</p>
            </article>
          ))}

          <div className="glass rounded-2xl p-5 text-sm text-[var(--muted)]">
            Location: Laxmi Nagar, Vishrantwadi, Alandi, Pune - 412105.
          </div>
        </motion.aside>

        <motion.form
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          onSubmit={send}
          className="glass space-y-4 rounded-3xl p-6 sm:p-8"
        >
          <label className="block text-sm text-[var(--muted)]" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            required
            autoComplete="name"
            value={form.name}
            className="w-full rounded-xl border border-[var(--stroke)] bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[#79A1FF]"
            placeholder="Your full name"
            onChange={(e) => updateField("name", e.target.value)}
          />

          <label className="block text-sm text-[var(--muted)]" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            className="w-full rounded-xl border border-[var(--stroke)] bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[#79A1FF]"
            placeholder="you@example.com"
            onChange={(e) => updateField("email", e.target.value)}
          />

          <label className="block text-sm text-[var(--muted)]" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            required
            value={form.message}
            className="w-full resize-none rounded-xl border border-[var(--stroke)] bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[#79A1FF]"
            placeholder="Tell me about your project or role"
            onChange={(e) => updateField("message", e.target.value)}
          />

          <button className="btn-primary w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="text-sm text-[var(--muted)]">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}