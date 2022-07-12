//Components
import AboutContainer from "./Components/About/AboutContainer";
import ContactContainer from "./Components/Contact/ContactContainer";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ProjectsContainer from "./Components/Projects/ProjectsContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutContainer />
      <ProjectsContainer />
      <ContactContainer />
      <Footer />
    </div>
  );
};

export default App;
