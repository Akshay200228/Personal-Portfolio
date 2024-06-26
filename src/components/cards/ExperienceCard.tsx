import { Experience } from "@libs/types";
import { motion } from "framer-motion";
import { FC } from "react";
import { BiRightArrow } from "react-icons/bi";
import { fadeIn } from "@libs/variants";

const ExperienceCard: FC<Experience> = ({ points, jobTitle, timeline }) => {
  return (
    <motion.div variants={fadeIn()} initial="initial" animate="animate" className="flex flex-col">
      <h3 className="text-xl">{jobTitle}</h3>
      <h4 className="mt-1 mb-4 text-base italic text-gray-300">{timeline}</h4>
      {points.map((point, i) => (
        <div key={i} className="flex items-center mb-2 space-x-4">
          <BiRightArrow className="flex-shrink-0 text-green-400" />
          <p>{point}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default ExperienceCard;