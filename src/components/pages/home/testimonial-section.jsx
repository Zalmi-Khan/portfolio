import { Quote } from "lucide-react";
import { Author1, Author2 } from "../../../assets/images";
import { Heading } from "../../common";
import { Avatar, Button } from "../../ui";

const testimonialData = [
  {
    img: Author1,
    name: "Rodolfo E. Shannon",
    designation: "CEO & Founder",
    detail:
      "Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritati",
  },
  {
    img: Author2,
    name: "Kenneth J. dutton",
    designation: "web developer",
    detail:
      "Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritati",
  },
];

export const TestimonialSection = () => {
  return (
    <div className="bg-dark py-20">
      <div className="container grid grid-cols-12 gap-10 items-center">
        <div className="col-span-4">
          <Heading
            subTitle="Clients Testimonials"
            title="I’ve 1253+ Clients"
            colorTitle="Feedback"
            detail="Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo inventore veritatis"
          />
          <div className="mt-6">
            <Button name="Learn More" />
          </div>
        </div>
        <div className="col-span-8">
          <div className="grid grid-cols-2 gap-8">
            {testimonialData &&
              testimonialData.map((item, index) => (
                <div key={index} className="px-6 py-10 rounded-xl bg-light border border-text/50 relative cursor-pointer group duration-300 transition-all hover:bg-light-hover">
                  <div className="flex flex-col gap-6 justify-center items-center text-center">
                    <Avatar src={item.img} size="xl" />
                    <p className="text-text">{item.detail}</p>
                    <div className="flex flex-col gap-1 capitalize">
                      <h4 className="text-2xl text-white font-semibold">
                        {item.name}
                      </h4>
                      <span className="text-base text-primary">
                        {item.designation}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Quote
                      size={40}
                      className="rotate-180 text-text group-hover:text-primary duration-300 transition-all"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
