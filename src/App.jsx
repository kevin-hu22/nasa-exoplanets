// src/App.jsx
import { useCallback, useState } from 'react';
import useApiData from './hooks/useApiData';
import DataTable from './components/DataTable';
import { Loader } from './components/ui/Loader';
import { ErrorMessage } from './components/ui/ErrorMessage';
import StarfieldBackground from './components/ui/StarfieldBackground';
import Navbar from './components/Navbar';
import TeamModal from './components/TeamModal';
import CarrouselSlick from './components/carrouselSlick.jsx';



function App() {
  const { data, isLoading, error } = useApiData('https://exoseek.onrender.com/combined/scored?page_size=500&source=toi');
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  const handleOpenTeamModal = useCallback(() => setIsTeamModalOpen(true), []);
  const handleCloseTeamModal = useCallback(() => setIsTeamModalOpen(false), []);

  const shouldHideMainContent = isTeamModalOpen;

  return (
    <main className="min-h-screen p-4 md:p-8 font-sans relative z-10">
      <StarfieldBackground />
      <div className="container mx-auto">
        <header className={`my-2 transition-all duration-300 block ${shouldHideMainContent ? 'hidden' : 'block'}`}>          
        <Navbar onNearSpaceTeamClick={handleOpenTeamModal} isHidden={shouldHideMainContent} />
        </header>

        <CarrouselSlick className={`${shouldHideMainContent ? 'hidden' : 'block'}`} />
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
