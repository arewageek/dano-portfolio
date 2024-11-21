"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function DownloadCV() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-2 px-6 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors shadow-lg"
    >
      <Download className="w-4 h-4" />
      <span>Download CV</span>
    </motion.button>
  );
}