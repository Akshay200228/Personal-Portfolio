import { experiences } from "@libs/data";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn, textContainer } from "@libs/variants";
import { AnimateWhenVisible, SectionContainer, SectionTitle } from "@components/layouts";
import { ExperienceCard } from "@components/cards";

const ExperienceSection = () => {
  const [selected, setSelected] = useState<"Bot2Do" | "Freelancer">("Bot2Do");

  return (
    <SectionContainer id="experience">
      <SectionTitle title="Experience" />
      <AnimateWhenVisible variants={textContainer}>
        <motion.div variants={fadeIn()} className="flex mb-4 space-x-6 ">
          <span
            className={classNames("cursor-pointer", {
              "border-b-2 pb-2": selected === "Bot2Do",
            })}
            onClick={() => setSelected("Bot2Do")}
          >
            Bot2Do
          </span>
          <span
            className={classNames("cursor-pointer", {
              "border-b-2 pb-2": selected === "Freelancer",
            })}
            onClick={() => setSelected("Freelancer")}
          >
            Freelancer
          </span>
        </motion.div>

        {selected === "Bot2Do" && <ExperienceCard {...experiences[0]} />}
        {selected === "Freelancer" && <ExperienceCard {...experiences[1]} />}
      </AnimateWhenVisible>
    </SectionContainer>
  );
};

export default ExperienceSection;
