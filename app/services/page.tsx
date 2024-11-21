"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/services/service-card";
import { Coins, Users, Presentation, TrendingUp, LineChart, Megaphone } from "lucide-react";

const services = [
  {
    icon: <Coins className="w-8 h-8" />,
    title: "Crypto Advisory",
    description: "Expert guidance on cryptocurrency investments, portfolio optimization, and risk management strategies tailored to your goals.",
    gradient: "from-zinc-800 to-zinc-600",
    bgAccent: "group-hover:shadow-zinc-800/25"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Building",
    description: "Strategic community development and engagement strategies to foster a thriving ecosystem around your blockchain project.",
    gradient: "from-zinc-700 to-zinc-500",
    bgAccent: "group-hover:shadow-zinc-700/25"
  },
  {
    icon: <Presentation className="w-8 h-8" />,
    title: "Project Representation",
    description: "Professional representation at key industry events, conferences, and online platforms to amplify your project's visibility.",
    gradient: "from-zinc-800 to-zinc-600",
    bgAccent: "group-hover:shadow-zinc-800/25"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Market Analysis",
    description: "In-depth market research and trend analysis to help you make informed decisions in the volatile crypto market.",
    gradient: "from-zinc-700 to-zinc-500",
    bgAccent: "group-hover:shadow-zinc-700/25"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Trading Strategy",
    description: "Customized trading strategies and technical analysis to maximize returns while maintaining risk management.",
    gradient: "from-zinc-800 to-zinc-600",
    bgAccent: "group-hover:shadow-zinc-800/25"
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Brand Ambassador",
    description: "Strategic brand representation and advocacy to build trust and credibility within the cryptocurrency community.",
    gradient: "from-zinc-700 to-zinc-500",
    bgAccent: "group-hover:shadow-zinc-700/25"
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#eee5d3]">
      <div className="relative overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-[#eee5d3]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-transparent"
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
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-600 p-5 shadow-xl">
                <Coins className="w-full h-full text-[#eee5d3]" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-[#eee5d3] mb-6"
            >
              Professional Services
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-zinc-300/90">
                Elevating Your Crypto Journey
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-zinc-300/80 max-w-2xl mx-auto"
            >
              Unlock the full potential of your blockchain ventures with expert guidance, strategic insights, and professional representation.
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-zinc-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-0 w-72 h-72 bg-zinc-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </motion.div>
      </div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}