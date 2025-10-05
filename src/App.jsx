// src/App.jsx
import { useCallback, useState } from 'react';
import useApiData from './hooks/useApiData';
import DataTable from './components/DataTable';
import { Loader } from './components/ui/Loader';
import { ErrorMessage } from './components/ui/ErrorMessage';
import StarfieldBackground from './components/ui/StarfieldBackground';
import Navbar from './components/Navbar';
import TeamModal from './components/TeamModal';

function App() {
  const { data, isLoading, error } = useApiData('YOUR_API_ENDPOINT_HERE');
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  const handleOpenTeamModal = useCallback(() => setIsTeamModalOpen(true), []);
  const handleCloseTeamModal = useCallback(() => setIsTeamModalOpen(false), []);

  const shouldHideMainContent = isTeamModalOpen;

  return (
    <main className="min-h-screen p-4 md:p-8 font-sans relative z-10">
      <StarfieldBackground />
      <div className="container mx-auto">
        <header className={`my-10 transition-all duration-300 ${shouldHideMainContent ? 'hidden' : 'block'}`}>
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl shadow-black/30 backdrop-blur-2xl">
            <h1 className="text-5xl font-bold text-white">Exoplanet Observatory</h1>
            <p className="mt-3 text-accent-light">
              Data from the Transiting Exoplanet Survey Satellite (TESS)
            </p>
          </div>
        </header>

        <Navbar onNearSpaceTeamClick={handleOpenTeamModal} isHidden={shouldHideMainContent} />

        {!shouldHideMainContent && (
          <div className="space-y-6">
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {!isLoading && !error && data.length > 0 && <DataTable data={data} />}
          </div>
        )}
      </div>

      <TeamModal isOpen={isTeamModalOpen} onClose={handleCloseTeamModal} />
    </main>
  );
}

export default App;
