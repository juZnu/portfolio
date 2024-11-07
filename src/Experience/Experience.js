import React from 'react';
import './Experience.css';

const workExperience = [
  {
    jobTitle: 'Software Engineer',
    companyName: 'Lexim AI',
    location: 'Milpitas, CA, USA',
    startDate: 'Oct 2024',
    endDate: 'Present',
    responsibilities: [
      'Reduced duplicate React code and introduced reusable components, enhancing loading speed by 20% and improving maintainability.',
      'Integrated Generative AI with RAG to resolve user queries by retrieving relevant documents and generating context-specific answers, reducing follow-up inquiries by 30%.',
      'Refined SQL queries, reducing query execution time from 110 seconds to 32 seconds, significantly improving data retrieval speed for high-demand operations.'
    ],
  },
  {
    jobTitle: 'Full-Stack Engineer',
    companyName: 'GrassLand Foods',
    location: 'Princeton, NJ, USA',
    startDate: 'Feb 2024',
    endDate: 'Sep 2024',
    responsibilities: [
      'Transitioned a monolithic platform to a microservices structure using React and Flask, enabling 500 concurrent users without performance degradation.',
      'Developed Role-Based Access Control (RBAC) for the user interface, protecting sensitive information and supporting over 25 unique user roles.',
      'Designed a database with stored procedures to handle warehouse data concurrency, reducing order placement errors by 40% and optimizing 500 weekly transactions.'
    ],
  },
  {
    jobTitle: 'Software Engineer',
    companyName: 'LTI Mindtree',
    location: 'Chennai, Tamil Nadu, India',
    startDate: 'May 2018',
    endDate: 'Dec 2021',
    responsibilities: [
      'Proactively integrated Tableau SDK with React and Django for real-time manufacturing insights, improving production decision speed by 25%.',
      'Automated batch-processing of CSV uploads with a Python script, saving 10+ hours weekly for clients by eliminating manual file uploads.',
      'Developed a reliable database for retrying failed manufacturing requests, achieving 98% uptime and reducing production delays by 15%.',
      'Created an internal website for banking client employees to log updates, reducing version conflicts and supporting cross-team transparency.'
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
  }
];

const Experience = () => {
  return (
    <section className="p-14 min-h-screen w-full">
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