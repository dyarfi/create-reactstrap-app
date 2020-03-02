import React from "react";
// import Link from "next/link";
import logo from "../logo.svg";

// const links = [
//   { href: "/", label: "Logo" },
//   { href: "/dashboard", label: "Dashboard" }
// ].map(link => ({
//   ...link,
//   key: `nav-link-${link.href}-${link.label}`
// }));

const Nav = props => {
  // const { children } = props;
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} alt="logo" className="w-25" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
