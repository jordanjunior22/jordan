// WorkExperience.js
import './WorkExperience.css'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Reveal from './Reveal';
const WorkExperience = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="work-experience"
    >
        
      <Reveal className="work-entry">
        <h3 className="job-title">React Native Developer (Freelance)</h3>
        <p className="company">Social Insure, Maryland ,United States</p>
        <p className="duration">July 01 2023 - Present</p>
        <ul>
          <li> Develop mobile applications using React Native and TypeScript, ensuring compatibility with iOS and Android.</li>
          <li>Integrate RESTful APIs to connect front-end components with back-end services, optimizing data exchange and user interaction.</li>
          <li>Create and modify design assets with Figma to maintain design consistency and support layout requirements.</li>
          <li>Using Tools like Figma to design UI.</li>
          <li>Quality assurance and testing.</li>
        </ul>
      </Reveal>
        
        <Reveal className="work-entry">
        <h3 className="job-title">Junior Software Developer</h3>
        <p className="company">Sohdecam Health Services, Mbouda, Cameroon</p>
        <p className="duration">December 2023 - Present</p>
        <ul>
          <li>Analyzing and outlining the requirements for the development of Health Care Management System.</li>
          <li>Providing technical support to end-users, investigating and resolving issues reported in production environments.</li>
          <li>Designing, coding, testing, and debugging software applications.</li>
          <li>Collaborating with stakeholders to gather and analyze software requirements.</li>
          <li>Architecting scalable and maintainable software systems based on requirements.</li>
          <li>Designing and implementing database schemas, writing SQL queries, and optimizing database performance.</li>
        </ul>
      </Reveal>
      <Reveal className="work-entry">
        <h3 className="job-title">Customer Support (Intern)</h3>
        <p className="company">Vodaphone, Cyprus, Kyrenia</p>
        <p className="duration">March 02 2023 - July 01 2023</p>
        <ul>
          <li>Assisting with billing and account inquiries.</li>
          <li>Resolve Technical issues and provide troubleshooting assistance.</li>
          <li>Promote vodafone services and products to existing customers.</li>
          <li>Assist customers with account management such as plan upgrades or changes.</li>
        </ul>
      </Reveal>
        
      <Reveal className="work-entry">
        <h3 className="job-title">Backend Developer</h3>
        <p className="company">Final International University, Cyprus, Kyrenia</p>
        <p className="duration">July 03 2022 - December 2022</p>
        <ul>
          <li>Wrote and maintained server-side code for web applications</li>
          <li>Designing schemas, writing SQL queries, and ensuring data integrity.</li>
          <li>Implemented security best practices to protect the backend systems from threats such as SQL injection.</li>
          <li>Developed and maintained RESTful API, allowing communication between the front-end and back-end systems.</li>
          <li>Worked closely with front-end developers, QA testers, and other team members to ensure a smooth development process and
          resolve any integration issues.</li>
          <li>Conducted performance testing and optimization to ensure fast response times and efficient use of server resources</li>
          <li>Maintained documentation of the codebase, API endpoints, and system architecture to help other team members understand
          and work with the code.
          </li>
          <li>Proactively learned new technologies and techniques, staying up-to-date with industry trends and best practices.</li>
        </ul>
      </Reveal>

    </motion.div>
  );
};

export default WorkExperience;
