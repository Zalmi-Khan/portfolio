import clsx from "clsx";
import { ArrowRight } from "lucide-react";

export const Button = ({ name, variant = "primary", className }) => {
  const buttonVariant = clsx(
    "flex items-center gap-2 rounded-lg font-semibold 2xl:text-lg text-base capitalize",
    {
      "px-6 py-2 bg-primary text-black border border-primary hover:bg-primary/95":
        variant === "primary",
      "px-0 py-2 bg-transparent text-white border-none":
        variant === "secondary",
    },
    className
  );
  const iconColor = variant === "primary" ? "black" : "#C9F31D";
  return (
    <button className={buttonVariant}>
      {name}
      <ArrowRight size={18} color={iconColor} />
    </button>
  );
};
