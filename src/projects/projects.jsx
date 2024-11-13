import { projectData } from './projectData';
import './projects.scss';

const Projects = () => {
  return projectData.map((project, key) => {
    return (
      <div className="project-container" key={key}>
        <img src={project.img} />
        <div className="project-info">
          <span>
            {project.projectTitle}
            <div className="underline-container">
              <span className="underline" />
            </div>

            <span className="tech">{project.technologyUsed}</span>
          </span>
          <div className="btn-container">
            <button onClick={() => window.open(project.gitHub)}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default Projects;
