import styles from "./Projects.module.css";
import projects from "../../../../data/projects.json";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1>Featured Projects</h1>
      <p className={styles["secondary_par"]}>
        Here are some of the selected projects that showcase my passion for
        front-end development.
      </p>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Projects;
