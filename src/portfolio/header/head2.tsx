

import { useState } from "react";
// import { Link } from "react-scroll";

import "../../../public/assets/css/portfolio/HeaderP/headerP.scss";
import { Link } from "react-router-dom";

const Header2 = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false); // ferme le menu après clic
  };

  return (
    <>
      <div id="header">
        <nav>
          {/* --- Bouton Hamburger --- */}
          <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* --- Menu --- */}
          <ul className={open ? "active" : ""}>
            <li>
              <Link to={"/"} onClick={handleLinkClick}>
                A propos
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={handleLinkClick}>
               Mes Services
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={handleLinkClick}>Mes Compétences</Link>
            </li>
            <li>
              <Link to={"/"} onClick={handleLinkClick}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header2;
