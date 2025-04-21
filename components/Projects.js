import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen p-8 text-white flex flex-col justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-700 via-zinc-300 to-zinc-700 text-center mb-12">Projects</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          {
            title: "Movie Ticket Booking System",
            description:
              "A full-featured movie ticket booking platform with seat selection and online payment.",
            link: "https://movie-ticket-booking-pi-tan.vercel.app/home",
          },
          {
            title: "Travel Booking System",
            description:
              "A MERN-based travel booking system with weather updates and user reviews.",
            link: "https://travel-booking-frontend.vercel.app/home",
          },
          {
            title: "News Aggregator App",
            description: "AI-powered news summarization and real-time aggregation.",
            link: "https://news-app-six-amber.vercel.app/",
          },
          {
            title: "Task Management System",
            description:
              "AI-integrated task planner with Google Calendar automation.",
            link: "https://ai-task-manager-murex.vercel.app/",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            className="border border-gray-900 relative group block overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative w-full h-48 overflow-hidden rounded-md">
            <a href = {project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
              <iframe
                src={project.link}
                className="pointer-events-none absolute top-0 left-0 w-[125%] h-full scale-[0.8] transform origin-top-left"
                loading="lazy"
              ></iframe>
            </a>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline mt-2 inline-block"
              >
                View Full Project →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
