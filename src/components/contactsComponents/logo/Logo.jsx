import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <h1>My Portfolio</h1>
      </Link>
    </div>
  );
};

export default Logo;
