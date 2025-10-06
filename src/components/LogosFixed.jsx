import React from "react";

const logos = [
  { src: "/Logo Near space.png", alt: "Logo 1" },
  { src: "/Space_Apps__White.png", alt: "Logo 2" },
  // Agrega más logos aquí si lo necesitas
];

const LogosFixed = () => (
  <div
    style={{      
      display: "flex",
      gap: "12px",
      zIndex: 1,
      background: "transparent",
      padding: "8px 12px",
      borderRadius: "8px",      
      justifyContent: "flex-start",
    }}
  >
    {logos.map((logo, idx) => (
      <img
        key={idx}
        src={logo.src}
        alt={logo.alt}
        style={{ height: "60px", width: "auto" }}
      />
    ))}
  </div>
);

export default LogosFixed;
