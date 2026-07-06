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

const partners = [
  africaUniversity,
  bancabc,
  crownAgents,
  dallaglio,
  glytime,
  oldMutual,
  pumpSystemAfrica,
  unicef,
  valueEngineering,
  zimplats,
  zpc,
];

export function PartnerCarousel() {
  // duplicate array for seamless infinite scroll
  const all = [...partners, ...partners];
  return (
    <div className="partner-carousel overflow-hidden py-6" aria-label="Trusted partners">
      <div className="inner flex items-center gap-8 animate-scroll">
        {all.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Partner logo"
            className="h-24 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
}
