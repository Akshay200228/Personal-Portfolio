import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { fadeIn, textContainer } from "@libs/variants";
import SectionTitle from "@components/layouts/SectionTitle";
import { AnimateWhenVisible } from "@components/layouts";

const ContactSection = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <motion.div className="w-full px-6 pb-6 md:px-40" id="contacts">
      <SectionTitle title=" Let's Connect :" />

      <AnimateWhenVisible variants={textContainer}>
        <motion.div variants={textContainer} className="flex items-center justify-center space-x-6">
          <motion.span
            onClick={() => openLink("https://www.linkedin.com/in/akshay-sankpal-a12426259/")}
            variants={fadeIn()}
            className="p-4 border border-green-700 rounded-full hover:bg-green-700"
          >
            <FaLinkedinIn className="w-4 h-4 md:w-6 md:h-6 " />
          </motion.span>{" "}
          <motion.span
            onClick={() => openLink("https://twitter.com/sankpal2812")}
            variants={fadeIn()}
            className="p-4 border border-green-700 rounded-full hover:bg-green-700"
          >
            <FiTwitter className="w-4 h-4 md:w-6 md:h-6 " />
          </motion.span>{" "}
          <motion.span
            onClick={() => window.open("https://github.com/Akshay200228")}
            variants={fadeIn()}
            className="p-4 border border-green-700 rounded-full hover:bg-green-700"
          >
            <FiGithub className="w-4 h-4 md:w-6 md:h-6 " />
          </motion.span>
        </motion.div>
      </AnimateWhenVisible>
    </motion.div>
  );
};

export default ContactSection;
