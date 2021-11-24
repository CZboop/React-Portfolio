import Masthead from './components/Masthead';
import Intro from './components/Intro';
import ProjectsBox from './components/ProjectsBox';

function App() {
  return (
    <div>
      <Masthead />
      <Intro title="About Me" content={`Hi! I'm Chaam, a passionate and versatile developer, soon to be graduating from the BNTA full stack bootcamp.
       Confident with Python, JavaScript and Java, with experience using a range of other languages, frameworks and tools.
       I'm interested in creating full stack applications, as well as exploring the creative uses of technology.`} />
      <Intro title="Languages" content={"Python, Java, JavaScript, SQL, HTML, CSS"}/>
      <Intro title="Frameworks and Tools" content={"Spring, Django, React, Git"}/>
      <Intro title="Projects" content="Check out a few of my projects below!"/>
      <ProjectsBox/>
    </div>
  );
}

export default App;
