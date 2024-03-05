import profile from "./assets/profile2.png";
import emailIcon from "./assets/emailIcon.png";
import linkedIcon from "./assets/linkedin.png";
import helpHarborIcon from "./assets/HHicon.png";

import "./App.css";

import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="main">
      <div className="aboutSection">
        <img src={profile} alt="Picture of Julia Hocken" id="profilePicture" />
        <div className="aboutTextAll">
          <h1>About Me </h1>
          <p className="aboutTextlil">
            I'm a web developer with a BA & MA in Psychology, passionate about
            making a positive impact in accessibility through technology.
          </p>
          <p className="aboutTextlil">
            If there's something you'd like to see come to life, please reach
            out!
          </p>
        </div>
      </div>
      <div className="projectsSection">
        <h1 id="projectTitle">Recent Projects</h1>
        <div className="icons">
          <a href="https://helpharbor.onrender.com/">
            <img
              src={helpHarborIcon}
              alt="Help Harbor Icon"
              className="miniIcons"
            />
            <li>Help Harbor</li>
          </a>
        </div>
      </div>
      <div className="contactSection">
        <h1 id="contactTitle">Contact Me</h1>
        <div>
          <ul className="links">
            <div className="icons">
              <a href="mailto:ju.hocken@gmail.com">
                <img src={emailIcon} alt="Email Icon" className="miniIcons" />
                <li>Email</li>
              </a>
            </div>
            <div className="icons">
              <a href="https://www.linkedin.com/in/julia-hocken/">
                <img
                  src={linkedIcon}
                  alt="LinkedIn Icon"
                  className="miniIcons"
                />
                <li>LinkedIn</li>
              </a>
            </div>
          </ul>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default App;
