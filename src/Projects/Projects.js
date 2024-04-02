// Projects.js
import React, { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Todo App',
    description: "Efficiently manage daily tasks with our Todo App...",
    githubLink: 'https://github.com/juZnu/TODO'
  },
  {
    title: 'Race-Car with Reinforcement Learning',
    description: "Dive into the exciting world of reinforcement learning with our Race-Car project...",
    githubLink: 'https://github.com/juZnu/Race-Car-Model'
  },
  {
    title: 'Allflix - IMDB Replica',
    description: 'Allflix brings you closer to the vast world of movies and TV shows...',
    githubLink: 'https://github.com/juZnu/Allflix'
  },
  // Add more projects as needed
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <section id="projects" className="Projects">
      <h2>Projects</h2>
      <div className="ProjectList">
        {projectData.map((project, index) => (
          <div key={index} className={`Project ${expandedProject === index ? 'expanded' : ''}`}>
            <div className="ProjectHeader" onClick={() => toggleProject(index)}>
              <h3>{project.title}</h3>
            </div>
            <div className="ProjectDetails">
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
