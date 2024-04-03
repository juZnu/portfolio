import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = ({ refs }) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 bg-gray-600 text-white p-4 flex justify-between">
      <div className='flex-1'>
        <h1 className='float-left font-bold text-2xl'>Jishnu Rahul K</h1>
        <p className='float-right'>Full Stack Developer</p>
      </div>
      <nav className='flex-1'>
        <ul className='flex justify-end space-x-4'>
          <li className="hover:text-black transition-colors duration-300"><button onClick={() => scrollToSection(refs.aboutRef)}>About</button></li>
          <li className="hover:text-black transition-colors duration-300"><button onClick={() => scrollToSection(refs.experienceRef)}>Experience</button></li>
          <li className="hover:text-black transition-colors duration-300"><button onClick={() => scrollToSection(refs.projectsRef)}>Projects</button></li>
          <li className="hover:text-black transition-colors duration-300"><button onClick={() => scrollToSection(refs.contactRef)}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
