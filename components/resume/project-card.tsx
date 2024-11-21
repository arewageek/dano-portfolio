"use client";

import { motion } from "framer-motion";
import { Twitter, MessageCircle, MessagesSquare } from "lucide-react";

interface ProjectCardProps {
  name: string;
  role: string;
  description: string;
  links: {
    twitter: string;
    telegram: string;
    discord: string;
  };
  index: number;
}

export function ProjectCard({ name, role, description, links, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.2
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
      className="group relative h-full"
    >
      {/* Animated Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1a53f8] to-[#1a53f8]/60 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300" />
      
      {/* Card Content */}
      <div className="relative h-full bg-[#eee5d3]/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transition-all duration-300 group-hover:shadow-2xl border border-[#1a53f8]/10">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            {/* Project Name with Gradient on Hover */}
            <h3 className="text-2xl font-bold text-[#1a53f8] mb-2 group-hover:bg-gradient-to-r group-hover:from-[#1a53f8] group-hover:to-[#1a53f8]/60 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {name}
            </h3>

            {/* Role */}
            <p className="text-lg text-[#1a53f8]/80 mb-3 font-medium">
              {role}
            </p>

            {/* Description */}
            <p className="text-zinc-600 leading-relaxed mb-6 group-hover:text-zinc-700 transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-start gap-4 pt-4">
            <motion.a
              href={links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#1a53f8] to-[#1a53f8]/60 p-2.5 text-white shadow-lg hover:shadow-[#1a53f8]/25 transition-shadow duration-300"
            >
              <Twitter className="w-full h-full" />
            </motion.a>
            <motion.a
              href={links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#1a53f8] to-[#1a53f8]/60 p-2.5 text-white shadow-lg hover:shadow-[#1a53f8]/25 transition-shadow duration-300"
            >
              <MessageCircle className="w-full h-full" />
            </motion.a>
            <motion.a
              href={links.discord}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#1a53f8] to-[#1a53f8]/60 p-2.5 text-white shadow-lg hover:shadow-[#1a53f8]/25 transition-shadow duration-300"
            >
              <MessagesSquare className="w-full h-full" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}