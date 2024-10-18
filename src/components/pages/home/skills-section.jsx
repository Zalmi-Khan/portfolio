import { Skill1, Skill2, Skill3, Skill4, Skill5, Skill6, Skill7, Skill8 } from "../../../assets/images";
import { Heading } from "../../common";
import { Button } from "../../ui";

const skillData = [
  {
    name: "figma",
    img: Skill1,
    progress: "95",
  },
  {
    name: "Framer",
    img: Skill2,
    progress: "83",
  },
  {
    name: "Photoshop",
    img: Skill3,
    progress: "93",
  },
  {
    name: "WordPress",
    img: Skill4,
    progress: "84",
  },
  {
    name: "Angular",
    img: Skill5,
    progress: "65",
  },
  {
    name: "Webflow",
    img: Skill6,
    progress: "86",
  },
  {
    name: "Python",
    img: Skill7,
    progress: "62",
  },
  {
    name: "Sketch",
    img: Skill8,
    progress: "94",
  },
];

export const SkillsSection = () => {
  return (
    <div className="bg-dark py-20">
      <div className="container grid grid-cols-12 gap-10 items-center">
        <div className="col-span-5">
          <Heading
            subTitle="My Skills"
            title="Let’s Explore Popular"
            colorTitle="Skills & Experience"
            detail="Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo inventore veritatis"
          />
          <div className="mt-6">
            <Button name="Learn More" />
          </div>
        </div>
        <div className="col-span-7">
          <div className="grid grid-cols-4 gap-4">
            {skillData &&
              skillData.map((item,index) => (
                <div key={index} className="bg-light border border-text/50 rounded-xl px-2 pb-3 pt-6 flex flex-col items-center gap-4 hover:border-primary group duration-300 transition-all hover:bg-light-hover">
                  <img src={item.img} alt="" />
                  <h6 className="text-xl font-normal text-white capitalize">
                    {item.name}
                  </h6>
                  <div className="p-[6px] rounded-xl bg-dark-light w-full text-center text-text text-lg font-medium group-hover:bg-primary group-hover:text-black duration-300 transition-all">
                    {item.progress}%
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
