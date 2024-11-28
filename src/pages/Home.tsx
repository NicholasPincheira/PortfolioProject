import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <img
          src={`${import.meta.env.BASE_URL}icons/nicholas.jpg`}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-indigo-500 mx-auto"
        />
        
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Nicholas Pincheira
            </span>
          </h1>
          <p className="text-xl text-gray-400">Desarrollador Full Stack</p>
        </div>

        <p className="max-w-xl text-gray-300">
          Apasionado por crear experiencias web excepcionales y soluciones innovadoras.
          Especializado en desarrollo full stack con experiencia en tecnologías modernas.
        </p>

        <div className="flex justify-center space-x-4">
          <a href="https://github.com/NicholasPincheira" target="_blank" rel="noopener noreferrer"
             className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/nicholas-alberto-pincheira-zalazar-90846823a/" target="_blank" rel="noopener noreferrer"
             className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:nicholasapz7@gmail.com"
             className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>

      <Link
        to="/admin/login"
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all hover:scale-110 group"
      >
        <Settings className="w-6 h-6 text-gray-400 group-hover:text-indigo-400" />
      </Link>
    </div>
  );
}

export default Home;