import React from "react";
import "./PartnerCarousel.css";
import africaUniversity from "@/assets/partners/africa-university.jpg";
import bancabc from "@/assets/partners/bancabc.jpg";
import crownAgents from "@/assets/partners/crown-agents.png";
import dallaglio from "@/assets/partners/dallaglio.jpg";
import glytime from "@/assets/partners/glytime.jpg";
import oldMutual from "@/assets/partners/old-mutual.jpg";
import pumpSystemAfrica from "@/assets/partners/pump-system-africa.jpg";
import unicef from "@/assets/partners/unicef.jpg";
import valueEngineering from "@/assets/partners/value-engineering.png";
import zimplats from "@/assets/partners/zimplats.jpg";
import zpc from "@/assets/partners/zpc.png";

const topRow = [
  { src: unicef, alt: "UNICEF" },
  { src: zpc, alt: "Zimbabwe Power Company" },
  { src: bancabc, alt: "BancABC" },
  { src: oldMutual, alt: "Old Mutual" },
  { src: africaUniversity, alt: "Africa University" },
  { src: crownAgents, alt: "Crown Agents" },
];

const bottomRow = [
  { src: dallaglio, alt: "Dallaglio" },
  { src: glytime, alt: "Glytime" },
  { src: pumpSystemAfrica, alt: "Pump System Africa" },
  { src: valueEngineering, alt: "Value Engineering" },
  { src: zimplats, alt: "Zimplats" },
];

export function PartnerCarousel() {
  // Duplicate arrays for seamless infinite scroll
  const topItems = [...topRow, ...topRow];
  const bottomItems = [...bottomRow, ...bottomRow];

  return (
    <div className="partner-marquee-wrapper" aria-label="Trusted partners">
      {/* Top row — scrolls left */}
      <div className="partner-marquee-track">
        <div className="partner-marquee-inner scroll-left">
          {topItems.map((partner, i) => (
            <div className="partner-card" key={`top-${i}`}>
              <img src={partner.src} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row — scrolls right */}
      <div className="partner-marquee-track">
        <div className="partner-marquee-inner scroll-right">
          {bottomItems.map((partner, i) => (
            <div className="partner-card" key={`bottom-${i}`}>
              <img src={partner.src} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
