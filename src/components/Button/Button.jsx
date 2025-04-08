import css from "./Button.module.css";

const Button = ({ children, setGetService }) => {
  return (
    <button className={css.button} onClick={() => setGetService(true)}>
      {children}
    </button>
  );
};

export default Button;
