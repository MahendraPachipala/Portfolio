"use client";
import Image from "next/image";
import CustomCursor from "@/components/Cursor";
import { useEffect, useState } from "react";
import Hamburger from "@/components/hamburger";
import Link from "next/link";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import TechStack from "@/components/TechStack";
import GitHubStats from "@/components/Github";
import Projects from "@/components/Projects";

export default function Home() {
  const [component, setComponent] = useState(null);
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // List of sections for smooth scrolling
  const sections = ["home", "tech-stack", "projects", "contact"];

  const scrollToProjects = () => {   
    document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToNextSection = () => {
    const currentSectionIndex = sections.findIndex((id) => {
      const section = document.getElementById(id);
      if (!section) return false;
      return section.getBoundingClientRect().top >= 0;
    });

    if (currentSectionIndex !== -1 && currentSectionIndex < sections.length - 1) {
      document
        .getElementById(sections[currentSectionIndex + 1])
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white relative">
      <CustomCursor component={component} />
      <Hamburger />

      {/* Hero Section */}
      <header id="home" className="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <div className="scale-130 flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
          
          {/* Profile Image with Fade-in Effect */}
          <div
            className={`w-40 h-40 md:w-52 md:h-52 transform ease-in-out duration-1000 scale-110 transition-opacity ${
              showDiv ? "opacity-0" : "opacity-100"
            }`}
          >
            {!showDiv && (
              <Image
                src="/images/profile.png"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                priority
              />
            )}
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl h-14 font-extrabold tracking-wide fadein-text transition-opacity duration-1000">
              Naga Mahendra Pachipala
            </h1>

            {/* Typing Effect for Title */}
            <div className="text-md font-semibold fadein-text">
              <Typewriter
                options={{
                  strings: ["Web Developer", "MERN Stack Engineer", "Full-Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <p
              className={`transform transition-opacity ease-in-out duration-2000 ${
                showDiv ? "opacity-0" : "opacity-100"
              } metaltext w-150`}
            >
              Passionate full-stack web developer with expertise in React.js,
              Next.js, Node.js, Express.js, and MongoDB.
            </p>

            {/* CTA Buttons */}
            <div className={`mt-6 ease-in-out duration-2000 ${
                  showDiv ? "opacity-0" : "opacity-100"
                } flex gap-4 justify-center md:justify-start`}>
              <a
                href={process.env.NEXT_PUBLIC_RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition"
              >
                View Resume
              </a>

              <button
                onClick={scrollToProjects}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md transition"
              >
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className={`ease-in-out duration-2000 ${
                  showDiv ? "opacity-0" : "opacity-100"
                } flex gap-6 mt-5 justify-center md:justify-start`}>
              <Link href="https://github.com/MahendraPachipala" target="_blank">
                <FaGithub size={30} className="hover:text-gray-400 transition duration-300" />
              </Link>
              <Link href="https://www.linkedin.com/in/naga-mahendra-pachipala-54216623a/" target="_blank">
                <FaLinkedin size={30} className="hover:text-gray-400 transition duration-300" />
              </Link>
              <Link href="mailto:mahendrapachipala123@gmail.com">
                <FaEnvelope size={30} className="hover:text-gray-400 transition duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Tech Stack Section */}
      <section id="tech-stack">
        <TechStack />
      </section>

      {/* Projects Section */}
      <Projects />

      

      {/* Contact Section */}
      <section id="contact" className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Feel free to reach out via email or connect with me on social media.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="https://github.com/MahendraPachipala" target="_blank">
            <FaGithub size={30} className="hover:text-gray-400" />
          </Link>
          <Link href="https://www.linkedin.com/in/naga-mahendra-pachipala-54216623a/" target="_blank">
            <FaLinkedin size={30} className="hover:text-gray-400" />
          </Link>
          <Link href="mailto:mahendrapachipala123@gmail.com">
                <FaEnvelope size={30} className="hover:text-gray-400 transition duration-300" />
              </Link>
        </div>
      </section>

      {/* Down Arrow Button */}
      <button
        onClick={scrollToNextSection}
        className="animate-bounce fixed bottom-6 right-6 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
        aria-label="Scroll to Next Section"
      >
        <FaArrowAltCircleDown size={30} />
      </button>
    </div>
  );
}
