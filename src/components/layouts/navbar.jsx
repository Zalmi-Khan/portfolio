import { Link } from "react-router-dom";
import { NavLink } from "./navlink";
import { NavLinkData } from "./navlink-data";
export const Navbar = () => {
  return (
    <nav>
      <ul className="flex lg:flex-row flex-col lg:items-center items-start gap-8">
        {NavLinkData &&
          NavLinkData.map((item,index) => <NavLink key={index} to={item.to} name={item.name} />)}
      </ul>
    </nav>
  );
};
