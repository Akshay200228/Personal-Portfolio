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
        <title>Akshay Sankpal | Web Developer | Portfolio</title>
        <meta name="description" content="Akshay Sankpal is a Web Developer specializing in React.js, Node.js, and modern web technologies. View my portfolio to see my projects and experience." />
        <meta name="keywords" content="Akshay Sankpal, Web Developer, React.js, Node.js, Portfolio, JavaScript, Frontend Developer, Backend Developer" />
        <meta name="author" content="Akshay Sankpal" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Akshay Sankpal | Web Developer | Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Akshay Sankpal, a skilled Web Developer with expertise in React.js and Node.js." />
        <meta property="og:image" content="/images/portfolio-thumbnail.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akshay Sankpal | Web Developer | Portfolio" />
        <meta name="twitter:description" content="View the projects and experience of Akshay Sankpal, a Web Developer specializing in modern web technologies." />
        <meta name="twitter:image" content="/images/portfolio-thumbnail.jpg" />
        <meta name="twitter:site" content="@your_twitter_handle" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourwebsite.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
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
