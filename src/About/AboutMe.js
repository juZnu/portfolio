import React from 'react';
import skills from './skills';

export default function AboutMe() {
  return (
    <section className="p-14">
      <h2 className='px-4 py-2 text-5xl font-bold font-mono'>About Me</h2>
      <p className='px-4 py-2 text-xl font-mono text-justify'>Hi, I'm Jishnu Rahul Kanisetty, a passionate full-stack developer with a keen interest in AI and machine learning technologies. With a strong foundation in computer science and extensive experience in Django, React, and SQL, I'm constantly exploring new technologies to solve complex problems.</p>
      <h3 className='px-4 py-2 text-5xl font-bold font-mono'>Skills</h3>
      <div className="flex flex-wrap px-4 py-2">
        {skills.map(skill => (
          <div key={skill.name} className="p-2">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16"/>
          </div>
        ))}
      </div>
      <div className="px-4">
        <h3 className='py-2 text-5xl font-bold'>Education</h3>
        {/* University at Buffalo */}
        <div className="py-2 text-xl font-mono">
          <div className="flex justify-between">
            <span className="text-left text-2xl font-bold">University at Buffalo, Buffalo NY</span>
            <span className="text-right">Aug 2022 – Dec 2023</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left">Master of Professional Studies in Computer and Information Sciences</span>
            <span className="text-right">GPA: 3.95</span>
          </div>
        </div>
        {/* SSN College of Engineering */}
        <div className="py-2 text-xl font-mono">
          <div className="flex justify-between">
            <span className="text-left text-2xl font-bold">SSN College of Engineering, Chennai TN</span>
            <span className="text-right">Aug 2014 – May 2018</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left">Bachelor of Engineering Major in Electrical, Minor in Electronics</span>
            <span className="text-right">GPA: 7.44</span>
          </div>
        </div>
      </div>
    </section>
  );
}
