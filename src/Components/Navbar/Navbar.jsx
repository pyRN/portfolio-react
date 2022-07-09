import { useRef } from "react";
import oInfo from "../info.json";
import "./Styles/Navbar.css";

//Multimedia
import Close from "./Icons/close.svg";
import FleurDeLis from "./Icons/fleurdelis.svg";
import Hamburger from "./Icons/hamburger.svg";
import Resume from "../../Multimedia/Documents/Jacob_Mayeux_Resume_6_2022.pdf";

const Navbar = () => {
  const { aNavbarLinks } = oInfo.oNavbar;
  const oHamburgerMenu = useRef(null);
  return (
    <nav className="flex-row navbar" id="navbar">
      <img
        className="logo"
        src={FleurDeLis}
        alt="Logo SVG"
        width="50px"
        height="50px"
      />

      <div className="flex-row nav-links">
        {aNavbarLinks.map((sNavLink) => {
          if (sNavLink === "Resume") {
            return (
              <a
                href={Resume}
                className="nav-link"
                key={sNavLink}
                target="_blank"
              >
                {sNavLink}
              </a>
            );
          }
          return (
            <a
              href={`#${sNavLink.toLowerCase() + "-section"}`}
              className="nav-link"
              key={sNavLink}
            >
              {sNavLink}
            </a>
          );
        })}
      </div>

      <div className="hamburger-menu close" ref={oHamburgerMenu}>
        <img
          className="close-icon close"
          src={Close}
          alt="=Close SVG"
          width="50px"
          height="50px"
          onClick={() => {
            oHamburgerMenu.current.classList.toggle("open");
          }}
        />
        <img
          className="hamburger-icon close"
          src={Hamburger}
          alt="=Close SVG"
          width="50px"
          height="50px"
          onClick={() => {
            oHamburgerMenu.current.classList.toggle("open");
          }}
        />
        <div className="mobile-menu">
          <div className="flex-column mobile-nav-links close">
            {aNavbarLinks.map((sNavLink) => {
              return (
                <a
                  href={`#${sNavLink.toLowerCase() + "-section"}`}
                  className="mobile-nav-link"
                  key={sNavLink}
                  onClick={() => {
                    oHamburgerMenu.current.classList.toggle("open");
                  }}
                >
                  {sNavLink}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
