export const TitleBanner = ({title}) => {
  return (
    <div className="container">
      <div className="h-[400px] flex justify-center items-center relative">
        <h2 className="text-[50px] font-semibold text-left capitalize">{title}</h2>
        <div className="absolute top-4 left-0">
          <span className="capitalize text-text">
            Home {">"} <span className="text-primary">{title}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
