/* eslint-disable no-unused-vars */
import CarrouselSlick from "./carrouselSlick.jsx";
import useApiData from "../hooks/useApiData";
import DataTable from "./DataTable.jsx";
import { useCallback, useState } from "react";
import { Loader } from "./ui/Loader";
import { ErrorMessage } from "./ui/ErrorMessage";
import Navbar from "./Navbar";
import TeamModal from "./TeamModal";



const Exoplanets = () => {
  const { data, isLoading, error } = useApiData('https://exoseek.onrender.com/combined/scored?page_size=500&source=toi');
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  const handleOpenTeamModal = useCallback(() => setIsTeamModalOpen(true), []);
  const handleCloseTeamModal = useCallback(() => setIsTeamModalOpen(false), []);

  const shouldHideMainContent = isTeamModalOpen;
  return (
    <main className="min-h-screen p-4 md:p-8 font-sans relative z-10">
      
      <div className="container mx-auto">
        <header
          className={`my-2 transition-all duration-300 block ${
            shouldHideMainContent ? "hidden" : "block"
          }`}
        >
          <Navbar
            onNearSpaceTeamClick={handleOpenTeamModal}
            isHidden={shouldHideMainContent}
          />
        </header>
        {!shouldHideMainContent && <CarrouselSlick />}
        {!shouldHideMainContent && (
          <div className="space-y-6">
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {!isLoading && !error && data.length > 0 && (
              <DataTable data={data} />
            )}
          </div>
        )}
      </div>

      <TeamModal isOpen={isTeamModalOpen} onClose={handleCloseTeamModal} />
    </main>
  );
};

export default Exoplanets;
