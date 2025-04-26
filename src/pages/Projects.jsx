import styles from "./Projects.module.css";
import Ecommerce from "../../public/projects/ecommerce.png";
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
            <img src={Ecommerce} alt="" width={500} height={500} />
          </div>

          <div className={styles["project-details"]}>
            <h3>ProStore E-Commerce website</h3>
            <p>
              Teamed up with a designer to breathe life into a promotional
              webpage for our beloved show, Adventure Time. Delivered a fully
              responsive design with dynamic content capabilities, seamlessly
              integrating a newsletter feature to keep fans updated with the
              latest adventures.
            </p>

            <div className={styles["project-info"]}></div>
            <div className={styles["projects-links"]}>
              <a
                href="https://shop-store-nine.vercel.app/"
                className="live-demo"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Nazar1us/shop-store"
                className="github-link"
                target="_blank"
                referrerPolicy="no-referrer"
              >
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
