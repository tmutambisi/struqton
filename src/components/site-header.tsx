import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

/* Logo navy: #0d2744 */
const NAVY = "#0d2744";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ backgroundColor: NAVY }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/30" : ""
        }`}
    >
      <div className="container-page flex h-18 items-center justify-between md:h-24">
        {/* Logo — larger so it fills the navy bar naturally */}
        <Link to="/" className="flex items-center" aria-label="Struqton Structural home">
          <img
            src={logoImg}
            alt="Struqton Structural"
            className="h-18 w-auto object-contain md:h-28"
          />
        </Link>

        {/* Desktop nav — white text on navy */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover-underline text-sm font-medium text-white/75 transition-colors hover:text-white"
              activeProps={{ className: "text-white font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          {/* CTA: bright white pill */}
          <Link
            to="/contact"
            className="inline-flex h-10 items-center rounded-sm bg-white px-5 text-sm font-bold text-[#0d2744] transition-all hover:bg-white/90 hover:-translate-y-0.5 shadow-md"
          >
            Start a project
          </Link>
        </nav>

        {/* Mobile hamburger — white on navy */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-white/80 hover:text-white transition-colors md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer — same navy */}
      {open && (
        <div style={{ backgroundColor: NAVY }} className="border-t border-white/10 md:hidden shadow-xl">
          <nav className="container-page flex flex-col py-4" aria-label="Mobile">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3.5 text-sm font-medium text-white/75 hover:text-white transition-colors"
                activeProps={{ className: "text-white font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-11 items-center justify-center rounded-sm bg-white text-sm font-bold text-[#0d2744]"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
