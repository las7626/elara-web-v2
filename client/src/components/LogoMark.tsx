type LogoMarkProps = {
  compact?: boolean;
  dark?: boolean;
};

export default function LogoMark({ compact = false, dark = false }: LogoMarkProps) {
  const size = compact ? 36 : 42;
  const stroke = dark ? "#ffffff" : "#0B5BFF";
  const accent = dark ? "rgba(255,255,255,0.18)" : "rgba(11,91,255,0.12)";

  return (
    <span
      className={`logo-mark-shell ${compact ? "logo-mark-shell-sm" : ""} ${dark ? "logo-mark-shell-dark" : ""}`}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.75" y="0.75" width="40.5" height="40.5" rx="10" fill={accent} />
        <path d="M9 29.5H28.4" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
        <path d="M12.6 21H27.2" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
        <path d="M15.4 12.5H30.6" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
        <path d="M16.8 12.5L11.4 29.5" stroke={stroke} strokeWidth="2.7" strokeLinecap="round" />
        <path d="M9 21H12.9" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
        <path d="M30.6 12.5H34" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <path d="M28.4 29.5H32.8" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <circle cx="34.8" cy="12.5" r="1.4" fill={stroke} />
        <circle cx="33.6" cy="29.5" r="1.4" fill={stroke} />
        <circle cx="8.2" cy="21" r="1.2" fill={stroke} />
      </svg>
    </span>
  );
}
