// Projects.js
import React, { useState } from 'react';
import './Projects.css';

// Sample data structure for projects
const projectData = [
  {
    title: 'Todo App',
    description: "Efficiently manage daily tasks with our Todo App. It's designed to help you keep track of everything from work assignments and personal errands to study schedules. Stay organized and boost your productivity with easy task management.",
    githubLink: 'https://github.com/juZnu/TODO'
  },
  {
    title: 'Race-Car with Reinforcement Learning',
    description: "Dive into the exciting world of reinforcement learning with our Race-Car project. I developed a model that navigates a car through a dynamic RaceTrack environment, avoiding obstacles and reaching goals through trial and error. This project showcases the potential of RL algorithms in solving complex, real-world problems.",
    githubLink: 'https://github.com/juZnu/Race-Car-Model'
  },
  {
    title: 'Allflix - IMDB Replica',
    description: 'Allflix brings you closer to the vast world of movies and TV shows. Our platform, inspired by IMDB, provides detailed information, ratings, and reviews for thousands of titles. Explore, discover, and get recommendations tailored just for you. Dive into the cinematic universe with Allflix.',
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
          <div key={index} className="Project">
            <div className="ProjectHeader" onClick={() => toggleProject(index)}>
              <h3>{project.title}</h3>
            </div>
            {expandedProject === index && (
              <div className="ProjectDetails">
                <p>{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
