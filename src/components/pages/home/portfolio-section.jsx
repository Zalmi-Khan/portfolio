import { ArrowUpRight } from "lucide-react";
import { Project1, Project2, Project3, Project4 } from "../../../assets/images";
import { Heading } from "../../common/heading";

const portfolioData = [
  {
    img: Project1,
    category: "product design",
    title: "Mobile Application Design",
    detail:
      "Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis...",
  },
  {
    img: Project2,
    category: "product design",
    title: "Website Makeup Design",
    detail:
      "Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis...",
  },
  {
    img: Project3,
    category: "Design & Branding",
    title: "Brand Identity and Motion Design",
    detail:
      "Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis...",
  },
  {
    img: Project4,
    category: "Graphics Design",
    title: "Mobile Application Design",
    detail:
      "Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis...",
  },
];

export const PortfolioSection = () => {
  return (
    <div className="container py-20">
      <Heading
        subTitle="Latest Works"
        title="Explore My Popular"
        colorTitle="Projects"
        textAlign="center"
      />
      <div className="mt-10">
        {portfolioData &&
          portfolioData.map((item, index) => (
            <div
              key={index}
              className={`flex gap-0 items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2">
                <div className="h-[450px] w-full">
                  <img
                    className="size-full object-cover"
                    src={item.img}
                    alt="project1"
                  />
                </div>
              </div>
              <div className="w-1/2">
              <div className={`py-6 ${index % 2 === 0 ?"pl-12 pr-0":"pl-0 pr-12"}`}>
                <div className="flex flex-col gap-6 cursor-pointer group duration-300 transition-all">
                  <h6 className="font-medium text-lg text-primary capitalize">
                    {item.category}
                  </h6>
                  <h4 className="text-[40px] leading-[46px] font-semibold text-white capitalize">
                    {item.title}
                  </h4>
                  <p className="text-text  font-medium text-lg">
                    {item.detail}
                  </p>
                  <div className="w-12 h-12 rounded-full border border-text/50 bg-black/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary duration-300 transition-all">
                    <ArrowUpRight
                      size={20}
                      className="text-white group-hover:text-black"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
