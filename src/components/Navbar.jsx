import LogosFixed from './LogosFixed';
import { Link } from 'react-router-dom';

const buttonBaseClasses =
  'px-5 py-2 rounded-full border border-white/10 glass-pane text-sm font-medium text-white/90 backdrop-blur transition-all duration-300 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-space-dark';

const Navbar = ({ onNearSpaceTeamClick, isHidden = false }) => {
  if (isHidden) {
    return null;
  }

  return (
    <nav aria-label="NearSpace secondary navigation my-2 transition-all duration-300 block" className="mb-2 grid grid-cols-3 gap-4">
      <LogosFixed />
      <Link to="/">
        <div className="mx-auto py-4 text-center">
          <h1 className="text-5xl font-extrabold text-white">EXOSEEK</h1>
          <p className="mt-3 text-accent-light">
            AI for Exoplanet Detection
          </p>
        </div>
      </Link>

      <div className="mx-auto flex w-full max-w-3xl items-center justify-center gap-4 rounded-full px-6 py-3 backdrop-blur-xl">
        <button type="button" className={buttonBaseClasses}>
          <Link to="/exoplanets">Catalog</Link>
        </button>
        <button type="button" className={buttonBaseClasses}>
          <Link to="/predict">Detection with AI</Link>
        </button>
        <button type="button" onClick={onNearSpaceTeamClick} className={buttonBaseClasses}>
          About Near Space
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
