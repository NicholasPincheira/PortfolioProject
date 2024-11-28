import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase } from 'lucide-react';
import Badge from '../components/Badge.tsx';

const experience = [
  {
    type: 'Experiencia Laboral',
    items: [
        {
          title: "Fabrica de calzados Gino",
          institution: "Gino S.A",
          period: "2024 / 1 Año/s",
          description: (
            <>
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                Ingeniero en Informática con experiencia en desarrollo web y mantenimiento de sistemas. He trabajado en una amplia gama de proyectos, desde la creación de plataformas ecommerce hasta el mantenimiento de sistemas internos en entornos empresariales. Mis principales competencias incluyen:
              </p>
          
              <ul className="list-none space-y-4">
                {[
                  {
                    title: "Desarrollo y mantenimiento de webs:",
                    description:
                      "utilizando tecnologías como HTML5, CSS, JavaScript (Vanilla, jQuery) y Node.js con Next.js.",
                    gradient: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
                  },
                  {
                    title: "Gestión de bases de datos:",
                    description:
                      "con experiencia en MySQL y MongoDB, optimizando consultas y estructurando bases de datos eficientes.",
                    gradient: "bg-gradient-to-r from-yellow-500 to-red-500",
                  },
                  {
                    title: "Desarrollo en plataformas ecommerce:",
                    description:
                      "especializado en PrestaShop 1.7.7.1 y 1.7.8.8, incluyendo la creación de módulos personalizados para mejorar la experiencia del usuario y la eficiencia del sistema.",
                    gradient: "bg-gradient-to-r from-green-400 to-teal-500",
                  },
                  {
                    title: "Mantenimiento de sistemas internos:",
                    description:
                      "utilizando Python para automatización de procesos y mejoras en la infraestructura interna.",
                    gradient: "bg-gradient-to-r from-blue-500 to-purple-500",
                  },
                  {
                    title: "Servidores y sistemas en la nube:",
                    description: "gestión de servidores en CentOS y soluciones en la nube.",
                    gradient: "bg-gradient-to-r from-indigo-500 to-pink-500",
                  },
                  {
                    title: "Implementación de APIs REST:",
                    description:
                      "tanto para aplicaciones web como para integraciones de terceros.",
                    gradient: "bg-gradient-to-r from-cyan-500 to-blue-600",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    {/* Círculo decorativo */}
                    <div
                      className={`w-4 h-4 rounded-full ${item.gradient} shrink-0`}
                    ></div>
                    {/* Texto */}
                    <div className="flex flex-col">
                      <strong className="text-lg text-white font-semibold">
                        {item.title}
                      </strong>
                      <span className="text-gray-400">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
          
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Mi enfoque está en ofrecer soluciones robustas y escalables que impulsen la eficiencia y la seguridad de los sistemas, apoyando a empresas en su crecimiento digital.
              </p>
            </>
          ),
          urlimage: "img/Gino.jpg",
          badges: [
            {
              text: "Prestashop",
              icon: "icons/prestashop.png",
              url: "https://www.prestashop.com/",
            },
            {
              text: "MySQL",
              icon: "icons/mysql.png",
              url: "https://www.mysql.com/",
            },
            {
                text: "PHP",
                icon: "icons/php.png",
                url: "https://www.php.net/",
              },
              {
                text: "centOS",
                icon: "icons/centOS.png",
                url: "",
              },
              {
                text: "nodeJS",
                icon: "icons/node.png",
                url: "https://nodejs.org/",
              },
          ],
        },
      ],
    },
  ];

function Experience() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">Experiencia Laboral</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Mi trayectoria en el ambito laboral que respalda mi experiencia.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {experience.map((category, categoryIndex) => (
          <motion.div
            key={category.type}
            initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold flex items-center space-x-2">
              {categoryIndex === 0 ? (
                <Briefcase className="w-6 h-6 text-indigo-400" />
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
                    <div className=''>
                    <Badge badges={item.badges || []} />
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

export default Experience;