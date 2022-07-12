import oInfo from "../info.json";

//Components
import Project from "./Project";

//Icons
import {
  SiFirebase,
  SiReact,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const ProjectsContainer = () => {
  const { sTitle, aProjects } = oInfo.oProjects;
  const aIcons = [
    <SiReact
      name="SiReact"
      alt="SiReact"
      className="tech-icon"
      key="SiReact"
    />,
    <SiRedux
      name="SiRedux"
      alt="SiRedux"
      className="tech-icon"
      key="SiRedux"
    />,
    <SiJavascript
      name="SiJavascript"
      alt="SiJavascript"
      className="tech-icon"
      key="SiJavascript"
    />,
    <SiHtml5
      name="SiHtml5"
      alt="SiHtml5"
      className="tech-icon"
      key="SiHtml5"
    />,
    <SiCss3 name="SiCss3" alt="SiCss3" className="tech-icon" key="SiCss3" />,
    <SiFirebase
      name="SiFirebase"
      alt="SiFirebase"
      className="tech-icon"
      key="SiFirebase"
    />,
  ];

  return (
    <section
      id="projects-section"
      className="flex-column section-card center projects-container"
    >
      <h2 className="section-heading">{sTitle}</h2>
      {aProjects.map((oProject) => (
        <Project
          oProject={oProject}
          aIcons={aIcons}
          key={oProject.sProjectTitle}
        />
      ))}
    </section>
  );
};

export default ProjectsContainer;
