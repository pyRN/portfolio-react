import { useState } from "react";
import oInfo from "../info.json";
//Multimedia
import AboutImage from "./Images/AboutImage.jpg";
import Resume from "../../Multimedia/Documents/Jacob_Mayeux_Resume_6_2022.pdf";

const AboutContainer = () => {
  const { sGreeting, sTitle, sContext, sMoreContext, sButtonText } =
    oInfo.oAbout;
  const [bShowMore, fnSetShowMore] = useState(false);
  return (
    <main id="about-section" className="flex-row center section-card">
      <div className="flex-column center">
        <img src={AboutImage} className="avatar-img" alt="Jacob Mayeux" />
      </div>
      <div className="flex-column center">
        <div className="flex-column center">
          <p className="text">{sGreeting}</p>
          <h2 className="title-text">{sTitle}</h2>
        </div>
        <div className="flex-column center">
          <p className="text">
            {sContext}
            {bShowMore ? null : (
              <a
                href="#"
                onClick={() => fnSetShowMore(true)}
                className="more-context-link"
              >
                ..more
              </a>
            )}
          </p>
          {bShowMore ? (
            <p className="text more-context">
              {sMoreContext}
              <a
                href="#"
                onClick={() => fnSetShowMore(false)}
                className="more-context-link"
              >
                ..less
              </a>
            </p>
          ) : null}
        </div>
        <div class="flex-row center">
          <button
            className="btn"
            onClick={() => {
              window.open(Resume);
            }}
          >
            {sButtonText}
          </button>
        </div>
      </div>
    </main>
  );
};

export default AboutContainer;
