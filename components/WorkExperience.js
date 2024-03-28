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
        <h3 className="job-title">Software Developer</h3>
        <p className="company">Sohdecam Health Services, Mbouda, Cameroon</p>
        <p className="duration">July 2023 - Present</p>
        <ul>
          <li>Proficient in designing, coding, testing, debugging, and maintaining software applications or systems, utilizing various programming languages and frameworks.</li>
          <li>Analyzing and outlining the requirements for the development of a new Health Care Management System.</li>
          <li>Creating and developing a new website to replace the outdated one.</li>
          <li>Skilled in collaborating with stakeholders to understand project requirements and effectively translate user needs into software solutions.</li>
          <li>Adept at identifying and resolving technical issues, including bugs, performance bottlenecks, and compatibility concerns, ensuring smooth project execution.</li>
          <li>Experienced in using Git for version control, collaborating with cross-functional teams to manage changes to the codebase, and ensuring effective project coordination.</li>
          <li>Proficient in documenting code, APIs, and system architecture to facilitate understanding, maintenance, and future development, ensuring comprehensive project documentation.</li>
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

      <Reveal className="work-entry">
        <h3 className="job-title">IT Assistant (Volunteer)</h3>
        <p className="company">Sohdecam Health Services, Bamenda,Cameroon</p>
        <p className="duration">May 16 2018 - November 2018</p>
        <ul>
          <li>Diagnosing and resolving hardware and software issues.</li>
          <li>Installing, configuring, and maintaining medical equipment.</li>
          <li>Implementing data backup and disaster recovery plans.</li>
          <li>Maintaining comprehensive IT system documentation.</li>
        </ul>
      </Reveal>

    </motion.div>
  );
};

export default WorkExperience;
