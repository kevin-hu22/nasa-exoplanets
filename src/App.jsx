// src/App.jsx
import useApiData from './hooks/useApiData';
import DataTable from './components/DataTable';
import { Loader } from './components/ui/Loader';
import { ErrorMessage } from './components/ui/ErrorMessage';
import StarfieldBackground from "./components/ui/StarfieldBackground";

function App() {
  const { data, isLoading, error } = useApiData('YOUR_API_ENDPOINT_HERE');

  return (
      
    <main className="min-h-screen p-4 md:p-8 font-sans relative z-10">
      <StarfieldBackground />
      <div className="container mx-auto">
        <header className="my-10 ">
          <h1 className="text-5xl font-bold text-white text-center">Exoplanet Observatory</h1>
          <p className="text-accent-light text-center">Data from the Transiting Exoplanet Survey Satellite (TESS)</p>
        </header>

        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!isLoading && !error && data.length > 0 && <DataTable data={data} />}
      </div>
    </main>
  );
}

export default App;