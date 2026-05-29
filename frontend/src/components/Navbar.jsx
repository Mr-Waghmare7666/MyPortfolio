import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const ctaLabel = useMemo(() => (theme === "dark" ? "Light" : "Dark"), [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-33% 0px -56% 0px",
        threshold: 0.1,
      }
    );

    links.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all sm:px-6 ${
          scrolled
            ? "glass border-[var(--stroke)] shadow-soft"
            : "border-transparent bg-transparent"
        }`}
      >
        <button
          onClick={() => goTo("home")}
          className="font-display text-lg font-bold tracking-wide text-[var(--text)]"
          type="button"
        >
          Omkar Waghmare
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                active === item.id
                  ? "bg-[var(--brand)]/20 text-[var(--text)]"
                  : "text-[var(--muted)] hover:bg-white/10 hover:text-[var(--text)]"
              }`}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="btn-ghost hidden px-4 py-2 text-xs sm:inline-flex"
            type="button"
          >
            {ctaLabel} Mode
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="btn-ghost px-3 py-2 text-xs md:hidden"
            type="button"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="glass mx-auto mt-2 max-w-7xl rounded-2xl border border-[var(--stroke)] p-3 md:hidden">
          <div className="grid gap-1">
            {links.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`rounded-lg px-4 py-2 text-left text-sm transition ${
                  active === item.id ? "bg-[var(--brand)]/20" : "hover:bg-white/10"
                }`}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}