import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GithubStats from "./components/GithubStats";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import LeetcodeStats from "./components/LeetcodeStats";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <GithubStats />
      <LeetcodeStats />
      <CurrentlyBuilding />
      <Achievements />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;