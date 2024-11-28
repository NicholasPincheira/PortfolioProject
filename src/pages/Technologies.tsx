import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';

const techCategories = [
  {
    category: "Lenguajes de Programacion",
    technologies: [
      {
        name: "PHP",
        description: "Lenguaje de programación para desarrollo web",
        image: "tecnologias/php.webp",
        features: ["Backend", "OOP", "Web Development", "Scripting"]
      },
      {
        name: "Python",
        description: "Lenguaje versátil para múltiples propósitos",
        image: "tecnologias/python.jpg",
        features: ["Data Science", "Web", "AI/ML", "Scripting"]
      },
      {
        name: "Java",
        description: "Lenguaje empresarial multiplataforma",
        image: "tecnologias/java.jpg",
        features: ["Enterprise", "Android", "Spring", "Microservices"]
      },
      {
        name: "JavaScript",
        description: "Lenguaje principal del desarrollo web moderno",
        image: "tecnologias/javascript.png",
        features: ["Frontend", "Backend", "Full-stack", "Mobile"]
      },
      {
        name: "TypeScript",
        description: "JavaScript con tipos estáticos",
        image: "tecnologias/typescript.png",
        features: ["Type Safety", "Enterprise", "Scalable", "Modern"]
      },
      {
        name: "SQL",
        description: "Lenguaje de consulta estructurado",
        image: "tecnologias/sql.jpg",
        features: ["Databases", "Query", "Data Analysis", "RDBMS"]
      }
    ]
  },
  {
    category: "Backend & Frameworks",
    technologies: [
      {
        name: "Laravel",
        description: "Framework PHP moderno con arquitectura MVC",
        image: "tecnologias/laravel.webp",
        tools: ["PHP", "MySQL", "Composer", "Artisan CLI"]
      },
      {
        name: "Django",
        description: "Framework Python de alto rendimiento",
        image: "tecnologias/django.jpg",
        tools: ["Python", "PostgreSQL", "PythonAnywhere", "Django REST"]
      },
      {
        name: "Spring",
        description: "Framework empresarial Java de alto rendimiento",
        image: "tecnologias/spring.png",
        tools: ["Java SE", "SQL Server", "Maven", "Spring Boot"]
      },
      {
        name: "Node.js",
        description: "Runtime de JavaScript para backend",
        image: "tecnologias/node.jpg",
        tools: ["Express", "MongoDB", "npm", "TypeScript"]
      }
    ]
  },
  {
    category: "CMS & E-commerce",
    technologies: [
      {
        name: "WordPress",
        description: "CMS más popular del mundo",
        image: "tecnologias/wordpress.jpg",
        tools: ["PHP", "MySQL", "WooCommerce", "Elementor"]
      },
      {
        name: "PrestaShop",
        description: "Plataforma e-commerce open source",
        image: "tecnologias/prestashop.jpg",
        tools: ["PHP", "MySQL", "Smarty", "PrestaShop Modules"]
      },
      {
        name: "Odoo",
        description: "Suite empresarial todo en uno",
        image: "tecnologias/odoo.jpg",
        tools: ["Python", "PostgreSQL", "XML", "JavaScript"]
      },
      {
        name: "Desarrollo de Modulos",
        description: "Para diferentes CMS basados en PHP",
        image: "tecnologias/modulos.webp",
        tools: ["PHP", "MySQL", "Smarty", "PrestaShop Modules"]
      },
    ]
  },
  {
    category: "Frontend & UI",
    technologies: [
      {
        name: "React.js",
        description: "Biblioteca JavaScript para UI",
        image: "tecnologias/react.jpg",
        tools: ["Next.js", "Redux", "React Router", "Styled Components"]
      },
      {
        name: "Modern CSS",
        description: "Tecnologías modernas de estilizado",
        image: "tecnologias/css.jpg",
        tools: ["TailwindCSS", "Bootstrap", "SASS", "CSS Modules"]
      },
      {
        name: "JavaScript",
        description: "Lenguaje principal del desarrollo web",
        image: "tecnologias/javascript.jpg",
        tools: ["ES6+", "jQuery", "TypeScript", "Webpack"]
      },
      {
        name: "Tailwind",
        description: "FrameworkCss",
        image: "tecnologias/tailwind.jpg",
        tools: ["CSS"]
      },
      {
        name: "Bootstrap",
        description: "Framework Css",
        image: "tecnologias/bootstrap.png",
        tools: ["CSS","JS"]
      },
      {
        name: "Jquery",
        description: "Biblioteca de javascript que facilita las operaciones HTML",
        image: "tecnologias/jquery.jpg",
        tools: ["JS"]
      }
    ]
  },
  {
    category: "DevOps & Seguridad",
    technologies: [
      {
        name: "CI/CD",
        description: "Integración y despliegue continuo",
        image: "tecnologias/git.jpg",
        tools: ["Jenkins", "GitHub Actions", "GitLab CI", "Docker"]
      },
      {
        name: "Cloud & Hosting",
        description: "Plataformas y servicios cloud",
        image: "tecnologias/cloud.jpg",
        tools: ["Firebase", "AWS", "DigitalOcean", "Heroku"]
      },
      {
        name: "Sistemas Linux",
        description: "Administración de servidores",
        image: "tecnologias/linux.jpg",
        tools: ["Ubuntu 18.04", "CentOS", "Apache", "NGINX"]
      },
      {
        name: "Seguridad",
        description: "Herramientas de seguridad y monitoreo",
        image: "tecnologias/seguridad.jpg",
        tools: ["SQLMap", "HTTPS", "Sentry", "SonarQube"]
      }
    ]
  }
];

