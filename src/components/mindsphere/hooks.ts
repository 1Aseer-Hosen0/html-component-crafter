import { useEffect, useState } from "react";

/** Adds .scrolled / .hide to navbar based on scroll direction. */
export function useNavbarScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const s = window.scrollY;
      if (s > 80) {
        setScrolled(true);
        if (s > last + 8) setHide(true);
        else if (last > s + 8) setHide(false);
      } else {
        setScrolled(false);
        setHide(false);
      }
      last = s <= 0 ? 0 : s;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, hide };
}

/** Light/dark theme stored on <html data-theme>. */
export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document === "undefined") return "light";
    return (document.documentElement.getAttribute("data-theme") as "light" | "dark") ?? "light";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

/** Adds .visible to .ms-reveal elements as they enter viewport. */
export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".ms-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
