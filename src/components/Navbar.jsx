const buttonBaseClasses =
  'px-5 py-2 rounded-full border border-white/10 bg-white/10 text-sm font-medium text-white/90 backdrop-blur transition-all duration-300 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-space-dark';

const Navbar = ({ onNearSpaceTeamClick, isHidden = false }) => {
  if (isHidden) {
    return null;
  }

  return (
    <nav aria-label="NearSpace secondary navigation" className="mb-10">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-center gap-4 rounded-full border border-white/10 bg-white/10 px-6 py-3 backdrop-blur-xl shadow-lg shadow-black/20">
        <button type="button" className={buttonBaseClasses}>
          Exoplanet Detection with AI
        </button>
        <button type="button" onClick={onNearSpaceTeamClick} className={buttonBaseClasses}>
          NearSpace Team
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
