import { Check } from "lucide-react";
import { Heading } from "../../common";
import { Button, Input, Textarea } from "../../ui";

const servicesData = [
  {
    title: "5+ Years Of Experience",
  },
  {
    title: "Professional Web Designer",
  },
  {
    title: "Mobile Apps Design",
  },
  {
    title: "Custom Design Support",
  },
];
export const ContactSection = () => {
  return (
    <div className="container py-20">
      <div className="grid grid-cols-12 gap-10 items-start">
        <div className="col-span-4">
          <Heading
            subTitle="Get In Touch"
            title="Let’s Talk For your"
            colorTitle="Next Projects"
            detail="Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis"
          />
          <div className="flex flex-col gap-6 mt-10">
            {servicesData &&
              servicesData.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="p-1 rounded-full bg-primary">
                    <Check className="text-black" size="16" />
                  </div>
                  <span className="text-text font-medium text-lg">
                    {item.title}
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div className="col-span-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10">
            <Input
              label="Full Name"
              required={true}
              placeholder="Richard D. Hammond"
              id="fullName"
              type="name"
            />
            <Input
              label="Email Address"
              required={true}
              placeholder="support@gmail.com"
              id="email"
              type="email"
            />
            <Input
              label="Phone Number"
              required={true}
              placeholder="+880 (123) 456 88"
              id="PhoneNumber"
              type="name"
            />
            <Input
              label="Subject"
              required={true}
              placeholder="I would like to discussed"
              id="subject"
              type="name"
            />
            <div className="col-span-2">
              <Textarea
                rows={4}
                label="Massage"
                required={true}
                placeholder="Write Something Here..."
                id="subject"
                type="name"
              />
            </div>
            <div>
              <Button className="py-3" name="Send Us Message" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
