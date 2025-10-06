import { FaGithub, FaLinkedin } from "react-icons/fa6";

const iconButtonClasses =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 transition-colors duration-300 hover:text-accent-cyan hover:border-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-space-dark";

const TeamMemberCard = ({ member }) => {
  const { name, photoUrl, profession, bio, socials } = member;

  return (
    <article className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/20 backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <img
          src={photoUrl}
          alt={`Retrato de ${name}`}
          className="h-24 w-24 flex-shrink-0 rounded-2xl border border-white/20 object-cover shadow-lg shadow-black/30"
          loading="lazy"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm uppercase tracking-widest text-accent-light/80">
            {profession}
          </p>
          <p className="mt-3 text-sm text-slate-100/90">{bio}</p>
        </div>
        <div className="flex items-center gap-3">
          {socials?.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={iconButtonClasses}
              aria-label={`Abrir GitHub de ${name}`}
            >
              <FaGithub className="text-lg" />
            </a>
          )}
          {socials?.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={iconButtonClasses}
              aria-label={`Abrir LinkedIn de ${name}`}
            >
              <FaLinkedin className="text-lg" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default TeamMemberCard;
