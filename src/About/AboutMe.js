import React from 'react';
import './AboutMe.css'; 
import skills from './skills';

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <p>Hi, I'm Jishnu Rahul Kanisetty, a passionate full-stack developer with a keen interest in AI and machine learning technologies. With a strong foundation in computer science and extensive experience in Django, React, and SQL, I'm constantly exploring new technologies to solve complex problems.</p>
      <h3>Skills</h3>
      <div className="skills-container">
        {skills.map(skill => (
          <div key={skill.name} className="skill">
            <img src={skill.icon} alt={skill.name} className="skill-icon"/>
          </div>
        ))}
      </div>
      <div className="education-container">
        <h3>Education</h3>
        <div className="education-entry">
          <p>Master of Professional Studies in Computer and Information Sciences | GPA: 3.95 | University at Buffalo, Buffalo NY | Aug 2022 – Dec 2023</p>
        </div>
        <div className="education-entry">
          <p>Bachelor of Engineering Major in Electrical, Minor in Electronics | GPA: 7.44 | SSN College of Engineering, New York NY | Aug 2014 – May 2018</p>
        </div>
      </div>
    </section>
  );
}
