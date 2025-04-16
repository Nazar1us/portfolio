import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <div className="container">
      <section className={styles.projects}>
        <h1>Featured Projects</h1>
        <p>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>

        <article className={styles.project}>
          <div className={styles["project-image"]}>
            <img src="" alt="" />
          </div>

          <div className={styles["project-details"]}>
            <h3>Promotional landing page for our favorite show</h3>
            <p>
              Teamed up with a designer to breathe life into a promotional
              webpage for our beloved show, Adventure Time. Delivered a fully
              responsive design with dynamic content capabilities, seamlessly
              integrating a newsletter feature to keep fans updated with the
              latest adventures.
            </p>

            <div className={styles["project-info"]}>
              <div>
                <strong>Year</strong>
                <span>2023</span>
              </div>
              <div>
                <strong>Role</strong>
                <span>Front-end Developer</span>
              </div>
            </div>
            <div className={styles["projects-links"]}>
              <a href="#" className="live-demo">
                Live Demo
              </a>
              <a href="#" className="github-link">
                See on GitHub
              </a>
            </div>
          </div>
        </article>

        <article></article>
        <article></article>
      </section>
    </div>
  );
};

export default Projects;
