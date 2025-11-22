import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        // Fallback data if backend is empty or fails
        setProjects([
            {
                _id: '1',
                title: 'Royal Edward Education Management Portal',
                description: 'Developed a comprehensive web application for school administration, enabling secure management of student records, class schedules, and parent communication via a dedicated dashboard.',
                techStack: ['MERN Stack'],
                image: '/assets/project-royal-edward.png',
                link: 'https://royaledward.edu.pk/',
                github: '#'
            },
            {
                _id: '2',
                title: 'Blue Moon Mart Online E-commerce Marketplace',
                description: 'Built a full-featured e-commerce platform that handles product inventory, secure payment processing, and user authentication to facilitate online sales for a local store.',
                techStack: ['MERN Stack'],
                image: '/assets/project-blue-moon.png',
                link: 'https://bluemoonmart.pk/',
                github: '#'
            },
            {
                _id: '3',
                title: 'International Cargo and Logistics Website',
                description: 'Engineered a professional corporate website featuring dynamic service catalogs, shipment tracking integration, and an engaging blog for lead generation and industry updates.',
                techStack: ['WordPress', 'WooCommerce'],
                image: '/assets/project-cargo.png',
                link: 'https://pakcarrier.com/',
                github: '#'
            },
            {
                _id: '4',
                title: 'Giga Developers — Corporate Software Agency Site',
                description: 'Designed and launched the official website for a software company, focusing on clean design, service showcasing, and a professional, responsive user experience.',
                techStack: ['WordPress'],
                image: '/assets/project-giga-dev.png',
                link: 'https://gigadevelopers.com/',
                github: '#'
            },
            {
                _id: '5',
                title: 'Leftover Rescue (Food Waste Reduction Platform)',
                description: 'A social impact platform designed to connect users with food resources to help reduce wastage, promoting sustainable community practices and efficient resource distribution.',
                techStack: ['HTML', 'CSS', 'JavaScript'],
                image: 'https://via.placeholder.com/300?text=Leftover+Rescue', // Placeholder as no image provided
                link: '#',
                github: 'https://github.com/Ahmed4541ee/leftover-rescue'
            }
        ]);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Recent Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project._id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-purple-900 text-purple-200 text-xs px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
                    <Github size={20} className="mr-1" /> Code
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
                    <ExternalLink size={20} className="mr-1" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
