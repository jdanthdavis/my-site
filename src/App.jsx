import './App.scss';
import {
  me,
  reactIcon,
  jsIcon,
  nodeIcon,
  htmlIcon,
  mongoIcon,
  reduxIcon,
  sassIcon,
} from './assets/Index';
import Projects from './projects/projects';

function App() {
  return (
    <>
      <section id="home">
        <div>
          <p className="summary">
            Hello, I'm <span className="name">Justin Davis</span>. I'm a
            full-stack developer.
          </p>
          <a href="#about">Learn more about me ➡</a>
        </div>
      </section>
      <section id="about">
        <div className="about-container">
          <h1>ABOUT</h1>
          <span className="underline" />
          <div className="me-container">
            <div className="me">
              <img src={me} />
              <p className="who">Who am I?</p>
              <p>
                I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have
                serious passion for UI effects, animations and creating
                intuitive, dynamic user experiences. Let's make something
                special.
              </p>
            </div>
            <div className="skills">
              <img src={reactIcon} />
              <img src={nodeIcon} />
              <img src={jsIcon} />
              <img src={htmlIcon} />
              <img src={mongoIcon} />
              <img src={reduxIcon} />
              <img src={sassIcon} />
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="projects-container">
          <h1>PROJECTS</h1>
          <span className="underline" />
          <div className="gallery-container">
            <Projects />
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact-container">
          <h1>CONTACT</h1>
          <span className="underline" />
          <span className="contact-msg">
            Interested in working together or have a question?
          </span>
        </div>
      </section>
    </>
  );
}

export default App;
