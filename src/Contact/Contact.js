import React from 'react';
import './Contact.css'; // Ensure your CSS styles are defined for .icon and .contact-info

// Import SVGs for contact icons
import mobileIcon from './Icons/phone-solid.svg';
import linkedinIcon from './Icons/linkedin.svg';
import githubIcon from './Icons/github.svg';
import twitterIcon from './Icons/x-twitter.svg';
import leetcodeIcon from './Icons/simple-icons--leetcode.svg';

const contactInfo = [
  {
    icon: mobileIcon,
    info: '+1 (716)-295-3060',
  },
  {
    icon: linkedinIcon,
    info: 'linkedin.com/in/jishnura/',
    link: 'https://www.linkedin.com/in/jishnura/',
  },
  {
    icon: githubIcon,
    info: 'github.com/juZnu',
    link: "https://github.com/juZnu",
  },
  {
    icon: twitterIcon,
    info: '@jishnurahul',
    link: 'https://twitter.com/jishnurahul',
  },
  {
    icon: leetcodeIcon,
    info: 'leetcode.com/juZnu/',
    link: 'https://leetcode.com/juZnu/',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="Contact">
      <h2>Contact</h2>
      <div className="ContactDetails">
        {contactInfo.map(({ icon, info, link }) => (
          <div key={info} className="contact-item">
            <img src={icon} alt="" className="icon" />
            {link ? (
              <a href={link} className="contact-info" target="_blank" rel="noopener noreferrer">
                {info}
              </a>
            ) : (
              <p className="contact-info">{info}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
