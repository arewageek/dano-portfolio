"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/resume/project-card";
import { Briefcase } from "lucide-react";

const projects = [
  {
    name: "Celestial Protocol",
    role: "Lead Community Manager & KOL",
    description: "A revolutionary DeFi protocol focusing on sustainable yield generation through algorithmic trading strategies and cross-chain interoperability.",
    links: {
      twitter: "https://twitter.com/CelestialFi",
      telegram: "https://t.me/CelestialFi",
      discord: "https://discord.gg/celestial"
    }
  },
  {
    name: "Nova Network",
    role: "Strategic Advisor",
    description: "Layer-1 blockchain platform pioneering in scalable smart contract solutions with a focus on enterprise adoption and cross-chain compatibility.",
    links: {
      twitter: "https://twitter.com/NovaNetwork",
      telegram: "https://t.me/NovaNetwork",
      discord: "https://discord.gg/nova"
    }
  },
  {
    name: "Quantum Finance",
    role: "Brand Ambassador",
    description: "Decentralized derivatives platform leveraging quantum computing principles for advanced trading algorithms and risk management.",
    links: {
      twitter: "https://twitter.com/QuantumFi",
      telegram: "https://t.me/QuantumFi",
      discord: "https://discord.gg/quantum"
    }
  }
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#eee5d3]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-b from-[#1a53f8]/90 to-transparent"
          />
        </div>

        {/* Hero Content */}
        <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-block"
            >
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-[#1a53f8] to-[#1a53f8]/60 p-5 shadow-xl">
                <Briefcase className="w-full h-full text-[#eee5d3]" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-[#eee5d3] mb-6"
            >
              Project Experience
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-blue-100/90">
                Building the Future of Web3
              </span>
            </motion.h1>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#1a53f8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#1a53f8]/60 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}