import { RiArrowDownSLine } from "react-icons/ri";

import {  motion } from "framer-motion";
import { fadeIn, textContainer } from "@libs/variants";
// import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';

const HeroSection = () => {

  return (
    <section className="relative grid h-screen ">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [10, 0, 10],
          transition: {
            delay: 1,
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        className="absolute -translate-x-1/2 bottom-12 left-1/2"
      >
        <RiArrowDownSLine className="w-6 h-6" />
      </motion.span>
      <div className="grid p-10 sm:p-0 place-items-center">
        <motion.div variants={textContainer} initial="initial" animate="animate" className="space-y-3">
          <motion.p variants={fadeIn("up")} className="text-sm text-green-100 md:text-lg">
            Code • Coffee • Coldplay
          </motion.p>
          <motion.h1 variants={fadeIn("up")} className="text-4xl font-extrabold sm:text-7xl md:text-8xl">
            Hi, I'm Akshay <span className="text-[#24282B] text-stroke">Sankpal</span>
          </motion.h1>

          <motion.h3
            className="py-8 text-4xl font-extrabold text-transparent from-green-400 bg-clip-text bg-gradient-to-t to-white md:text-6xl"
          >
            <Typewriter
              options={{
                strings: [
                  'MERN Developer',
                  'Video Editor',
                  'UI/UX'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h3>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
