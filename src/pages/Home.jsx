import ConnectForm from "../components/Portfolio/ContactForm/ConnectForm";
import HomePage from "../components/Portfolio/Home/HomePage";
import Projects from "../components/Portfolio/Projects/Projects";

const Home = () => {
  return (
    <div className="container">
      <HomePage />
      <Projects />
      <ConnectForm />
    </div>
  );
};

export default Home;
