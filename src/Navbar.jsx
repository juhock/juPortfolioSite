import "./Navbar.css";
import navlogo from "./assets/logo2.png";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbarItems">
        <li className="items" id="home">
          Home
        </li>
        <li className="items" id="about">
          About
        </li>
        <li id="nameLogo">
          <img src={navlogo} height={200} width={300} alt="Logo" />
        </li>
        <li className="items" id="projects">
          Projects
        </li>
        <li className="items" id="contact">
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
