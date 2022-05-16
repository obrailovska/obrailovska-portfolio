import React from "react";
import linkedIcon from "../../Assests/icons/linkedIn.svg";
import gitIcon from "../../Assests/icons/GitHub.png";

function Footer() {
  return (
    <div className="flex-row">
     
      <ul id="footerUl">
        <li>
          <a href="https://www.linkedin.com/in/olha-brailovska-24a868226/">
            <img id="icon1" src={linkedIcon} alt="LinkedIn Icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/obrailovska">
            <img id="icon2" src={gitIcon} alt="GitHub Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
