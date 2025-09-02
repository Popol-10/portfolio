

import { useState } from "react";
import { Link } from "react-scroll";

import "../../assets/css/portfolio/HeaderP/headerP.scss";

const Header = () => {
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
              <Link to="section1" smooth={true} duration={500} onClick={handleLinkClick}>
                A propos
              </Link>
            </li>
            <li>
              <Link to="Container" smooth={true} duration={550} onClick={handleLinkClick}>
               Mes Services
              </Link>
            </li>
            <li>
              <Link to="section2" smooth={true} duration={600} onClick={handleLinkClick}>Mes Compétences</Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={700} onClick={handleLinkClick}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="Contact" smooth={true} duration={1000} onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
