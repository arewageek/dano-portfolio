"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    color: "hover:text-blue-400"
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    color: "hover:text-zinc-600"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "hover:text-blue-600"
  }
];

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-white/80 shadow-md backdrop-blur-sm ${social.color} transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        );
      })}
    </div>
  );
}