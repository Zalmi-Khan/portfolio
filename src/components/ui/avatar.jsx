import clsx from "clsx";

export const Avatar = ({ src, size = "md" }) => {
  return (
    <div
      className={clsx(
        "rounded-full overflow-hidden",
        size === "sm" && "w-6 h-6",
        size === "md" && "w-10 h-10 ",
        size === "lg" && "w-16 h-16 ",
        size === "xl" && "w-20 h-20 "
      )}
    >
      <img
        src={src}
        alt="avatar-image"
        className="size-full object-cover"
      />
    </div>
  );
};
