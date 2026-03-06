const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <img src={project.image} alt={project.title} />

      <div className="project-overlay">
        <h5>{project.title}</h5>
        <p>{project.type}</p>
      </div>
    </div>
  );
};

export default ProjectCard;