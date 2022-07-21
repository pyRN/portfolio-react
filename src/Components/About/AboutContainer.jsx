import { useState } from "react";
import oInfo from "../info.json";
//Images
import AboutImageLarge from "./Images/about_image_500x666.webp";
import AboutImageSmall from "./Images/about_image_310x412.webp";

//Documents
import Resume from "../Documents/Jacob_Mayeux_Resume_6_2022.pdf";

const AboutContainer = () => {
  const { sGreeting, sTitle, sContext, sMoreContext, sButtonText } =
    oInfo.oAbout;
  const [bShowMore, fnSetShowMore] = useState(false);
  return (
    <main id="about-section" className="flex-row center section-card">
      <div className="flex-column center avatar-container">
        <img
          src={AboutImageLarge}
          className="avatar-img"
          alt="Jacob Mayeux"
          srcSet={`${AboutImageSmall} 350w, ${AboutImageLarge} 500w`}
          sizes="(max-width: 500px) 350px, 500px"
        />
      </div>
      <div className="flex-column center">
        <div className="flex-column center">
          <p className="greeting-text">{sGreeting}</p>
          <h2 className="title-text">{sTitle}</h2>
        </div>
        <div className="flex-column center">
          <p>
            {sContext}
            {bShowMore ? null : (
              <button
                onClick={() => fnSetShowMore(true)}
                className="more-context-btn"
              >
                ..more
              </button>
            )}
          </p>
          {bShowMore ? (
            <p className="text more-context">
              {sMoreContext}
              <button
                onClick={() => fnSetShowMore(false)}
                className="more-context-btn"
              >
                ..less
              </button>
            </p>
          ) : null}
        </div>
        <div className="flex-row center">
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
