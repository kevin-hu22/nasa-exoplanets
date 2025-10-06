import CarrouselSlick from "./CarrouselSlick.jsx";
import useApiData from "../hooks/useApiData";
import DataTable from "./DataTable.jsx";
import { Loader } from "./ui/Loader";
import { ErrorMessage } from "./ui/ErrorMessage";

const Exoplanets = ({ onPlanetSelect, hideMainContent = false }) => {
  const { data, isLoading, error } = useApiData('https://exoseek.onrender.com/combined/scored?page_size=1000');

  
  return (
    <main className="min-h-screen p-4 md:p-8 font-sans relative z-10">
      
      <div className="container mx-auto">

        {!hideMainContent && <CarrouselSlick onPlanetClick={onPlanetSelect} />}
        {!hideMainContent && (
          <div className="space-y-6">
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {!isLoading && !error && data.length > 0 && (
              <DataTable data={data} onRowClick={onPlanetSelect} />
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Exoplanets;