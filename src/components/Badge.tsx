import React from "react";
import { motion } from "framer-motion";

interface BadgeItem {
  text: string;
  icon?: string; // URL del ícono
  url?: string;  // URL opcional para redirigir
}

interface BadgeProps {
  badges: BadgeItem[];
}

const Badge: React.FC<BadgeProps> = ({ badges }) => {
  return (
    <div className="flex flex-nowrap gap-4 p-3 overflow-x-auto">
      {badges.map((badge, index) => (
        <motion.a
          key={index}
          href={badge.url || "#"}
          target={badge.url ? "_blank" : undefined}
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
          className="relative flex items-center justify-start gap-2 px-4 py-2 bg-transparent rounded-lg shadow-lg hover:scale-105 transition-transform"
          style={{
            background: "rgba(31, 41, 55, 0.7)", // Fondo translúcido
            backdropFilter: "blur(10px)", // Efecto glass
            minWidth: "fit-content", // Asegura que los badges pequeños no se colapsen
          }}
        >
          {/* Ícono del badge */}
          {badge.icon && (
            <img
              src={badge.icon}
              alt={`${badge.text} icon`}
              className="w-5 h-5 flex-shrink-0"
            />
          )}
          {/* Texto del badge */}
          <span className="font-bold text-sm text-white truncate">{badge.text}</span>

          {/* Borde animado con los nuevos colores */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            animate={{
              borderColor: [
                "#ff0ab1", // Color rosa neón
                "#ff002f", // Rojo neón
                "#ff0ab1", // Volver al rosa
              ],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              border: "2px solid #ff0ab1", // Base en rosa
              filter: "drop-shadow(0 0 8px rgba(255, 10, 177, 0.7))", // Efecto neón
            }}
          />

          {/* Efecto lámpara de lava */}
          <motion.div
            className="absolute w-[150%] h-[150%] bg-gradient-to-r from-[#ff0ab1] via-[#ff002f] to-[#ff0ab1] rounded-full blur-3xl opacity-20"
            animate={{
              // x: [-50, 50, -50],
              // y: [-50, 50, -50],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.a>
      ))}
    </div>
  );
};

export default Badge;
