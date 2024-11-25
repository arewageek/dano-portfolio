"use client";

import { motion } from "framer-motion";
import { IProject, ProjectCard } from "@/components/projects/project-card";
import { Briefcase } from "lucide-react";

const projects: IProject[] = [
  {
    name: "Rune Stone NFT",
    index: 0,
    role: "Lead Ambassador",
    description: "Runeston is an NFT collection created for the community on the TON blockchain",
    links: {
      twitter: "https://twitter.com/RunestonNFT",
      telegram: "https://t.co/fgbSpoqnQS",
    },
    duration: "2024"
  },
  {
    name: "Brokie Inu",
    index: 1,
    role: "Ambassador",
    description: "Brokie Inu symbolises hard core resilience. For all degens that have been rug pulled, liquidated trading on leverage by scam wicks, scammed by fraudulent crypto projects",
    links: {
      twitter: "https://x.com/BrokieInu",
      telegram: "https://t.me/brokieinus",
      // discord: "https://discord.gg/ton"
      website: "https://brokieinu.wtf/"
    },
    duration: "2024"
  },
  {
    name: "STON.fi",
    index: 2,
    role: "Ambassador",
    description: "A decentralized automated market maker (AMM) built on the TON blockchain providing virtually zero fees, low slippage, an extremely easy interface, and direct integration with TON wallets",
    links: {
      twitter: "https://x.com/ston_fi",
      telegram: "https://t.me/stonfidex",
      website: "https://ston.fi"
    },
    duration: "2024"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#eee5d3]" id="projects">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-b from-slate-800/90 tos,sx,xx,,c,,c-transparent"
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
                <Briefcase className="w-full h-full text-[#eee5d3]" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-slate-800 mb-6"
            >
              Project Experience
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-slate-600/70">
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
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-0 w-72 h-72 bg-slate-600/60 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
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