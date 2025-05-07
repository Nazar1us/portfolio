import ContactForm from "../components/Portfolio/ContactForm/ContactForm";
import HomePage from "../components/Portfolio/Home/HomePage";
import Projects from "../components/Portfolio/Projects/Projects";

const Home = () => {
  return (
    <div className="container">
      <HomePage />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Home;
