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
    <section className="p-14">
      <h2 className='px-4 py-2 text-4xl font-bold font-mono'>Work Experience</h2>
      {workExperience.map((job, index) => (
        <article key={index} className="px-4 py-2 font-mono text-justify">
          <div className='flex justify-between'>
            <h3 className='text-left text-2xl font-bold'>{job.jobTitle}</h3>
            <p className="text-right text-xl">{`${job.startDate} - ${job.endDate}`}</p>
          </div>
          <h3 className='text-xl'>{job.companyName}</h3>
          <ul aria-label="Responsibilities" className='list-disc pl-5'>
            {job.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </article>
      ))}
      <h2 className='px-4 py-2 text-4xl font-bold font-mono'>Internships</h2>
      {internships.map((intern, index) => (
        <article key={index} className="px-4 py-2 font-mono text-justify">
          <div className='flex justify-between'>
            <h3 className='text-left text-2xl font-bold'>{intern.role}</h3>
            <p className="text-right text-xl">{intern.duration}</p>
          </div>
          <h3 className='text-xl'>{intern.company}</h3>
          <ul aria-label="Tasks" className='list-disc pl-5'>
            {intern.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default Experience;