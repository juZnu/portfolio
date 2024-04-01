import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="Header">
      <div className="HeaderContent">
        <h1>Jishnu Rahul K</h1>
        <p>Full Stack Developer</p>
        <nav>
          <ul>
            <li><button onClick={() => scrollToSection("about")}>About</button></li>
            <li><button onClick={() => scrollToSection("experience")}>Experience</button></li>
            <li><button onClick={() => scrollToSection("projects")}>Projects</button></li>
            <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
