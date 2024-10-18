import { ArrowUpRight } from "lucide-react";
import { Heading } from "../../common";

const servicesData = [
  {
    title: "Brand Identity Design",
    detail: "Dignissimos ducimus blanditiis praesen",
  },
  {
    title: "Brand Identity Design",
    detail: "Dignissimos ducimus blanditiis praesen",
  },
  {
    title: "Brand Identity Design",
    detail: "Dignissimos ducimus blanditiis praesen",
  },
  {
    title: "Brand Identity Design",
    detail: "Dignissimos ducimus blanditiis praesen",
  },
  {
    title: "Brand Identity Design",
    detail: "Dignissimos ducimus blanditiis praesen",
  },
  {
    title: "Brand Identity Design",
    detail: "Dignissimos ducimus blanditiis praesen",
  },
];

export const ServicesSection = () => {
  return (
    <div className="container py-20">
      <div className="flex justify-center">
        <div className="w-1/2">
          <Heading
            textAlign="center"
            subTitle="Popular Services"
            title="My Special Service For your"
            colorTitle="Business Development"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-10">
        {servicesData &&
          servicesData.map((item, index) => (
            <div key={index} className="bg-light border border-text/50  px-12 py-8 rounded-lg flex items-center justify-between gap-6 group hover:border-primary duration-300 hover:bg-light-hover">
              <div className="flex items-start gap-8">
                <span className="text-2xl font-medium text-text group-hover:text-primary duration-300">
                  {" "}
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h6 className="text-2xl font-medium text-white">
                    {item.title}
                  </h6>
                  <p className=" text-text">{item.detail}</p>
                </div>
              </div>
              <div className="min-w-10 h-10 rounded-full border border-text/50 bg-black/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary duration-300">
                <ArrowUpRight
                  size={20}
                  className="text-primary group-hover:text-black"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
