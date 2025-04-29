import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <article className={styles.project}>
      <div className={styles["project-details"]}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles["projects-links"]}>
          <a
            href={project.liveDemo}
            className="live-demo"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            className="github-link"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            See on GitHub
          </a>
        </div>
      </div>
      <div className={styles["project-image"]}>
        <img
          src={`/projects/${project.image}`}
          alt={project.title}
          width={500}
          height={500}
        />
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liveDemo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
  }).isRequired,
};

export default ProjectCard;
