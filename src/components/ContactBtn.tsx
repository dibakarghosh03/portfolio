"use client";

import { motion } from "framer-motion";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const ContactBtn = () => {
  return (
    <motion.a
      href="https://linkedin.com/in/dibakar-ghosh-7227052b5"
      target="__blank"
      className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 border border-gray-900 w-max"
      whileHover={{ scale: 1.08 }}
    >
      <span className="font-semibold">Contact Me</span>
      <ArrowUpRightIcon className="size-4" />
    </motion.a>
  );
};

export default ContactBtn;
