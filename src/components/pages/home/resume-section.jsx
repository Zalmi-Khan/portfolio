import { Asterisk } from "lucide-react";
import { Heading } from "../../common";
import { ArrowUpRight } from "lucide-react";

const resumeData = [
  {
    yearStart: "2018",
    yearEnd: "Present",
    designation: "Lead Product Designer",
    company: "Google",
  },
  {
    yearStart: "2018",
    yearEnd: "2021",
    designation: "Senior Product Designer",
    company: "Webflow",
  },
  {
    yearStart: "2016",
    yearEnd: "2018",
    designation: "Junior UX/UI Designer",
    company: "LinkedIn",
  },
  {
    yearStart: "2014",
    yearEnd: "2016",
    designation: "Graphics Designer",
    company: "Webtend",
  },
];

export const ResumeSection = () => {
  return (
    <div className="container py-20">
      <div className="flex gap-20">
        <div className="h-48 min-w-48 flex items-center justify-center rounded-full bg-light border border-text/50">
          <Asterisk size={200} className="text-primary" />
        </div>
        <div className="w-full">
          <div className="w-1/2">
            <Heading
              subTitle="My Resume"
              title="Real Problem"
              colorTitle="Solutions Experience"
            />
          </div>
          <div className="bg-light p-8 rounded-xl grid grid-cols-2 gap-12 mt-8">
            {resumeData &&
              resumeData.map((item,index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="min-w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:bg-primary duration-300 transition-all">
                    <ArrowUpRight
                      size={24}
                      className="text-text group-hover:text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-base text-text font-medium">
                      {item.yearStart} - {item.yearEnd}
                    </span>
                    <h6 className="text-white  text-2xl leading-0">
                      {item.designation}
                    </h6>
                    <span className="text-text text-sm">{item.company}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
