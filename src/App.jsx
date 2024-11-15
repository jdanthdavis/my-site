import { useEffect, useState, useRef } from 'react';
import Email from './email/email';
import Mapper from './mapper/mapper';
import { skills, projects } from './data/Index';
import {
  me,
  githubIcon,
  linkedInIcon,
  resumeIcon,
  resume,
} from './assets/Index';
import './App.scss';

function App() {
  const [slide, setSlide] = useState(false);
  const slideInDivRef = useRef(null);

  const checkIfInView = () => {
    const slideInDiv = slideInDivRef.current;
    if (!slideInDiv) return;

    const rect = slideInDiv.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight * 0.7 && rect.bottom >= windowHeight * 0.7) {
      setSlide(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkIfInView);

    checkIfInView();

    return () => {
      window.removeEventListener('scroll', checkIfInView);
    };
  }, []);

  return (
    <>
      <section id="home">
        <div>
          <p className="typed" />
          <a className="learn" href="#about">
            Learn more about me ➡
          </a>
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
                I&apos;m a <span className="highlights">Software Engineer</span>{' '}
                with a passion for building intuitive, responsive applications
                that elevate user experience. I love optimizing interfaces,
                solving complex problems, and delivering polished, impactful
                solutions.&#32;
                <span className="highlights">
                  Let’s bring something exceptional to life!
                </span>
              </p>
            </div>
            <div className="gallery-container skills">
              <Mapper data={skills} type="skillsData" />
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div
          ref={slideInDivRef}
          className={`projects-container ${slide ? 'slide' : ''}`}
        >
          <h1>PROJECTS</h1>
          <span className="underline" />
          <div className="gallery-container">
            <Mapper data={projects} type="projectData" />
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
        <div className="arrow-container">
          <a className="return-arrow" id="return-arrow" href="#home">
            ⬆
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
