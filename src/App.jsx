import profile from "./assets/profile2.png";
import emailIcon from "./assets/emailIcon.png";
import linkedIcon from "./assets/linkedin.png";
import helpHarborIcon from "./assets/HHicon.png";

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
        <h1 className="titles">Recent Projects</h1>
        <div className="allIcons">
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
        <p>
          You can reach me via email ju.hocken@gmail.com, connect with me
          through LinkedIn, or fill out the form below to send me a message.
        </p>
        <div>
          <ul className="links">
            <div className="allIcons">
              <a href="mailto:ju.hocken@gmail.com">
                <img src={emailIcon} alt="Email Icon" className="miniIcons" />
                <li>Email</li>
              </a>
            </div>
            <div className="allIcons">
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

        <div className="contact-container">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-left"
          ></form>
          <input
            type="hidden"
            name="access_key"
            value="5e04e505-ddc6-4f57-8893-16f767395990"
          ></input>
          <div className="contact-left-title">
            <h2>Get in touch</h2>
            <hr></hr>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-inputs"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-inputs"
              required
            ></input>
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-inputs"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </div>
          <div className="contact-right"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
