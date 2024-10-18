import {
  MapPin,
  Mail,
  Phone,
  Github,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Logo } from "./logo";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-dark py-20">
      <div className="container grid grid-cols-12 gap-10">
        <div className="col-span-4">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              libero labore corporis eveniet tempora quas odit ad perspiciatis
              maiores quis!
            </p>
            <div className="flex items-center gap-6 text-text">
              <Link to="#" className="hover:text-primary duration-300">
                <Facebook />
              </Link>
              <Link to="#" className="hover:text-primary duration-300">
                <Twitter />
              </Link>
              <Link to="#" className="hover:text-primary duration-300">
                <Instagram />
              </Link>
              <Link to="#" className="hover:text-primary duration-300">
                <Github />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <h6 className="text-lg font-medium">Quick Link</h6>
          <ul className="list-none text-text flex flex-col gap-2 mt-4">
            <li className="hover:text-primary duration-300 cursor-pointer">
              About
            </li>
            <li className="hover:text-primary duration-300 cursor-pointer">
              Services
            </li>
            <li className="hover:text-primary duration-300 cursor-pointer">
              Portfolio
            </li>
            <li className="hover:text-primary duration-300 cursor-pointer">
              Blog
            </li>
            <li className="hover:text-primary duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="col-span-5">
          <h6 className="text-lg font-medium">Contact With Us</h6>
          <ul className="list-none text-text flex flex-col gap-4 mt-4 text-lg">
            <li className="hover:text-primary duration-300 cursor-pointer flex items-center gap-4">
              <MapPin className="text-primary" size={24} />
              55 Main Street, 2nd block, New York City
            </li>
            <li className="hover:text-primary duration-300 cursor-pointer flex items-center gap-4">
              <Mail className="text-primary" size={24} />
              support@mail.com
            </li>
            <li className="text-white font-medium hover:text-primary duration-300 cursor-pointer flex items-center gap-4">
              <Phone className="text-primary" size={24} />
              +880 (123) 456 88
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
