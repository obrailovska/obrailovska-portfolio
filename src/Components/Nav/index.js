import React from "react";

function Nav() {
  return (
    <header>
      <h2>
        <a href="/">Olha Brailovska</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-1">
            <a href="#about">About me</a>
          </li>
          <li className="mx-1">
            <a href="#projects">My Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
