// src/components/ui/ErrorMessage.jsx
export const ErrorMessage = ({ message }) => (
  <div className="glass-pane p-8 text-center text-red-400">
    <h3 className="text-xl font-bold mb-2">Houston, we have a problem</h3>
    <p>{message}</p>
  </div>
);