import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
};

const Hero = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 relative overflow-hidden px-4 sm:px-8">
      {/* Text Content */}
      <div className="flex-1 z-10 text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          Hi, I'm <span className="text-purple-500">Ahmed ur Rehman</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Full Stack Developer | QA Engineer
        </motion.p>
        <motion.a 
          href="#contact"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Contact Me
        </motion.a>
      </div>

      {/* 3D Canvas & Image */}
      <div className="flex-1 h-full w-full relative flex items-center justify-center">
        {/* Profile Image with 3D-like effect */}
        <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute z-20 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_50px_rgba(139,92,246,0.5)]"
        >
            <img src="/assets/profile.jpg" alt="Ahmed ur Rehman" className="w-full h-full object-cover" />
        </motion.div>

        <Canvas className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
