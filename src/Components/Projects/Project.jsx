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
          src={require(`./Images/${oProject.sProjectImgLarge}`)}
          srcSet={`${require(`./Images/${oProject.sProjectImgSmall}`)} 350w, ${require(`./Images/${oProject.sProjectImgMedium}`)} 750w`}
          sizes="(max-width: 800px) 350px, 750px"
          alt="Food Template Site"
          className="project-img"
          width="1100px"
          height="600px"
        />
      </a>
      <div className="flex-row center tech-stack">
        {aIcons.filter((oIcon) => oProject.aIcons.includes(oIcon.props.name))}
      </div>
    </div>
  );
};

export default Project;
