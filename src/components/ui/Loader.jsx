// src/components/ui/Loader.jsx
export const Loader = () => (
  <div className="flex flex-col items-center justify-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent-cyan"></div>
    <p className="mt-4 text-accent-light">Loading data from deep space...</p>
  </div>
);

