import profile from "./assets/profile2.png";
import emailIcon from "./assets/emailIcon.png";
import linkedIcon from "./assets/linkedin.png";

import "./App.css";

function App() {
  return (
    <div className="info">
      <div className="aboutSection">
        <img src={profile} alt="Picture of Julia Hocken" id="profilePicture" />
        <div className="aboutText">
          <h1>About Me </h1>
          <p>
            Welcome to my portfolio page! My name's Julia, and I'm a web
            developer passionate about making a positive impact in accessibility
            through technology.
          </p>
          <p>
            I hold a BA and MA in Psychology, but decided to pursue web
            development through Fullstack Academy's Coding Bootcamp.
          </p>
          <p>
            Currently, I'm open to all job/project inquiries, so if there's
            something you'd like to see come to life, please reach out!{" "}
          </p>
        </div>
      </div>
      <div className="projectsSection">
        <h1>Projects</h1>
        <p>My projects</p>
      </div>
      <div className="contactSection">
        <h1>Contact</h1>
        <p>
          Feel free to contact me via email ju.hocken@gmail.com or connect
          through LinkedIn.
        </p>
        <div className="contactIcons">
          <ul className="links">
            <div className="contactIcons">
              <a href="mailto:ju.hocken@gmail.com">
                <img src={emailIcon} alt="Email Icon" className="miniIcons" />
                <li>Email</li>
              </a>
            </div>
            <div className="contactIcons">
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
    </div>
  );
}

export default App;
