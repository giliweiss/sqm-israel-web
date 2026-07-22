import sqmIcon from "@/assets/SQM-logos/only-logo-no-bg.png";

interface SqmLogoProps {
  className?: string;
  iconClassName?: string;
  variant?: "default" | "inverted";
}

const SqmLogo = ({
  className = "",
  iconClassName = "h-11 w-11",
  variant = "default",
}: SqmLogoProps) => {
  const textColor = variant === "inverted" ? "text-white" : "text-[#1a2744]";

  return (
    <div
      className={`flex items-center gap-2.5 ${className}`}
      role="img"
      aria-label="SQM Israel (2001) Ltd"
    >
      <img
        src={sqmIcon}
        alt=""
        aria-hidden="true"
        className={`object-contain shrink-0 ${iconClassName} ${
          variant === "inverted" ? "brightness-0 invert" : ""
        }`}
      />
      <div className={`flex flex-col justify-center leading-none ${textColor}`}>
        <span className="text-[1.65rem] font-extrabold tracking-tight uppercase">
          SQM
        </span>
        <span className="mt-0.5 text-[0.7rem] font-extrabold tracking-tight whitespace-nowrap">
          Israel (2001) Ltd
        </span>
      </div>
    </div>
  );
};

export default SqmLogo;
