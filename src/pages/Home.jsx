import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myPhoto from "../../public/myPhotos/myPhoto.jpeg";
import styles from "./Home.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className="container">
        <section className={styles["personal-info"]}>
          <div className={styles["hero-info"]}>
            <h1 className={styles.initial}>
              HI, I AM <br /> <span>NAZARIY LAHOIDA.</span>
            </h1>
            <p className={styles.moto}>
              Front-end developer passionate about building accessible and user
              friendly websites.
            </p>
            <div className={styles["personal-links"]}>
              <a
                href="/public/myPhotos/myPhoto.jpeg"
                download={myPhoto}
                className={styles.myResume}
              >
                Download <FontAwesomeIcon icon={faDownload} size="1x" />
              </a>
              <a
                href="https://www.linkedin.com/in/nazariy-lahoida-a417911b8/"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  className={styles.faLinkedin}
                  width={50}
                  height={50}
                />
              </a>
              <a
                href="https://github.com/Nazar1us"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  className={styles.faGithub}
                />
              </a>
            </div>
          </div>
          <div className={styles["hero-image"]}>
            <img
              src={myPhoto}
              width={350}
              height={350}
              alt="My photo"
              className={styles.image}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
