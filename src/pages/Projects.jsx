import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Projects</h1>

      <div className="row">
        {projectsData.map((project) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={project.id}>
            <ProjectCard
              project={project}
              onClick={setSelected}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="project-modal" onClick={() => setSelected(null)}>
          <div className="modal-content">
            <img src={selected.image} alt={selected.title} />
            <div className="modal-details">
              <h4>{selected.title}</h4>
              <p><strong>Client:</strong> {selected.client}</p>
              <p><strong>Type:</strong> {selected.type}</p>
              <p><strong>Location:</strong> {selected.location}</p>
              <p><strong>Scope:</strong> {selected.scope}</p>
              <p><strong>Status:</strong> {selected.status}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
