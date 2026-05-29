import { motion } from "framer-motion";

const pillars = [
  {
    title: "Java Full Stack Development",
    detail: "Core Java, JDBC, Servlets, JSP, Spring Framework, Spring Boot, and RESTful APIs.",
  },
  {
    title: "Data Analysis and Visualization",
    detail: "Python, SQL, Pandas, NumPy, Matplotlib, Seaborn, Power BI, and Tableau.",
  },
  {
    title: "Software Engineering Foundations",
    detail: "OOPs, DSA, SDLC, MVC architecture, manual testing, debugging, and API testing.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mb-10">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Aspiring developer focused on full stack web development and data-driven problem solving.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.article
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="glass group overflow-hidden rounded-3xl"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4]">
            <img
              src="/profile2.png"
              alt="Omkar Rajkumar Waghmare"
              onError={(event) => {
                event.currentTarget.src =
                  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80";
              }}
              className="h-full w-full object-cover object-[center_18%] transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/65 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-white/15" />
          </div>

          <div className="space-y-3 px-6 py-6">
            <p className="chip">B.E. Computer Engineering | 2026</p>
            <h3 className="font-display text-2xl font-semibold">Omkar Rajkumar Waghmare</h3>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              Parvatibai Genba Moze College of Engineering, Pune. Current CGPA: 9.00.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs text-[var(--muted)]">
              <span className="chip">Java + Spring Boot</span>
              <span className="chip">Python + SQL</span>
              <span className="chip">Frontend Development</span>
            </div>
          </div>
        </motion.article>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="space-y-5"
      >
          <div className="glass rounded-3xl p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold">What I Focus On</h3>
            <div className="mt-5 grid gap-4">
              {pillars.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[var(--stroke)] bg-white/5 px-4 py-4"
                >
                  <h4 className="font-semibold text-[var(--text)]">{item.title}</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold">Journey Snapshot</h3>
            <div className="mt-5 space-y-4 border-l border-[var(--stroke)] pl-5">
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--muted)]">2020</p>
                <p className="mt-1 text-sm">SSC - Shri Dnyaneshwar Vidyalaya - 85.20%.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--muted)]">2023</p>
                <p className="mt-1 text-sm">Diploma - JSPM&apos;s Bhivarabai Sawant Polytechnic - 82.91%.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Dec 2024 - Feb 2025</p>
                <p className="mt-1 text-sm">Frontend Development Intern at BrainlyHood Technologies Pvt Ltd, Pune.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--muted)]">2026</p>
                <p className="mt-1 text-sm">B.E. Computer Engineering expected completion with CGPA 9.00.</p>
              </div>
            </div>
          </div>
      </motion.div>
      </div>
    </section>
  );
}