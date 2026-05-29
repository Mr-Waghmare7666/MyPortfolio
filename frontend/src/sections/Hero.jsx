import { motion } from "framer-motion";

const stats = [
  { label: "B.E. CGPA", value: "9.00" },
  { label: "Internship", value: "1" },
  { label: "Certifications", value: "5+" },
];

const highlights = ["Java", "MySQL", "Python", "SQL", "JavaScript", "Power BI"];

export default function Hero() {
  return (
    <section id="home" className="section-shell min-h-screen pt-32 sm:pt-36">
      <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="chip">Aspiring Java Full Stack Developer and Data Analyst</span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I am <span className="gradient-text">Omkar Rajkumar Waghmare</span>
          </h1>

          <p className="section-subtitle max-w-xl">
            Final-year Computer Engineering student with a strong foundation in Java, Spring Framework,
            Python, SQL, and frontend technologies. I enjoy building scalable full stack
            applications and extracting meaningful insights through data analysis.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              Explore Projects
            </a>
            <a href="#contact" className="btn-ghost">
              Let&apos;s Work Together
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="glass rounded-2xl px-4 py-4">
                <p className="font-display text-2xl font-semibold text-[var(--text)]">{item.value}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="relative"
        >
          <div className="glass relative overflow-hidden rounded-[2rem] border border-[var(--stroke)] p-2 shadow-aura">
            <div className="h-[380px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#0B1735] via-[#12254E] to-[#0A1227] sm:h-[460px]">
              <img
                src="/profile2.png"
                alt="Omkar Rajkumar Waghmare"
                className="h-full w-full object-cover object-[center_20%]"
              />
            </div>
          </div>

          <div className="glass absolute -bottom-6 -left-4 rounded-2xl px-4 py-3 text-xs text-[var(--muted)] sm:text-sm">
            Open to Full Stack Developer and Data Analyst opportunities.
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
        className="mt-12 flex flex-wrap gap-2"
      >
        {highlights.map((item) => (
          <span key={item} className="chip text-[var(--muted)]">
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}