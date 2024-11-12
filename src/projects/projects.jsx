import { projectData } from './projectData';
import './projects.scss';

const Projects = () => {
  return projectData.map((project, key) => {
    return (
      <div className="" key={key}>
        <img src={project.img} />
      </div>
    );
  });
};

export default Projects;
