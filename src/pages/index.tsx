import { SplashScreen } from "@components/layouts";
import Head from "next/head";

import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
} from "@components/sections";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Akshay Sankpal | Web Developer | portfolio </title>
      </Head>
      <SplashScreen />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
