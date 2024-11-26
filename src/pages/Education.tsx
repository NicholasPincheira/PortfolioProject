import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    type: 'Educación Formal',
    items: [
      {
        title: 'Ingeniería en Informatica',
        institution: 'Duoc UC',
        period: '2018 - 2024',
        description: 'Especialización en desarrollo de software y gestion de proyectos informaticos.',
        urlimage: '/img/duoc.jpg'
      },
      {
        title: 'Tecnico en Electronica',
        institution: 'Liceo Enseñanza Media',
        period: '2014 - 2018',
        description: 'Titulo Enseñanza Media',
        urlimage: '/img/liceo.jpg'
      }
    ]
  },
  {
    type: 'Certificaciones',
    items: [
      {
        title: 'CERTIFICADO EN ANÁLISIS Y DESARROLLO DE MODELOS DE DATOS',
        institution: 'Duoc UC',
        period: '2024',
        description: 'ID de la credencial 4236766627',
        validation: 'Validar Certificado',
        urlimage: '/img/duoc.jpg'
      },
      {
        title: 'CERTIFICADO EN ANÁLISIS Y PLANIFICACIÓN DE REQUERIMIENTOS INFORMÁTICOS',
        institution: 'Duoc UC',
        period: '2024',
        description: 'ID de la credencial 4236766627',
        validation: 'Validar Certificado',
        urlimage: '/img/duoc.jpg'
      },
      {
        title: 'CERTIFICADO EN ARQUITECTURA DE SOFTWARE',
        institution: 'Duoc UC',
        period: '2024',
        description: 'ID de la credencial 4236766627',
        validation: 'Validar Certificado',
        urlimage: '/img/duoc.jpg'
      },
      {
        title: 'CERTIFICADO EN CALIDAD DE SOFTWARE',
        institution: 'Duoc UC',
        period: '2024',
        description: 'ID de la credencial 4236766627',
        validation: 'Validar Certificado',
        urlimage: '/img/duoc.jpg'
      },
      {
        title: 'CERTIFICADO EN GESTIÓN DE PROYECTOS INFORMÁTICOS',
        institution: 'Duoc UC',
        period: '2024',
        description: 'ID de la credencial 4236766627',
        validation: 'Validar Certificado',
        urlimage: '/img/duoc.jpg'
      },
      {
        title: 'CERTIFICADO EN INTELIGENCIA DE NEGOCIOS',
        institution: 'Duoc UC',
        period: '2024',
        description: 'ID de la credencial 4236766627',
        validation: 'Validar Certificado',
        urlimage: '/img/duoc.jpg'
      },
      {
        title: 'CERTIFICADO EN PROGRAMACIÓN DE SOFTWARE',
        institution: 'Duoc UC',
        period: '2024',
        description: 'ID de la credencial 4236766627',
        validation: 'Validar Certificado',
        urlimage: '/img/duoc.jpg'
      },
      {
        title: 'CERTIFICADO INTERNACIONAL EN NIVEL INTERMEDIO',
        institution: 'Duoc UC',
        period: '2024',
        description: 'ID de la credencial 4236766627',
        validation: 'Validar Certificado',
        urlimage: '/img/duoc.jpg'
      },
    ]
  }
];

function Education() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">Estudios</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Mi trayectoria académica y certificaciones profesionales que respaldan mi experiencia.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {education.map((category, categoryIndex) => (
          <motion.div
            key={category.type}
            initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold flex items-center space-x-2">
              {categoryIndex === 0 ? (
                <GraduationCap className="w-6 h-6 text-indigo-400" />
              ) : (
                <Award className="w-6 h-6 text-purple-400" />
              )}
              <span>{category.type}</span>
            </h2>

            <div className="space-y-8">
              {category.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-indigo-500 to-purple-500" />
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500" />
                  
                  <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <div className="flex items-center mt-3">
                          <img className="inline-block mr-3 h-12 w-12 rounded ring-2 ring-white" src={item.urlimage}/>
                          <p className="text-gray-400">{item.institution}</p>
                        </div>
                      </div>
                      <span className="text-nowrap text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                    <a href='https://certificadovalida.duoc.cl/ValidacionQr?id=4236766627' className="text-blue-600">{item.validation} </a> 
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;