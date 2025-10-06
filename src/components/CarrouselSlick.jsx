import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import planetsRaw from "../services/kepler_simple.json";

// 1. Acepta 'onPlanetClick' como prop
const CarrouselSlick = ({ onPlanetClick }) => {
  
  // Mezclamos y tomamos 7 solo una vez
  const planets = useMemo(() => {
    const shuffled = [...planetsRaw].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 7);
  }, []);

  // 2. Ya no necesitamos 'handlePlanetClick' aquí, se manejará en el padre.

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const slideStyle = {
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
  };
  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    margin: "0 auto",
  };
  const textStyle = { color: "#fff", marginTop: "10px" };
  
  return (
    <div style={{ padding: "20px" }}>
      <Slider {...settings}>
        {planets.map((planet, idx) => (
          <div
            key={`${planet.name}-${idx}`}
            // 3. Llama a la función del prop en el evento onClick
            onClick={() => onPlanetClick(planet)}
          >
            <div style={slideStyle}>
              <img
                src={planet.image_url}
                alt={planet.name}
                style={imageStyle}
              />
              <h3 style={textStyle}>{planet.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarrouselSlick;