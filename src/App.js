//Components
import AboutContainer from "./Components/AboutContainer";
import ContactContainer from "./Components/ContactContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProjectsContainer from "./Components/Projects/ProjectsContainer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AboutContainer />
      <ProjectsContainer />
      <ContactContainer />
    </div>
  );
};

export default App;
