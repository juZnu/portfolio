import React, { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Todo App',
    description: "The Todo App is designed to streamline your daily task management in a simple yet effective interface. Built using modern web technologies, this app allows users to create, update, delete, and categorize tasks with ease. Featuring a sleek design and intuitive user experience, the Todo App integrates seamlessly with your workflow, helping to keep you organized and focused. Whether at work or home, the Todo App is your go-to tool for managing your personal and professional tasks",
    githubLink: 'https://github.com/juZnu/TODO'
  },
  {
    title: 'Race-Car with Reinforcement Learning',
    description: "This innovative project showcases the application of reinforcement learning algorithms to train a virtual race car to navigate tracks of varying complexity. Utilizing Python and popular machine learning frameworks, the Race-Car project demonstrates how AI can learn and improve over time, adapting to new challenges in a dynamic environment. Explore the intricacies of AI training, simulation, and real-time decision-making with this cutting-edge project.",
    githubLink: 'https://github.com/juZnu/Race-Car-Model'
  },
  {
    title: 'Allflix - IMDB Replica',
    description: 'Allflix is a comprehensive platform that connects movie enthusiasts with the vast world of cinema. Drawing inspiration from IMDB, Allflix offers detailed information on movies, TV shows, actors, and filmmakers from around the globe. From the latest box office hits to timeless classics, Allflix provides users with synopses, ratings, reviews, and trailers, making it the ultimate resource for exploring and discovering new content. Built with React and Node.js, Allflix features a user-friendly interface and powerful search capabilities, ensuring that your next favorite movie or TV show is just a click away',
    githubLink: 'https://github.com/juZnu/Allflix'
  },
  // Add more projects as needed
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="p-14">
      <h2 className='px-4 py-4 text-4xl font-bold font-mono'>Projects</h2>
      {projectData.map((project, index) => (
        <div key={index} className="bg-slate-400 rounded-md p-4 mb-4">
          <button 
            className="w-full text-left text-2xl font-bold"
            onClick={() => toggleProject(index)}
          >
            {project.title}
          </button>
          {expandedProject === index && (
            <div>
              <p className='text-xl justify-center'>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <button 
                  className='mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out'
                >
                  View Project
                </button>
              </a>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;
