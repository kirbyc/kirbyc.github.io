
const SocialLink = ({ href, icon: Icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-neutral-600 hover:text-accent transition-colors duration-300"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm">{label}</span>
    </a>
  );
};

export default SocialLink;
