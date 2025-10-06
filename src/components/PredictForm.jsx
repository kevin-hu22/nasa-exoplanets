import { useState } from 'react';
import { Loader } from './ui/Loader';

export default function PredictForm({ hideMainContent = false }) {
  const [form, setForm] = useState({
    name: '',
    period: 0,
    prad: '',
    ecc: '',
    pmass: '',
    st_teff: 0,
    st_rad: 0,
    st_mass: '',
    eqt: '',
  });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!form.period || Number(form.period) <= 0) errors.period = 'Period must be a positive number';
    if (!form.st_teff || Number(form.st_teff) <= 0) errors.st_teff = 'Stellar Teff is required';
    if (!form.st_rad || Number(form.st_rad) <= 0) errors.st_rad = 'Stellar Radius is required';

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    const payload = {
      name: form.name,
      period: Number(form.period),
      st_teff: Number(form.st_teff),
      st_rad: Number(form.st_rad),
    };

    if (form.prad !== '') payload.prad = Number(form.prad);
    if (form.ecc !== '') payload.ecc = Number(form.ecc);
  if (form.pmass !== '') payload.pmass = Number(form.pmass);
  if (form.eqt !== '') payload.eqt = Number(form.eqt);
    if (form.st_mass !== '') payload.st_mass = Number(form.st_mass);

    try {
      setLoading(true);
      setError(null);
      setData(null);

      const res = await fetch('https://exoseek.onrender.com/predict-one?strict=true', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setData(data);
    } catch (err) {
      console.error('Prediction error:', err);
      setError(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  };

  if (hideMainContent) return null;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="relative z-10 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur-1xl p-8">
            <h2 className="text-2xl font-bold mb-6">Predict An Exoplanet</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 items-end">
              {/* Name */}
              <div className="col-span-1 md:col-span-2">
                <label className="block font-medium mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="w-full bg-transparent border border-white/10 backdrop-blur-sm rounded p-3 placeholder:text-white/60" placeholder="TOI-XYZ-1" />
              </div>

              {/* Period (required) */}
              <div>
                <label className="block font-medium mb-1">Period (days) <span className="text-red-400">*</span></label>
                <input name="period" value={form.period} onChange={handleChange} type="number" step="any" className="w-full bg-transparent border border-white/10 backdrop-blur-sm rounded p-3 placeholder:text-white/60" />
                {fieldErrors.period && <p className="text-xs text-red-300 mt-1">{fieldErrors.period}</p>}
              </div>

              {/* Planet radius */}
              <div>
                <label className="block font-medium mb-1">Planet radius (Earth radii)</label>
                <input name="prad" value={form.prad} onChange={handleChange} type="number" step="any" className="w-full bg-transparent border border-white/10 backdrop-blur-sm rounded p-3 placeholder:text-white/60" />
              </div>

              {/* Eccentricity */}
              <div>
                <label className="block font-medium mb-1">Eccentricity</label>
                <input name="ecc" value={form.ecc} onChange={handleChange} type="number" step="any" className="w-full bg-transparent border border-white/10 backdrop-blur-sm rounded p-3 placeholder:text-white/60" />
              </div>

              {/* Planet mass */}
              <div>
                <label className="block font-medium mb-1">Planet mass (Earth masses)</label>
                <input name="pmass" value={form.pmass} onChange={handleChange} type="number" step="any" className="w-full bg-transparent border border-white/10 backdrop-blur-sm rounded p-3 placeholder:text-white/60" />
              </div>

              {/* Stellar Teff (required) */}
              <div>
                <label className="block font-medium mb-1">Stellar Teff (K) <span className="text-red-400">*</span></label>
                <input name="st_teff" value={form.st_teff} onChange={handleChange} type="number" step="any" className="w-full bg-transparent border border-white/10 backdrop-blur-sm rounded p-3 placeholder:text-white/60" />
                {fieldErrors.st_teff && <p className="text-xs text-red-300 mt-1">{fieldErrors.st_teff}</p>}
              </div>

              {/* Stellar Radius (required) */}
              <div>
                <label className="block font-medium mb-1">Stellar Radius (solar radii) <span className="text-red-400">*</span></label>
                <input name="st_rad" value={form.st_rad} onChange={handleChange} type="number" step="any" className="w-full bg-transparent border border-white/10 backdrop-blur-sm rounded p-3 placeholder:text-white/60" />
                {fieldErrors.st_rad && <p className="text-xs text-red-300 mt-1">{fieldErrors.st_rad}</p>}
              </div>

              {/* Equilibrium temp */}
              <div>
                <label className="block font-medium mb-1">Equilibrium temperature (K)</label>
                <input name="eqt" value={form.eqt} onChange={handleChange} type="number" step="any" className="w-full bg-transparent border border-white/10 backdrop-blur-sm rounded p-3 placeholder:text-white/60" />
              </div>

              {/* Stellar Mass */}
              <div>
                <label className="block font-medium mb-1">Stellar Mass (solar masses)</label>
                <input name="st_mass" value={form.st_mass} onChange={handleChange} type="number" step="any" className="w-full bg-transparent border border-white/10 backdrop-blur-sm rounded p-3 placeholder:text-white/60" />
              </div>

              <div className="col-span-1 md:col-span-2 mt-4">
                <button type="submit" className="px-5 py-3 w-full rounded-full border border-white/10 glass-pane text-sm font-medium text-white/90 backdrop-blur transition-all duration-300 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-space-dark flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
                  </svg>
                  Discover
                </button>
              </div>
            </form>
          </div>
        </div>

        <aside className="relative z-10 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur-1xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-3">AI Model Information</h3>
          <p className="text-sm mb-4 text-slate-100/80">This AI service is trained on data from NASA's Kepler, K2 &amp; TESS missions datasets.</p>

          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Usage</p>
            <p className="text-xs text-slate-100/70">Fill the form and click Predict. The model will return derived parameters and a prediction object.</p>
          </div>

          {/* Loading / error / result */}
          <div className="mt-4">
            {loading && (
              <div className="flex items-center justify-center py-6">
                <Loader />
              </div>
            )}

            {error && (
              <div className="text-red-300 text-sm">Error: {error}</div>
            )}

            {!loading && !error && data && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  {/* Display key fields as cards */}
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-xs text-slate-100/70">Probability confirmed</p>
                    <p className="font-semibold">{data.item?.prob_confirmed ?? '—'}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <p className="text-xs text-slate-100/70">Period (yr)</p>
                      <p className="font-semibold">{data.item?.period_yr ?? '—'}</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <p className="text-xs text-slate-100/70">Semi-major axis (AU)</p>
                      <p className="font-semibold">{data.item?.a_au ?? '—'}</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <p className="text-xs text-slate-100/70">Stellar flux (S_eff)</p>
                      <p className="font-semibold">{data.item?.s_eff ?? '—'}</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <p className="text-xs text-slate-100/70">Planet density (rho_p)</p>
                      <p className="font-semibold">{data.item?.rho_p ?? '—'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
