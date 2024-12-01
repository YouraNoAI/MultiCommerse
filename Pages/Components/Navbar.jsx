import "../../css/Navbar.css";
import icon from "../../img/icon.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        setActiveLink(section.getAttribute("id"));
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="brands">
        <img src={icon} alt="icon" />
        <h1>Multi Commerse</h1>
      </div>
      <div className="nav-links">
        <a href="#Home" className={activeLink === "Home" ? "active" : ""}>Home</a>
        <a href="#Flash-Sale" className={activeLink === "Flash-Sale" ? "active" : ""}>Flash Sale</a>
        <a href="#Contact" className={activeLink === "Contact" ? "active" : ""}>Contact</a>
        <a href="#About" className={activeLink === "About" ? "active" : ""}>About</a>
        <a href="/Login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
