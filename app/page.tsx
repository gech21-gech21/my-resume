import AboutPage from "./About/page";
import Contact from "./Contact/page";
import Skill from "./Skills/page";
import Project from "./Projects/page";
import Services from "./Services/page";
import HandwritingText from "./components/handwriting/page";
export default function Home() {
  return (
    <div>
      <div>
        <HandwritingText />
        <AboutPage />
        <Skill />
        <Project />
        <Services />
        <Contact />
      </div>
    </div>
  );
}
