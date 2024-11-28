import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, BookOpen, GraduationCap, Newspaper, Menu, X, Briefcase} from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { path: '/projects', name: 'Proyectos', icon: Code2 },
    { path: '/technologies', name: 'Tecnologías', icon: BookOpen },
    { path: '/education', name: 'Estudios', icon: GraduationCap },
    { path: '/experience', name: 'Experiencia', icon: Briefcase},
    { path: '/blog', name: 'Blog', icon: Newspaper }
    
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img
              src={`${import.meta.env.BASE_URL}icons/nicholas.jpg`}
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-indigo-500"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Nicholas Pincheira
            </span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map(({ path, name, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className="relative px-4 py-2 rounded-md group"
              >
                {location.pathname === path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-indigo-500/20 rounded-md"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative flex items-center space-x-2 text-sm font-medium">
                  <Icon className="w-4 h-4" />
                  <span>{name}</span>
                </span>
              </Link>
            ))}
          </div>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-700"
          >
            <div className="container mx-auto px-4 py-2">
              {navItems.map(({ path, name, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-md transition-colors ${
                    location.pathname === path
                      ? 'bg-indigo-500/20 text-indigo-400'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;