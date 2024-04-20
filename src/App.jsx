import profile from "./assets/profile2.png";
import emailIcon from "./assets/emailIcon.png";
import linkedIcon from "./assets/linkedin.png";
import helpHarborIcon from "./assets/HHicon.png";
import guessingGameIcon from "./assets/GG2.png";

import "./App.css";

import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="main">
      <div id="aboutMe"></div>
      <div className="aboutSection">
        <img src={profile} alt="Picture of Julia Hocken" id="profilePicture" />
        <div className="aboutTextAll">
          <h1>About Me </h1>
          <p className="aboutTextlil">
            I'm a fullstack web developer with a BA & MA in Psychology,
            passionate about making a positive impact in accessibility through
            technology.
          </p>
          <p className="aboutTextlil">
            If there's something you'd like to see come to life, please reach
            out!
          </p>
        </div>
      </div>
      <div className="projectsSection" id="myProjects">
        <h1 id="projectTitle">Recent Projects</h1>
        <div className="icons">
          <ul className="links">
            <li>
              <div className="icons">
                <a href="https://helpharbor.onrender.com/">
                  <img
                    src={helpHarborIcon}
                    alt="Help Harbor Icon"
                    className="iconPic"
                  />
                  <p className="iconName">Help Harbor</p>
                </a>
              </div>
            </li>
            <li>
              <div className="icons">
                <a href="https://juliasguessinggame.netlify.app">
                  <img
                    src={guessingGameIcon}
                    alt="Guessing Game Icon"
                    className="iconPic"
                    id="test"
                  />
                  <p>Julia's Guessing Game</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="contactSection" id="contactInfo">
        <h1 id="contactTitle">Contact Me</h1>
        <div>
          <ul className="links">
            <li>
              <div className="icons">
                <a href="mailto:ju.hocken@gmail.com">
                  <img src={emailIcon} alt="Email Icon" className="iconPic" />
                </a>
                <p className="iconName">Email</p>
              </div>
            </li>
            <li>
              <div className="icons">
                <a href="https://www.linkedin.com/in/julia-hocken/">
                  <img
                    src={linkedIcon}
                    alt="LinkedIn Icon"
                    className="iconPic"
                  />
                </a>
                <p className="iconName">LinkedIn</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="messageMe">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
