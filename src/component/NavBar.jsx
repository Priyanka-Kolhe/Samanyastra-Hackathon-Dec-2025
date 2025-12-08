import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
        Alex Johnson
      </div>

      <ul className="nav-links">
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("experience")}>Experience</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
      </ul>

      {/* SIMPLE MOBILE MENU (3 lines) */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleMenu() {
  const links = document.querySelector(".nav-links");
  links.classList.toggle("active");
}
