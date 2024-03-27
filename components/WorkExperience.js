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
        <h3 className="job-title">Senior Software Engineer</h3>
        <p className="company">Company Name, Location</p>
        <p className="duration">January 2018 - Present</p>
        <ul>
          <li>Led a team of developers in building scalable and efficient software solutions.</li>
          <li>Spearheaded the development of a new product, increasing user engagement by 40%.</li>
          <li>Implemented Agile methodologies, resulting in a 30% reduction in project delivery time.</li>
        </ul>
      </Reveal>

      <Reveal className="work-entry">
        <h3 className="job-title">UX/UI Designer</h3>
        <p className="company">Company Name, Location</p>
        <p className="duration">August 2015 - December 2017</p>
        <ul>
          <li>Designed intuitive user interfaces resulting in a 25% increase in user satisfaction.</li>
          <li>Conducted user research and implemented feedback to iterate on product designs.</li>
          <li>Collaborated closely with development teams to ensure design feasibility and consistency.</li>
        </ul>
      </Reveal>

    </motion.div>
  );
};

export default WorkExperience;