interface TechCardProps {
  name: string;
  description: string;
  image: string;
  features?: string[];
  tools?: string[];
}
function TechCard({ name, description, image, features, tools }: TechCardProps) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group/card h-[300px] relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover/card:scale-110">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10" />
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full p-6 flex flex-col justify-end">
        <div className="transform transition-all duration-300 group-hover/card:-translate-y-2">
          <h3 className="text-2xl font-bold text-white mb-2">
            {name}
          </h3>
          <p className="text-gray-300 mb-4 opacity-40 transform translate-y-4 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-y-0">
            {description}
          </p>
          
          {/* Features/Tools Tags */}
          <div className="flex flex-wrap gap-2 opacity-40 transform translate-y-4 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-y-0">
            {(features || tools || []).map((item) => (
              <span
                key={item}
                className="px-2 py-1 text-xs rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-500/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-50 transition-opacity duration-300 group-hover/card:opacity-100" />
    </motion.div>
  );
}

function InfiniteCarousel({ items, direction = 'ltr', type = 'tech' }: { 
  items: any[];
  direction?: 'ltr' | 'rtl';
  type?: 'tech' | 'lang';
}) {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      spaceBetween={24}
      slidesPerView="auto"
      loop={true}
      freeMode={{
        enabled: true,
        momentum: true,
        momentumRatio: 0.25
      }}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: direction === 'rtl'
      }}
      className="!overflow-hidden"
    >
      {items.map((item, index) => (
        <SwiperSlide key={item.name} className="!w-[400px]">
          <TechCard
            name={item.name}
            description={item.description}
            image={item.image}
            features={type === 'lang' ? item.features : undefined}
            tools={type === 'tech' ? item.tools : undefined}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function Technologies() {
  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">Tecnologías</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Mi stack tecnológico y experiencia en diferentes áreas del desarrollo.
        </p>
      </motion.div>

      {/* Technology Categories */}
      <div className="space-y-20">
        {techCategories.map((category, index) => (
          <div key={category.category} className="space-y-6">
            <h2 className="text-2xl font-bold text-white">{category.category}</h2>
            <InfiniteCarousel 
              items={category.technologies} 
              direction={index % 2 === 0 ? 'ltr' : 'rtl'}
              type="tech"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;