import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Aprendiendo React',
    excerpt: 'Aprende las mejores prácticas para comenzar en esta biblioteca de JS.',
    date: '2024-03-15',
    readTime: '5 min',
    image: 'img/react.webp',
    category: 'React'
  },
  {
    title: 'Introducción a Javascript',
    excerpt: 'Una guía completa para comenzar con Javascript en tus proyectos.',
    date: '2024-03-10',
    readTime: '8 min',
    image: 'img/javascript.png',
    category: 'Javascript'
  },
  {
    title: 'Arquitectura de Microservicios',
    excerpt: 'Explorando los fundamentos de la arquitectura de microservicios.',
    date: '2024-03-05',
    readTime: '10 min',
    image: 'img/microservicios.webp',
    category: 'Backend'
  },
  {
    title: 'Crea tu proyecto Django',
    excerpt: 'Como crear un proyecto Django de cero.',
    date: '2024-04-05',
    readTime: '10 min',
    image: 'img/django.jpg',
    category: 'Frameworks'
  }
];

function Blog() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Artículos técnicos, tutoriales y reflexiones sobre desarrollo de software y tecnología.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <span className="absolute top-4 right-4 px-3 py-1 bg-indigo-500 text-sm rounded-full">
                {post.category}
              </span>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </span>
              </div>
              
              <h2 className="text-xl font-semibold group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-400">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                <span className="text-sm font-medium">PROXIMAMENTE</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default Blog;