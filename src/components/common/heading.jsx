import clsx from "clsx";

export const Heading = (props) => {
  const textAlignClass =
    {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    }[props.textAlign] || "text-left";
  return (
    <div className="flex flex-col gap-6">
      <div className={clsx("flex flex-col gap-2", textAlignClass)}>
        <h6 className="text-text text-base font-medium">{props.subTitle} </h6>
        <h2 className="text-white text-[40px] leading-[46px] font-semibold">
          {props.title} <span className="text-primary">{props.colorTitle}</span>
        </h2>
      </div>
      <p className="text-base text-text font-normal">{props.detail}</p>
    </div>
  );
};
