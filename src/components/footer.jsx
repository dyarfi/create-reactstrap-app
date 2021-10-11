import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// const links = [{ href: '/documentation', label: 'Documentation' }].map(
//   link => ({
//     ...link,
//     key: `Footer-link-${link.href}-${link.label}`,
//   }),
// );

function Footer(props) {
  return (
    <footer className="footer-main">
      <ul>
        <li>{/* <a href="/">
          <a>Home</a>
        </a> */}</li>
        {/* {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))} */}
      </ul>
    </footer>
  );
}

export default Footer;
