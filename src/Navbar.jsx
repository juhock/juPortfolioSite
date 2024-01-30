import "./Navbar.css";
import navlogo from "./assets/logo2.png";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="NavbarItems">
        <li className="Items" id="home">
          Home
        </li>
        <li className="Items" id="about">
          About
        </li>
        <li id="nameLogo">
          <img src={navlogo} height={200} width={300} alt="Logo" />
        </li>
        <li className="Items" id="projects">
          Projects
        </li>
        <li className="Items" id="contact">
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
