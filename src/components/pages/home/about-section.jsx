import { Check } from "lucide-react";
import { Heading, IconBox, IconBoxDetail } from "../../common";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { AboutDot, AboutImg } from "../../../assets/images";

const aboutData = {
  subTitle: "About me",
  title: "Professional Problem Solutions For ",
  colorTitle: "Digital Products",
  detail:
    "At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum corrupti quos dolores quas molestias excepturi sint occaecati cupiditate provident qui officia deserunt mollitia animi, id est laborum et dolorum",
};
const SolutionData = [
  {
    text: "Branding & Design",
    icon: Check,
  },
  {
    text: "Digital Marketing",
    icon: Check,
  },
  {
    text: "Web Development",
    icon: Check,
  },
  {
    text: "Product Design",
    icon: Check,
  },
];
const contactData = [
  {
    icon: Mail,
    text: "info@example.com",
    subText: "Email Us",
  },
  {
    icon: Phone,
    text: "+92 3001234567",
    subText: "Make A Call",
  },
];
export const AboutSection = () => {
  return (
    <div className="bg-dark py-20">
      <div className="container grid grid-cols-2 items-center gap-20">
        <div className="flex flex-col gap-6">
          <Heading {...aboutData} />
          <div className="grid grid-cols-2 gap-4">
            {SolutionData &&
              SolutionData.map((item,index) => (
                <IconBox key={index} icon={item.icon} text={item.text} />
              ))}
          </div>
          <div className="bg-light border border-text/50 rounded-lg px-8 py-4 grid grid-cols-2">
            {contactData &&
              contactData.map((item, index) => (
                <IconBoxDetail
                key={index}
                  icon={item.icon}
                  text={item.text}
                  subText={item.subText}
                />
              ))}
          </div>
        </div>
        <div className="flex justify-end relative">
          <img src={AboutImg} alt="about-img" />
          <img src={AboutDot} className="absolute top-20 left-0" />
        </div>
      </div>
    </div>
  );
};
