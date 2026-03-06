import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

const HomeProjects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.slice(0, 4)); // show only 4
  }, []);

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">Our Projects</h2>

      <div className="row">
        {projects.map((project) => (
          <div className="col-md-3 mb-4" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <button
        className="btn btn-warning mt-3"
        onClick={() => navigate("/projects")}
      >
        View More
      </button>
    </div>
  );
};

export default HomeProjects;