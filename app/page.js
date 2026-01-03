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
    <div className="bg-black text-white relative overflow-x-hidden">
      <CustomCursor component={component} />
      <Hamburger />

      {/* Hero Section */}
      <header id="home" className="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">
        {/* Adjusted scale for mobile to prevent overflow, kept 130 for desktop */}
        <div className="scale-100 md:scale-125 lg:scale-130 flex flex-col md:flex-row-reverse items-center md:items-center gap-8 md:gap-12">
          
          {/* Profile Image */}
          <div
            className={`w-40 h-40 md:w-52 md:h-52 flex justify-center items-center transform ease-in-out duration-1000 transition-opacity ${
              showDiv ? "opacity-0" : "opacity-100"
            }`}
          >
            {!showDiv && (
              <Image
                src="/images/DSC_6875.JPG"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                priority
              />
            )}
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left max-w-2xl">
            {/* Responsive font size: text-3xl on mobile, text-5xl on desktop */}
            <h1 className="text-3xl md:text-5xl min-h-[4rem] md:h-14 font-extrabold tracking-wide fadein-text transition-opacity duration-1000">
              Naga Mahendra Pachipala
            </h1>

            <div className="text-lg md:text-xl font-semibold fadein-text text-blue-400">
              <Typewriter
                options={{
                  strings: ["Web Developer", "MERN Stack Engineer", "Full-Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            {/* Replaced w-150 with responsive max-width to prevent horizontal scroll */}
            <p
              className={`mt-4 transform transition-opacity ease-in-out duration-1000 ${
                showDiv ? "opacity-0" : "opacity-100"
              } metaltext w-full max-w-md md:max-w-xl mx-auto md:mx-0`}
            >
              Passionate full-stack web developer with expertise in React.js,
              Next.js, Node.js, Express.js, and MongoDB.
            </p>

            {/* CTA Buttons */}
            <div className={`mt-8 ease-in-out duration-1000 ${
                  showDiv ? "opacity-0" : "opacity-100"
                } flex flex-wrap gap-4 justify-center md:justify-start`}>
              <a
                href={process.env.NEXT_PUBLIC_RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition text-sm md:text-base"
              >
                View Resume
              </a>

              <button
                onClick={scrollToProjects}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md transition text-sm md:text-base"
              >
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className={`ease-in-out duration-1000 ${
                  showDiv ? "opacity-0" : "opacity-100"
                } flex gap-6 mt-8 justify-center md:justify-start`}>
              <Link href="https://github.com/MahendraPachipala" target="_blank">
                <FaGithub size={28} className="hover:text-blue-400 transition duration-300" />
              </Link>
              <Link href="https://www.linkedin.com/in/naga-mahendra-pachipala-54216623a/" target="_blank">
                <FaLinkedin size={28} className="hover:text-blue-400 transition duration-300" />
              </Link>
              <Link href="mailto:mahendrapachipala123@gmail.com">
                <FaEnvelope size={28} className="hover:text-blue-400 transition duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Other Sections */}
      <section id="tech-stack" className="py-10">
        <TechStack />
      </section>

      <Projects />

      {/* Contact Section */}
      <section id="contact" className="p-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="max-w-md mx-auto mb-6 text-gray-400">Feel free to reach out via email or connect with me on social media.</p>
        <div className="flex justify-center space-x-6">
          <Link href="https://github.com/MahendraPachipala" target="_blank">
            <FaGithub size={30} className="hover:text-blue-400 transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/naga-mahendra-pachipala-54216623a/" target="_blank">
            <FaLinkedin size={30} className="hover:text-blue-400 transition" />
          </Link>
          <Link href="mailto:mahendrapachipala123@gmail.com">
            <FaEnvelope size={30} className="hover:text-blue-400 transition" />
          </Link>
        </div>
      </section>

      {/* Down Arrow Button - Hidden on very small screens to avoid UI clutter */}
      <button
        onClick={scrollToNextSection}
        className="animate-bounce fixed bottom-6 right-6 text-white p-3 rounded-full shadow-lg bg-gray-800/50 backdrop-blur-md hover:bg-gray-600 transition z-50"
        aria-label="Scroll to Next Section"
      >
        <FaArrowAltCircleDown size={24} className="md:w-8 md:h-8" />
      </button>
    </div>
  );
}