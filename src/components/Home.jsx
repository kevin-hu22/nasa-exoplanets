import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Home({ hideMainContent = false }) {
  if (hideMainContent) return null;

  return (
    <div className="flex flex-col gap-20">
      <div className="flex relative w-[100vw] wrap flex-col">
        <img
          src="/exoplanets 1.webp"
          alt="Exoplanetas"
          className="absolute top-0 h-[100dvh] w-full object-cover z-[-1]"
        />
        <div className="flex flex-col relative z-10 p-8 gap-5 w-full max-w-1/3 pl-[8rem] pt-[5rem]">
          <h2 className="text-6xl font-bold ">Exoplanets</h2>
          <p className="text-2xl font-thin w-[50rem]">
            An exoplanet is any planet beyond our solar system. Most of them
            orbit other stars, but some free-floating exoplanets, called rogue
            planets, are untethered to any star. We've confirmed more than 6,000
            exoplanets, out of the billions that we believe exist.
          </p>
          <button className='px-5 py-2 rounded-full border border-white/10 glass-pane font-medium text-white/90 backdrop-blur transition-all duration-300 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-space-dark w-fit text-xl'>
            <Link to="/predict">Detection with IA</Link>
          </button>
        </div>
        <div className="flex justify-start pl-[8rem] flex-col">
          
          <div className="pb-[4px]">
            <p>Exoplanets Discoveries</p>
          </div>
          <div className="flex gap-[8rem] flex-nowrap">
          <div className="flex flex-col h-[4rem] w-[20rem]">
            <div className="pb-[6px] text-start border-t border-white">
              <h2 className="font-bold text-xl">Confirmed Exoplanets</h2>
              <p className="text-lg">6022</p>
            </div>
          </div>
          <div className="flex flex-col h-[4rem] w-[20rem]">
          
            <div className="pb-[6px] text-start border-t border-white">
              <h2 className="font-bold text-xl">Star Count</h2>
              <p className="text-lg">4495</p>
            </div>
          </div>
          <div className="flex flex-col h-[4rem] w-[20rem]">
            
            <div className="pb-[6px] text-start border-t border-white">
              <h2 className="font-bold text-xl">New Discoveries</h2>
              <p className="text-lg">TOI - 5799 C</p>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <section className="w-full flex px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white items-center justify-center">
          <div className="flex gap-4 max-w-xl">
            <img src={'/lsp_tess_1280.jpg'} alt="6,000 Exoplanets" className="h-20 w-20 rounded-full object-cover" />
            <div>
              <h3 className="text-2xl font-bold">6,000 Exoplanets!</h3>
              <p className="mt-2 text-base text-slate-100/80">The milestone of extra-solar planets confirmed by NASA highlights the accelerating rate of discoveries, just over three decades since the first exoplanets were found.</p>
            </div>
          </div>
          <div className="flex gap-4 max-w-xl">
            <img src={'PIA19827.jpg'} alt="Habitable Zone" className="h-20 w-20 rounded-full object-cover" />
            <div>
              <h3 className="text-2xl font-bold">The Habitable Zone</h3>
              <p className="mt-2 text-base text-slate-100/80">The area around a star where its planets could have liquid water on the surface. Also called “Goldilocks zones,” where conditions might be just right — not too hot, not too cold — for life.</p>
            </div>
          </div>
          <div className="flex gap-4 max-w-xl">
            <img src={'PIA21421.jpg'} alt="Why We Search" className="h-20 w-20 rounded-full object-cover" />
            <div>
              <h3 className="text-2xl font-bold">Why We Search</h3>
              <p className="mt-2 text-base text-slate-100/80">Whether life exists beyond Earth is one of the most profound questions of all time. The answer — whatever it is — will change us forever.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
