import { motion } from "framer-motion";

const projects = [
  {
    title: "Music Player Web Application",
    desc: "Responsive music player web app with dynamic controls and an interactive user interface.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap" ],
    impact: "Focused on frontend performance and responsive behavior across devices.",
    liveUrl: "https://musical-events.onrender.com",
    sourceUrl: "https://github.com/Mr-Waghmare7666/Musical-Events",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "PDF Language Translator",
    desc: "Full stack application to translate PDF content with backend file handling and API integration.",
    stack: ["Python", "HTML", "CSS", "JavaScript", "REST APIs"],
    impact: "Implemented PDF parsing and translation workflow for multilingual document handling.",
    liveUrl: "https://pdf-language-translator-1.onrender.com/",
    sourceUrl: "https://github.com/Mr-Waghmare7666/PDF-Language-Translator",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sign Language Detection System",
    desc: "Machine learning system to detect hand gestures and convert them into text and speech output.",
    stack: ["Python", "OpenCV", "TensorFlow"],
    impact: "Integrated real-time backend processing with interface output for accessibility support.",
    sourceUrl: "https://github.com/Mr-Waghmare7666/SLI-Sign_language_detection-using-MobilenetV3-and-Reactjs",
    image:
      "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "IPL / Sports Data Analysis",
    desc: "Analyzed cricket datasets to evaluate player and team performance with exploratory analytics.",
    stack: ["Python", "Pandas", "Matplotlib"],
    impact: "Produced data-driven visual insights on trends, ratings, and match-level performance.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Resume-highlighted projects across full stack development, machine learning, and data
        analysis.
      </p>

      <div className="mt-10 grid gap-7 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -7 }}
            className="glass group overflow-hidden rounded-3xl"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D1A] via-transparent to-transparent" />
            </div>

            <div className="space-y-4 p-6">
              <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <span key={tag} className="chip text-[var(--muted)]">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-xs text-[var(--muted)]">{p.impact}</p>

              <div className="flex gap-2 pt-1">
                <a
                  href={p.liveUrl || "#"}
                  target={p.liveUrl ? "_blank" : undefined}
                  rel={p.liveUrl ? "noopener noreferrer" : undefined}
                  className="btn-primary px-4 py-2 text-xs"
                >
                  Live Preview
                </a>
                <a
                  href={p.sourceUrl || "#"}
                  target={p.sourceUrl ? "_blank" : undefined}
                  rel={p.sourceUrl ? "noopener noreferrer" : undefined}
                  className="btn-ghost px-4 py-2 text-xs"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}