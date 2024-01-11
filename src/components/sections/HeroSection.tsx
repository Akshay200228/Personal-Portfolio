import { RiArrowDownSLine } from "react-icons/ri";
import { GiTie } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn, textContainer } from "@libs/variants";
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <section className="relative grid h-screen text-white bg-gradient-to-b from-gray-800 to-gray-900">
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
        <RiArrowDownSLine className="w-6 h-6 text-green-500" />
      </motion.span>
      <div className="grid p-10 sm:p-0 place-items-center">
        <motion.div variants={textContainer} initial="initial" animate="animate" className="space-y-3 text-center">
          <motion.p variants={fadeIn("up")} className="text-sm text-gray-400 md:text-lg">
            Code • Coffee • Coldplay
          </motion.p>
          <motion.h1 variants={fadeIn("up")} className="text-6xl font-extrabold text-white sm:text-7xl md:text-8xl">
            Hi, I'm Akshay <span className="text-[#24282B] text-stroke">Sankpal</span>
          </motion.h1>

          <motion.h3
            className="py-8 text-2xl font-extrabold text-transparent sm:text-4xl from-green-400 bg-clip-text bg-gradient-to-t to-white md:text-6xl"
          >
            <Typewriter
              options={{
                strings: [
                  'MERN Stack Developer',
                  'FrontEnd Developer',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h3>
        </motion.div>
        <a
          href="/akshay_resume.pdf"
          download="Akshay_Sankpal_Resume.pdf"
          className="flex items-center justify-center px-4 py-2 my-4 transition duration-300 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 dark:bg-dark-500"
        >
          <GiTie className="w-6 h-6 mr-2" />
          <span className="font-semibold">Download Resume</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
