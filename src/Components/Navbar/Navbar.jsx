// import React from "react";

let Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <a href="/index" className="navbar-brand">
        Logo
      </a>
      <div className="ml-auto">
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <a href="./index" className="nav-link  ">
              home
            </a>
          </li>

          <li className="nav-item">
            <a href="./about" className="nav-link">
              About
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="./services" className="nav-link">
              services
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
