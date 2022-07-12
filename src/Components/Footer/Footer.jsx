import { useEffect, useState } from "react";

//Icons
import { HiArrowCircleUp } from "react-icons/hi";

const Footer = () => {
  const [bHideNavbar, fnSetHideNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", fnHandleScroll);
    return () => window.removeEventListener("scroll", fnHandleScroll);
  });

  const fnHandleScroll = (event) => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      let windowWidth = window.innerWidth;
      if (windowHeight < 150 && windowWidth > 750) {
        if (bHideNavbar === false) fnSetHideNavbar(true);
      } else if (windowHeight > 150 && windowWidth > 750) {
        fnSetHideNavbar(false);
      } else {
        windowWidth < 750 ? fnSetHideNavbar(false) : fnSetHideNavbar(true);
      }
    }
  };

  return (
    <div
      className={`flex-row footer ${bHideNavbar ? "hidden" : ""}`}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <HiArrowCircleUp
        alt="IoArrowUpCircle"
        width="80px"
        height="80px"
        className="footer-icon"
      />
    </div>
  );
};

export default Footer;
