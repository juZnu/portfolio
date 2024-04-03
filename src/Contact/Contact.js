import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
// Ensure your CSS styles are defined for .icon and .contact-info if needed

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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset(); // Resets form after submission
  };

  return (
    <section id="contact" className="p-14 min-h-screen w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-10">
        <h2 className='text-4xl font-bold text-gray-800 mb-10'>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input type="text" name="user_name" placeholder="Your Name" required className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" name="user_email" placeholder="Your Email" required className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" placeholder="Your Message" required className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ minHeight: '150px' }}></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-colors duration-300">Send</button>
        </form>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-10">
        <h2 className='text-4xl font-bold text-gray-800 mb-10'>My Contact Details</h2>
        <div className="space-y-4">
          {contactInfo.map(({ icon, info, link }) => (
            <div key={info} className="flex items-center space-x-4">
              <img src={icon} alt="" className="w-8 h-8" />
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
                  {info}
                </a>
              ) : (
                <span className="text-lg">{info}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
