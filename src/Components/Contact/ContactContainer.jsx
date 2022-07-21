import oInfo from "../info.json";

//Icons
import { HiPhone } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

//Images
import ContactImageLarge from "./Images/contact_image_500x666.webp";
import ContactImageSmall from "./Images/contact_image_310x412.webp";

const ContactContainer = () => {
  const { sTitle } = oInfo.oContact;
  return (
    <section id="contact-section" className="flex-column center section-card">
      <h2 className="section-heading">{sTitle}</h2>
      <div className="flex-row">
        <div className="flex-column center avatar-container img-container">
          <img
            src={ContactImageLarge}
            srcSet={`${ContactImageSmall} 350w, ${ContactImageLarge} 500w`}
            className="avatar-img contact-img"
            alt="Contact Jacob"
            height="700px"
            width="350px"
          />
          <div className="flex-column flex-wrap svg-container">
            <div className="flex-row center">
              <a
                href="mailto:jacobmayeux@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <MdOutlineEmail alt="Email" className="contact-svg" />
              </a>
              <a
                href="tel:+13378528647"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <HiPhone alt="Phone" className="contact-svg" />
              </a>
            </div>
            <div className="flex-row center">
              <a
                href="https://www.linkedin.com/in/jacobmayeux/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <SiLinkedin alt="LinkedIn" className="contact-svg" />
              </a>
              <a
                href="https://www.github.com/pyRN"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <SiGithub alt="Github" className="contact-svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
