// src/components/PlanetModal.jsx
import React from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

Modal.setAppElement('#root');

const PlanetModal = ({ isOpen, onClose, planet }) => {
  if (!planet) return null;

  const customStyles = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 1000 },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(10, 14, 33, 0.8)',
      border: '1px solid #2d3748',
      borderRadius: '12px',
      color: '#e2e8f0',
      width: '90%',
      maxWidth: '800px',
      padding: '2rem',
      backdropFilter: 'blur(10px)',
    },
  };

  const fallbackImageUrl = 'https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/assets/content/planets/neptunelike-5.jpg';

  // --- Mapeo de datos AMPLIADO con los nuevos campos ---
  const planetDetails = {
    name: planet.name || 'N/A',
    image: planet.image_url || fallbackImageUrl,
    disposition: planet.label ? (planet.label === 1 ? 'CONFIRMED' : 'FALSE POSITIVE') : (planet.koi_disposition || 'CANDIDATE'),
    
    // Datos principales
    orbitalPeriod: planet.orbital_period_days || planet.period || 'N/A',
    planetRadius: planet.radius_earth_relative || planet.prad || 'N/A',
    planetMass: planet.mass_earth_relative || 'N/A', // <-- NUEVO
    stellarTemp: planet.equilibrium_temperature_k || planet.st_teff || 'N/A',

    // Datos de descubrimiento y fuente
    discoveryMethod: planet.discovery_method || 'N/A',
    discoveryYear: planet.discovery_year || 'N/A',
    source: planet.source || 'Kepler Archive', // <-- NUEVO (con fallback)

    // Datos astronómicos (Coordenadas)
    ra: planet.ra || 'N/A',       // <-- NUEVO
    dec: planet.dec || 'N/A',      // <-- NUEVO
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Exoplanet Details"
    >
      <div className="relative">
        <button onClick={onClose} className="absolute top-0 right-0 text-gray-400 hover:text-white transition-colors">
          <FaTimes size={24} />
        </button>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img 
              src={planetDetails.image} 
              alt={`Artistic representation of ${planetDetails.name}`} 
              className="w-full h-auto object-cover rounded-lg shadow-lg shadow-cyan-500/20"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-accent-cyan mb-2">{planetDetails.name}</h2>
            <p className="text-lg mb-4"><strong>Disposition:</strong> <span className="font-light">{planetDetails.disposition}</span></p>
            
            {/* --- SECCIONES DE DATOS REORGANIZADAS --- */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-accent-light mb-1">Planet Properties</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm border-t border-slate-700 pt-2">
                  <p><strong>Orbital Period:</strong></p> 
                  <p className="font-light">{planetDetails.orbitalPeriod} days</p>

                  <p><strong>Planet Radius (R⊕):</strong></p>
                  <p className="font-light">{planetDetails.planetRadius}</p>

                  {planetDetails.planetMass !== 'N/A' && <>
                    <p><strong>Planet Mass (M⊕):</strong></p>
                    <p className="font-light">{planetDetails.planetMass}</p>
                  </>}

                  <p><strong>Stellar Temp (K):</strong></p>
                  <p className="font-light">{planetDetails.stellarTemp}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-accent-light mb-1 mt-2">Discovery Info</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm border-t border-slate-700 pt-2">
                  <p><strong>Data Source:</strong></p>
                  <p className="font-light">{planetDetails.source}</p>
                
                  {planetDetails.discoveryMethod !== 'N/A' && <>
                    <p><strong>Discovery Method:</strong></p>
                    <p className="font-light">{planetDetails.discoveryMethod}</p>
                  </>}

                  {planetDetails.discoveryYear !== 'N/A' && <>
                    <p><strong>Discovery Year:</strong></p>
                    <p className="font-light">{planetDetails.discoveryYear}</p>
                  </>}
                </div>
              </div>

              {(planetDetails.ra !== 'N/A' || planetDetails.dec !== 'N/A') &&
                <div>
                  <h3 className="text-lg font-semibold text-accent-light mb-1 mt-2">Coordinates</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm border-t border-slate-700 pt-2">
                    <p><strong>Right Ascension:</strong></p>
                    <p className="font-light">{planetDetails.ra} deg</p>
                    
                    <p><strong>Declination:</strong></p>
                    <p className="font-light">{planetDetails.dec} deg</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PlanetModal;