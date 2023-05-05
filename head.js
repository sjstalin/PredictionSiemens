import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="title-image">
        <img src="https://i.ibb.co/cQm3Ghm/logo.png" alt="Image Description" />
      </div>
    </header>
  );
}

export default Navbar;
