import "./Navbar.css";
import navlogo from "./assets/logo2.png";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbarList">
        <li className="items" id="home">
          <a className="nav_link" href="#aboutMe">
            About
          </a>
        </li>
        <li className="items" id="about">
          <a className="nav_link" href="#myProjects">
            Projects
          </a>
        </li>
        <li id="nameLogo">
          <img src={navlogo} height={200} width={300} alt="Logo" id="logo" />
        </li>
        <li className="items" id="projects">
          <a className="nav_link" href="#contactInfo">
            Contact
          </a>
        </li>
        <li className="items" id="contact">
          <a className="nav_link" href="#messageMe">
            Message
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
