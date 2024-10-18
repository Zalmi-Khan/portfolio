import { Link } from "react-router-dom";

export const NavLink = (navLink) => {
  return (
    <Link to={navLink.to}>
      <li className="text-white hover:text-primary font-medium 2xl:text-lg text-base">{navLink.name}</li>
    </Link>
  );
};
