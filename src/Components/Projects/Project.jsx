const Project = ({ oProject, aIcons }) => {
  return (
    <div
      className="flex-column center project-card"
      key={oProject.sProjectTitle}
    >
      <a
        href={oProject.sUrl}
        target="_blank"
        rel="noreferrer"
        className="project-url"
      >
        <h2 className="project-header">{oProject.sProjectTitle}</h2>
      </a>
      <p className="project-text">{oProject.sDescription}</p>
      <a href={oProject.sUrl} target="_blank" rel="noreferrer">
        <img
          src={require(`./Images/${oProject.sProjectImg}`)}
          alt="Food Template Site"
          className="project-img"
        />
      </a>
      <div className="flex-row center tech-stack">
        {aIcons.filter((oIcon) => oProject.aIcons.includes(oIcon.props.name))}
      </div>
    </div>
  );
};

export default Project;
