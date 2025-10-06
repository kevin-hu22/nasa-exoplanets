import { useCallback, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Loader } from './components/ui/Loader';
import { ErrorMessage } from './components/ui/ErrorMessage';
import StarfieldBackground from './components/ui/StarfieldBackground';
import Navbar from './components/Navbar';
import TeamModal from './components/TeamModal';
import PlanetModal from './components/PlanetModal';
import Exoplanets from './components/Exoplanets';
import Home from './components/Home';
import PredictForm from './components/PredictForm';

function App() {
  
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  // Planet modal state lifted to App so modals are global
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isPlanetModalOpen, setIsPlanetModalOpen] = useState(false);

  const handleOpenTeamModal = useCallback(() => setIsTeamModalOpen(true), []);
  const handleCloseTeamModal = useCallback(() => setIsTeamModalOpen(false), []);

  const handlePlanetSelect = useCallback((planet) => {
    setSelectedPlanet(planet);
    setIsPlanetModalOpen(true);
  }, []);

  const handleClosePlanetModal = useCallback(() => {
    setIsPlanetModalOpen(false);
    setTimeout(() => setSelectedPlanet(null), 300);
  }, []);

  const shouldHideMainContent = isTeamModalOpen || isPlanetModalOpen;

  return (
    <>
      {/* Example navigation links */}
      <StarfieldBackground />
      <Navbar onNearSpaceTeamClick={handleOpenTeamModal} isHidden={shouldHideMainContent} />
      <Routes>
        <Route path="/" element={<Home hideMainContent={shouldHideMainContent} />} />
        <Route path="/exoplanets" element={<Exoplanets onPlanetSelect={handlePlanetSelect} hideMainContent={shouldHideMainContent} />} />
        <Route path="/predict" element={<PredictForm hideMainContent={shouldHideMainContent} />} />
      </Routes>

      {/* Global modals rendered at app root */}
      <TeamModal isOpen={isTeamModalOpen} onClose={handleCloseTeamModal} />
      <PlanetModal isOpen={isPlanetModalOpen} onClose={handleClosePlanetModal} planet={selectedPlanet} />
    </>
  );
}

export default App;
