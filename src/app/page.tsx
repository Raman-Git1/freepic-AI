"use client"

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <motion.h1 initial={{
          opacity:0,
          scale:0.95,
          filter:"blur(10px)",
        }}
        animate={{
          opacity:1,
          scale:1,
          filter:"blur(0px)",

        }}
        transition={{duration:0.55}} className="text-4xl sm:text-6xl fon-bold">
          FreePic
        </motion.h1>
        <motion.p initial={{
          opacity:0,
          scale:0.95,
          filter:"blur(10px)",
        }}
        animate={{
          opacity:1,
          scale:1,
          filter:"blur(0px)",

        }}
        transition={{duration:0.67 , delay: 0.55}}className="text-center">Generate Stunning images from text using AI models for FREE </motion.p>
      </div>
    </div>
  );
}
