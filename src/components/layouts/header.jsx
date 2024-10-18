import { Navbar } from "./navbar";
import { Button } from "../ui";
import { Logo } from "./logo";
import { Drawer } from "./drawer";

export const Header = () => {
  return (
    <div className="header bg-light shadow-md py-6">
      <div className="container flex justify-between items-center">
        <Logo />
        <div className="lg:block hidden">
          <Navbar />
        </div>
        <div className="lg:block hidden">
          <Button name="Get A Quote" />
        </div>
        <Drawer />
      </div>
    </div>
  );
};
