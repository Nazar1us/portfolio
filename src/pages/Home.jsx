import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myPhoto from "../../public/myPhotos/myPhoto.jpeg";
import styles from "./Home.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="container">
      <div className={styles["personal-info"]}>
        <h1 className={styles.initial}>Hi, i am Nazariy Lahoida.</h1>
        <p className={styles.moto}>
          A Sydney based front-end developer passionate about building
          accessible and user friendly websites.
        </p>
        <img
          src={myPhoto}
          width={250}
          height={250}
          alt="My photo"
          className={styles.image}
        />
      </div>
      <div className={styles["personal-links"]}>
        <a
          href="/public/myPhotos/myPhoto.jpeg"
          download={myPhoto}
          className={styles.myResume}
        >
          Download <FontAwesomeIcon icon={faDownload} />
        </a>
        <a
          href="https://www.linkedin.com/in/nazariy-lahoida-a417911b8/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a
          href="https://github.com/Nazar1us"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
      </div>
    </div>
  );
};

export default Home;
