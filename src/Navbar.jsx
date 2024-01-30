import "./Navbar.css";
import logo1 from "./assets/logo1.png";

function Navbar() {
  return (
    <>
      <ul className="NavbarItems">
        <p>Home</p>
        <p>About</p>
        <img src={logo1} height={75} width={150}></img>
        <p>Projects</p>
        <p>Contact</p>
      </ul>
    </>
  );
}

export default Navbar;
