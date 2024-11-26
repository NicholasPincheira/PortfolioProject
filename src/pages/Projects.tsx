import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Gitlab, Code } from 'lucide-react';

const projects = [
  {
    title: 'Ecotrend',
    description: 'Ecotrend es una plataforma que fomenta el reciclaje textil frente a la contaminación actual. Funciona como una red social para coordinar donaciones entre empresas y pymes, localizar o crear puntos de reciclaje, publicar blogs y cursos, y calcular huella de carbono. Incluye un feed interactivo para compartir contenido y un chatbot con IA que ofrece consejos prácticos sobre sostenibilidad y reciclaje.',
    image: '/projects/ecotrend.jpg',
    technologies: ['Laravel', 'PhpMyAdmin', 'PHP', 'MySQL', 'Jenkins', 'CI/CD', 'SonarQube'],
    gitlab: 'https://gitlab.com/duoclab/webinge',
    github: '',
    live: 'https://www.canva.com/design/DAF1U1ThtaQ/view?embed'
  },
  {
    title: 'VentasApp',
    description: 'Aplicacion para la gestion de productos, calculo de impuesto, y estado de ordenes para una pyme, automizando procesos lentos y mejorando la efectividad del trabajo.',
    image: '/projects/ventas.webp',
    technologies: ['Django', 'Django Admin', 'Python', 'firebase', 'python.anywere'],
    gitlab: '',
    github: 'https://github.com/NicholasPincheira/VentasApp-',
    live: ''
  },
  {
    title: 'Machcargo',
    description: 'Proyecto para empresa dedicada al rubro de importaciones China/Chile, el cual consta de un sistema de gestion de importaciones, permitiendo al usuario cargar contenedores con productos y modificar el estado de estos, para que los clientes puedan realizar seguimiento a sus importaciones y crear solicitud de importaciones.',
    image: '/projects/machcargo.png',
    technologies: ['Django', 'Django Admin', 'Python', 'PostgreSQL', 'Ubuntu', 'ChatGPT ApiBot'],
    github: 'https://github.com',
    live: ''
  },
  {
    title: 'PetShop',
    description: 'E-Commerce desarrollado para un examen de desarrollo web, el cual consta con un sistema de creacion y gestion de productos e inventario, conjunto de un sistema de authenticacion y administracion de ventas cliente/vendedor.',
    image: '/projects/petShop.jpg',
    technologies: ['Django', 'Django Admin', 'Python', 'PostgreSQL', 'Ubuntu'],
    gitlab: '',
    github: 'https://github.com/NicholasPincheiraDuoc/Examen-Petshop/tree/main',
    live: ''
  },
];

function Projects() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        
        <h1 className="text-4xl font-bold">Proyectos</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Una selección de mis proyectos (Laborales/Estudiantiles) más destacados, demostrando mis habilidades
          y experiencia en diferentes tecnologías y dominios.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
              {project.gitlab && (
                <a
                  href={project.gitlab}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Gitlab className="w-6 h-6" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              )}
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;