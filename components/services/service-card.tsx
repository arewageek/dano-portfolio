"use client";

import CONFIG from "@/app-config";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  bgAccent: string;
  index: number;
}

export function ServiceCard({ icon, title, description, gradient, bgAccent, index }: ServiceCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.1
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group relative"
    >
      {/* Animated Border */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300`} />

      {/* Card Content */}
      <div className={`relative h-full bg-[#eee5d3]/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl ${bgAccent} transition-all duration-300 group-hover:shadow-2xl border border-zinc-800/10`}>
        {/* Icon Container */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center text-[#eee5d3] mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>

        {/* Title with Gradient on Hover */}
        <h3 className="text-2xl font-bold text-zinc-800 mb-4 group-hover:bg-gradient-to-r group-hover:from-zinc-800 group-hover:to-zinc-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-600 leading-relaxed mb-6 group-hover:text-zinc-700 transition-colors duration-300">
          {description}
        </p>

        {/* Learn More Button */}
        <motion.a href={CONFIG.telegram}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center text-zinc-800 font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r ${gradient} group-hover:bg-clip-text transition-all duration-300`}
        >
          Request Service
          <svg
            className={`ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}