import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const SkillChart = lazy(() => import("../components/SkillChart"));

const capabilities = [
  {
    title: "Programming Languages",
    level: 90,
    items: "Java, Python, C++, JavaScript, SQL",
  },
  {
    title: "Frontend Development",
    level: 88,
    items: "HTML5, CSS3, JavaScript (ES6+), Bootstrap, Responsive Design",
  },
  {
    title: "Backend Development",
    level: 86,
    items: "Core Java, JDBC, Servlets, JSP, Spring Framework, MySQL, REST APIs",
  },
  {
    title: "Data Analysis",
    level: 82,
    items: "Pandas, NumPy, Matplotlib, Seaborn, Power BI, Tableau",
  },
];

const toolset = [
  "VS Code",
  "IntelliJ IDEA",
  "Eclipse",
  "Jupyter Notebook",
  "Google Colab",
  "Excel",
  "Power BI",
  "Tableau",
  "Git",
  "GitHub",
  "JavaScript",
  "Java",
  "Python",
  "SQL",
  "MySQL",
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Skills and Capabilities
      </motion.h2>
      <p className="section-subtitle">
        Technical strengths based on Java full stack development and data analysis experience.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="glass rounded-3xl p-6 sm:p-8"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Skill Radar</p>
          <div className="mt-5">
            <Suspense fallback={<div className="h-[320px] w-full animate-pulse rounded-2xl bg-white/5" />}>
              <SkillChart />
            </Suspense>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <div className="glass rounded-3xl p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Core Proficiency</p>
            <div className="mt-5 space-y-4">
              {capabilities.map((item) => (
                <div key={item.title}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-[var(--muted)]">{item.level}%</p>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#79A1FF] to-[#5BE6C9]"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-[var(--muted)]">{item.items}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Daily Toolset</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {toolset.map((tool) => (
                <span key={tool} className="chip text-[var(--muted)]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}