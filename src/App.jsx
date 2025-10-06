/* eslint-disable no-unused-vars */
// src/App.jsx
import { useCallback, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Loader } from './components/ui/Loader';
import { ErrorMessage } from './components/ui/ErrorMessage';
import StarfieldBackground from './components/ui/StarfieldBackground';
import Navbar from './components/Navbar';
import TeamModal from './components/TeamModal';
import Exoplanets from './components/Exoplanets';
import Home from './components/Home';
import About from './components/About';

function App() {
  
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  const handleOpenTeamModal = useCallback(() => setIsTeamModalOpen(true), []);
  const handleCloseTeamModal = useCallback(() => setIsTeamModalOpen(false), []);

  const shouldHideMainContent = isTeamModalOpen;

  return (
    <>
      {/* Example navigation links */}
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/exoplanets">Exoplanets</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exoplanets" element={<Exoplanets />} />
      </Routes>
    </>
  );
}

export default App;
