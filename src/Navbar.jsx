import "./Navbar.css";
import navlogo from "./assets/logo2.png";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="NavbarItems">
        <li className="Items">Home</li>
        <li className="Items">About</li>
        <li id="nameLogo">
          <img src={navlogo} height={200} width={300} alt="Logo" />
        </li>
        <li className="Items">Projects</li>
        <li className="Items">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
