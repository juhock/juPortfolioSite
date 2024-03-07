import "./Navbar.css";
import navlogo from "./assets/logo2.png";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbarItems">
        <li className="items" id="home">
          <a className="nav_link" href="#homeClick">
            {" "}
            Home{" "}
          </a>
        </li>
        <li className="items" id="about">
          <a className="nav_link" href="#aboutClick">
            About
          </a>
        </li>
        <li id="nameLogo">
          <img src={navlogo} height={200} width={300} alt="Logo" id="logo" />
        </li>
        <li className="items" id="projects">
          <a className="nav_link" href="#projectsClick">
            Projects
          </a>
        </li>
        <li className="items" id="contact">
          <a className="nav_link" href="#contactClick">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
