import { useRef, useEffect, useState } from "react";
import oInfo from "../info.json";
import "./Styles/Navbar.css";

//Icons
import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";
import FleurDeLis from "./Icons/fleurdelis.svg";

//Documents
import Resume from "../Documents/Jacob_Mayeux_Resume_6_2022.pdf";

const Navbar = () => {
  const { aNavbarLinks } = oInfo.oNavbar;
  const oHamburgerMenu = useRef(null);
  const [bHideNavbar, fnSetHideNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", fnHandleScroll);
    return () => window.removeEventListener("scroll", fnHandleScroll);
  });

  const fnHandleScroll = (event) => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      let windowWidth = window.innerWidth;
      if (windowHeight > 150 && windowWidth > 750) {
        if (bHideNavbar === false) fnSetHideNavbar(true);
      } else if (windowHeight < 150 && windowWidth > 750) {
        fnSetHideNavbar(false);
      } else {
        fnSetHideNavbar(false);
      }
    }
  };

  return (
    <nav className={`flex-row navbar ${bHideNavbar ? "hidden" : ""}`}>
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
                rel="noreferrer"
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
        <IoIosCloseCircle
          className="close-icon close"
          alt="=IoIosCloseCircle"
          width="50px"
          height="50px"
          onClick={() => {
            oHamburgerMenu.current.classList.toggle("open");
          }}
        />
        <IoIosMenu
          className="hamburger-icon close"
          alt="IoIosMenu"
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
