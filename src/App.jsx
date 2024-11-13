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
  githubIcon,
  linkedInIcon,
  resumeIcon,
  resume,
} from './assets/Index';
import Projects from './projects/projects';
import Email from './email/email';

let cursor = true;
const speed = 450;
setInterval(() => {
  if (cursor) {
    document.getElementById('cursor').style.opacity = 0;
    document.getElementById('return-arrow').style.opacity = 0;
    cursor = false;
  } else {
    document.getElementById('cursor').style.opacity = 1;
    document.getElementById('return-arrow').style.opacity = 1;
    cursor = true;
  }
}, speed);

function App() {
  return (
    <>
      <section id="home">
        <div>
          <p className="summary">
            Hello, I'm <span className="name">Justin Davis</span>. I'm a
            software engineer <span id="cursor">|</span>
          </p>
          <a href="#about">Learn more about me ➡</a>
        </div>
      </section>
      <section id="about">
        <div className="about-container">
          <h1>ABOUT</h1>
          <span className="underline" />
          <div className="socials-container">
            <img
              src={linkedInIcon}
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/jd-anthdavis/',
                  '_blank'
                )
              }
            />
            <img
              src={resumeIcon}
              onClick={() => window.open(resume, '_blank')}
            />
            <img
              src={githubIcon}
              onClick={() =>
                window.open('https://github.com/jdanthdavis', '_blank')
              }
            />
          </div>
          <div className="me-container">
            <div className="me">
              <img src={me} />
              <p className="who">Who am I?</p>
              <p>
                I'm a <span className="name">Software Engineer</span> with a
                passion for building intuitive, responsive applications that
                elevate user experience. I love optimizing interfaces, solving
                complex problems, and delivering polished, impactful
                solutions.&#32;
                <span className="name">
                  Let’s bring something exceptional to life!
                </span>
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
          <Email />
        </div>
        <a className="return-arrow" id="return-arrow" href="#home">
          ⬆
        </a>
      </section>
    </>
  );
}

export default App;
