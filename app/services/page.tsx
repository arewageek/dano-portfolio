"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/services/service-card";
import { Coins, Users, Presentation, TrendingUp, LineChart, Megaphone, Group, Briefcase, Pencil, NotebookText } from "lucide-react";

const services = [
  {
    icon: <Group />,
    title: "Community Engagement",
    description: "Building and nurturing vibrant communities through meaningful interactions, AMA sessions, and educational initiatives.",
    gradient: "from-slate-800 to-slate-600",
    bgAccent: "group-hover:shadow-slate-800/25"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Brand Advocacy",
    description: "Representing your project with authenticity and authority to establish trust and long-term loyalty.",
    gradient: "from-slate-700 to-slate-500",
    bgAccent: "group-hover:shadow-slate-700/25"
  },
  {
    icon: <NotebookText className="w-8 h-8" />,
    title: "Content & Outreach",
    description: "Creating tailored content strategies and delivering targeted campaigns to expand reach and maximize engagement.",
    gradient: "from-slate-800 to-slate-600",
    bgAccent: "group-hover:shadow-slate-800/25"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "KOL Collaboration",
    description: " Leveraging my network to collaborate with influencers and align your project with industry leaders.",
    gradient: "from-slate-700 to-slate-500",
    bgAccent: "group-hover:shadow-slate-700/25"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Market Insights & Strategy",
    description: "Providing valuable industry insights and strategic recommendations to position your project for success.",
    gradient: "from-slate-800 to-slate-600",
    bgAccent: "group-hover:shadow-slate-800/25"
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Event Representation",
    description: " Acting as your project’s representative at events, conferences, and hackathons to strengthen visibility and credibility.",
    gradient: "from-slate-700 to-slate-500",
    bgAccent: "group-hover:shadow-slate-700/25"
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#eee5d3]">
      <div className="relative overflow-hidden">
        {/* Hero Background */}
        {/* <div className="absolute inset-0 bg-[#eee5d3]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-transparent"
          />
        </div> */}

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
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-slate-800 to-slate-600 p-5 shadow-xl">
                <Coins className="w-full h-full text-[#eee5d3]" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-slate-800 mb-6"
            >
              Professional Services
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-slate-700/90">
                What Makes Me Unique
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-slate-700/80 max-w-2xl mx-auto"
            >
              I help projects connect with the right audience that believe in the solution they bring onchain. I simplify the entire growth process for new and established projects.
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
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-0 w-72 h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
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