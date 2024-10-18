export const IconBoxDetail = (props) => {
  const { icon: Icon, text, subText } = props;

  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary">
        {Icon && <Icon className="text-black" size={20} />}
      </div>
      <div>
        <span className="text-sm text-text font-medium capitalize">
          {subText}
        </span>
        <h4 className="text-white text-lg font-semibold capitalize">{text}</h4>
      </div>
    </div>
  );
};
