"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProfileImage() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="relative"
    >
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-zinc-800/10 shadow-xl">
        <Image
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          alt="Profile"
          width={224}
          height={224}
          className="object-cover"
        />
      </div>
      <motion.div
        className="absolute -bottom-2 -right-2 bg-zinc-800 text-white p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}