import React from "react";
import { NavLink } from "react-router-dom";

function NavItems() {
  return (
    <div className="text-white cursor-pointer">
      <NavLink exact to={`/`}>
        About
      </NavLink>
      <NavLink exact to={`/experience`}>
        Experience
      </NavLink>
      <NavLink exact to={`/skills`}>
        Skills
      </NavLink>
      <NavLink exact to={`/contact`}>
        Contact
      </NavLink>
    </div>
  );
}

export default NavItems;
