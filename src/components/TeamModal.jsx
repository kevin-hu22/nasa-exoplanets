import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiOutlineMapPin } from "react-icons/hi2";
import TeamMemberCard from "./TeamMemberCard";
import { Loader } from "./ui/Loader";

const TeamModal = ({ isOpen, onClose }) => {
  const [teamData, setTeamData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    let isMounted = true;
    setIsLoading(true);
    setHasError(false);

    import("../services/team_data.json")
      .then((module) => {
        if (isMounted) {
          setTeamData(module.default);
        }
      })
      .catch(() => {
        if (isMounted) {
          setHasError(true);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-modal-title"
    >
      <div className="absolute " />

      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur-1xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 transition-colors duration-300 hover:text-accent-cyan hover:border-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-space-dark"
          aria-label="Cerrar modal de NearSpace Team"
        >
          <IoClose className="text-2xl" />
        </button>

        <div className="max-h-[80vh] overflow-y-auto px-6 py-10 sm:px-10">
          {isLoading && (
            <div className="flex justify-center py-10">
              <Loader />
            </div>
          )}

          {!isLoading && hasError && (
            <p className="text-center text-base text-red-200">
              There was a problem loading your team information. Please try
              again.
            </p>
          )}

          {!isLoading && !hasError && teamData && (
            <div className="space-y-6 text-white">
              <div className="space-y-4 text-center mb-10">
                <h2
                  id="team-modal-title"
                  className="text-5xl font-bold tracking-tight text-white"
                >
                  {teamData.teamName}
                </h2>
                <p className="mx-auto max-w-2xl text-base font-thin text-slate-100/80">
                  {teamData.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-fff">
                  <HiOutlineMapPin
                    className="text-lg text-fff"
                    aria-hidden="true"
                  />
                  <span>{teamData.location}</span>
                </div>
              </div>

              <div className="grid gap-6">
                {teamData.members.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
