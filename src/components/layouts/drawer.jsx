import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";
import { Navbar } from "./navbar";

export const Drawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className="lg:hidden block">
      <button onClick={toggleDrawer} className="transition-all duration-300">
        <Menu size={24} />
      </button>
      {openDrawer && (
        <div
          className={`bg-black bg-opacity-90 fixed top-0 left-0 w-full h-screen z-10 overflow-hidden transition-opacity duration-700 ${
            openDrawer ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`relative top-0 left-0 h-screen lg:w-2/5 sm:w-1/2 w-[90%] bg-dark border-r border-text/50 transition-transform duration-1000 p-10 ${
              openDrawer ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button onClick={toggleDrawer} className="absolute top-4 right-4">
              <X size={26} className="text-white" />
            </button>
            <div className="flex flex-col gap-10">
              <Logo />
              <Navbar />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
