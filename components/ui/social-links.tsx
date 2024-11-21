"use client";

import { motion } from "framer-motion";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa"


export function SocialLinks({ links }: { links: { discord: string, telegram: string, twitter: string } }) {
  const socialLinks = [
    {
      name: "Twitter",
      icon: FaTwitter,
      href: links.twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "Discord",
      icon: FaDiscord,
      href: links.discord,
      color: "hover:text-zinc-600"
    },
    {
      name: "Telegram",
      icon: FaTelegramPlane,
      href: links.telegram,
      color: "hover:text-blue-600"
    }
  ];
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