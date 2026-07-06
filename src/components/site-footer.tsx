import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer
      style={{ backgroundColor: "#0d2744" }}
      className="mt-24 border-t border-border text-white"
    >
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center">
            <img src={logoImg} alt="Struqton Structural" className="h-25 w-auto object-contain" />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
            Building and civil engineering contractor. Residential, commercial,
            industrial, mining, agricultural and energy infrastructure — from
            conception to commissioning.
          </p>
          <p className="mt-6 text-xs text-white/70">
            CIFOZ Category B · PRAZ Registered · NSSA Compliant · Registered
            March 2018
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-white/90">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover-underline text-white/80 hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover-underline text-white/80 hover:text-white">Services</Link></li>
            <li><Link to="/projects" className="hover-underline text-white/80 hover:text-white">Projects</Link></li>
            <li><Link to="/contact" className="hover-underline text-white/80 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-white/90">Sectors</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Commercial</li>
            <li>Industrial</li>
            <li>Residential</li>
            <li>Mining · Energy</li>
            <li>Infrastructure</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-white/90">Office</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/80">
            <p>Struqton Structural (Pvt) Ltd<br />Harare, Zimbabwe</p>
            <p>
              <a href="mailto:info@struqton.com" className="hover-underline text-white/80 hover:text-white">info@struqton.com</a>
            </p>
            <p>
              <a href="tel:+263 774 751 861" className="hover-underline text-white/80 hover:text-white">+263263 242 711 599</a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-white/70 md:flex-row md:items-center">
          <p>Website Developed and Mantained by <a href="https://www.tungasonic.co.zw/" className="hover-underline text-white/80 hover:text-white"><b>TUNGASONIC</b></a></p>
          <p>Zimbabwean-registered contractor</p>
        </div>
      </div>
    </footer>
  );
}
