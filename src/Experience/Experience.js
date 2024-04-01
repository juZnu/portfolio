import React from 'react';
import './Experience.css';

const workExperience = [
  {
    jobTitle: 'Full Stack Software Engineer',
    companyName: 'LARSEN & TOUBRO INFOTECH',
    location: 'Chennai, Tamil Nadu, India',
    startDate: 'MAY 2018',
    endDate: 'DEC 2021',
    responsibilities: [
      'Worked on full-cycle development and project management of a critical React & Django application orchestrating end-to-end functional testing and achieving seamless handling of over 1000 daily API transactions resulting in a robust and scalable system.',
      'Developed a React-based Single Page Application (SPA) utilizing the Context API for state management leading to a seamless user experience and a 30% increase in page load efficiency.',
      'Engineered advanced API solutions within Django using mixins class-based and function-based views leveraging the Django Rest Framework to streamline data serialization from PostgreSQL and MongoDB resulting in a 50% increase in backend data retrieval efficiency.',
      'Seamlessly integrated Tableau SDK within React components dynamically generating data visualizations for over 2000 product interactions contributing to a 20% increase in targeted marketing campaign effectiveness.',
    ],
  },
];

const internships = [
  {
    role: 'Software Engineer Intern',
    company: 'Quad Signal Technologies',
    location: 'Chennai, Tamil Nadu',
    duration: 'MAY 2017 – APR 2018',
    tasks: [
      'Orchestrated seamless API integrations within the Django framework including Google Maps and Stripe to broaden application functionality, resulting in a 25% increase in user retention.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Cosmic Trade & Co',
    location: 'Chennai, Tamil Nadu',
    duration: 'MAY 2016 – APR 2017',
    tasks: [
      'Redesigned an Oracle database schema optimization project resulting in a 40% reduction in data retrieval time and a 75% improvement in query execution efficiency.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="Experience">
      <h2>Work Experience</h2>
      {workExperience.map((job, index) => (
        <div key={index} className="Job">
          <h3>{`${job.jobTitle} at ${job.companyName}`}</h3>
          <p className="Dates">{`${job.startDate} - ${job.endDate}`}</p>
          <ul>
            {job.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
      <h2>Internships</h2>
      {internships.map((intern, index) => (
        <div key={index} className="Job">
          <h3>{`${intern.role} at ${intern.company}`}</h3>
          <p className="Dates">{intern.duration}</p>
          <ul>
            {intern.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
