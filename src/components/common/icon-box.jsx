export const IconBox = (props) => {
  const { icon: Icon, text } = props;
  return (
    <div className="flex items-center gap-4">
      {Icon && <Icon size={24} className="text-primary" />}
      <span className="text-white text-lg font-normal">{text}</span>
    </div>
  );
};
