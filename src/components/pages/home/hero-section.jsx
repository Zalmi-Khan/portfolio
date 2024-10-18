import { MyPhoto, ProgressShape } from "../../../assets/images";
import { Button } from "../../ui";

export const HeroSection = () => {
  return (
    <div className="container py-20">
      <div className="grid grid-cols-12 xl:gap-10 gap-6 items-center">
        <div className="lg:col-span-4 md:col-span-5 col-span-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-4xl font-semibold flex flex-col gap-2">
              <span className="font-medium text-text">Hello, I'm</span>
              <span className="text-primary font-bold">Huzaifa Ahmed Khan</span>
              Web Developer
            </h2>
            <p className="text-base text-text font-normal">
              We denounce with righteous indignation dislike demoralized by the
              charms of pleasure
            </p>
            <div className="flex items-center gap-6">
              <Button name="Hire Me" variant="primary" />
              <Button name="Download resume" variant="secondary" />
            </div>
          </div>
        </div>
        <div className="md:col-span-5 sm:col-span-6 col-span-12">
          <div className="relative flex justify-center items-center rounded-full overflow-hidden">
            <div className="absolute top-32 left-5 -z-10 bg-dark rounded-full size-[350px]"></div>
            <img
              src={ProgressShape}
              className="absolute -bottom-1 left-0 -z-10 "
            />
            <img src={MyPhoto} className="w-[450px]" />
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-2 sm:col-span-6 col-span-12">
          <div className="bg-black p-6 rounded-lg flex flex-col gap-4">
            <div className="flex flex-col gap-2 pb-4 border-b border-text">
              <span className="text-primary font-semibold text-4xl">13+</span>
              <p className="text-text">Years Of Experience</p>
            </div>
            <div className="flex flex-col gap-2 pb-4 border-b border-text">
              <span className="text-primary font-semibold text-4xl">8K+</span>
              <p className="text-text">Project Complete</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-primary font-semibold text-4xl">99%</span>
              <p className="text-text">Client Satisfactions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
