import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Educations/Education';
import Footer from './pages/Footer/Footer';
import Projects from './pages/Projects/Projects';
import TechStack from './pages/Techstack/TechStack';
import WorkExp from './pages/WorkExp/WorkExp';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext';
import MobileNav from './components/MobileNav/MobileNav';

function App() {
  const [theme] = useTheme()
  return (
    <>
      <div id={theme}>
        <MobileNav></MobileNav>
        <Layout></Layout>
        <div className="container">
          <About></About>
          <Education></Education>
          <TechStack></TechStack>
          <WorkExp></WorkExp>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
      <ScrollToTop smooth color="#f29f67" style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }} />
    </>
  );
}

export default App;
