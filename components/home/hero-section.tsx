"use client";

import { motion } from "framer-motion";
import { ProfileImage } from "../ui/profile-image";
import { SocialLinks } from "../ui/social-links";
import { DownloadCV } from "../ui/download-cv";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-16 space-y-8 pt-24"
    >
      <ProfileImage />
      
      <motion.div 
        variants={itemVariants}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-800">
          Dano Crypt
        </h1>
        <h2 className="text-xl md:text-2xl text-zinc-600 font-medium">
          KOL and Project Ambassador
        </h2>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="max-w-2xl text-center text-zinc-600"
      >
        Bridging the gap between innovative blockchain projects and their communities. 
        Passionate about creating meaningful connections in the Web3 space.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center gap-6"
      >
        <SocialLinks />
        <DownloadCV />
      </motion.div>
    </motion.div>
  );
}