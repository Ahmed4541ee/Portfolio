import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A Full Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js) with proven expertise in building robust, modern applications. 
            I also have deep experience in WordPress development, creating flexible and high-performing websites. 
            Currently leveraging my skills as a QA Engineer at Fena, ensuring all software I touch meets the highest standards of quality, reliability, and user experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
              <li>WordPress Development</li>
              <li>QA Engineering</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Canva Design</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <p className="text-gray-300">
              I have worked on various projects ranging from simple landing pages to complex web applications. 
              I am always eager to learn new technologies and improve my skills.
            </p>
            <div className="mt-6">
                <a 
                  href="/cv.pdf" 
                  download 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Download CV
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
