import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      <CursorGlow />
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="mx-auto max-w-7xl px-5 pb-10 pt-4 text-sm text-[var(--muted)] sm:px-8 lg:px-10">
        <div className="glass flex flex-col items-start justify-between gap-4 rounded-2xl px-6 py-5 sm:flex-row sm:items-center">
          <p>Designed and engineered by Omkar Rajkumar Waghmare.</p>
          <p>2026 Portfolio Edition</p>
        </div>
      </footer>
    </div>
  );
}