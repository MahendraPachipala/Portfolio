import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiExpress, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const techStack = [
  { name: "HTML", icon: <FaHtml5 size={28} className="text-orange-500" />, level: "Expert" },
  { name: "CSS", icon: <FaCss3Alt size={28} className="text-blue-500" />, level: "Expert" },
  { name: "JavaScript", icon: <FaJs size={28} className="text-yellow-400" />, level: "Advanced" },
  { name: "React.js", icon: <FaReact size={28} className="text-blue-400" />, level: "Advanced" },
  { name: "Next.js", icon: <SiNextdotjs size={28} className="text-white" />, level: "Advanced" },
  { name: "Node.js", icon: <FaNodeJs size={28} className="text-green-500" />, level: "Advanced" },
  { name: "Express.js", icon: <SiExpress size={28} className="text-gray-300" />, level: "Advanced" },
  { name: "MongoDB", icon: <SiMongodb size={28} className="text-green-400" />, level: "Intermediate" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} className="text-cyan-300" />, level: "Advanced" },
  { name: "Java", icon: <FaJava size={28} className="text-red-500" />, level: "Advanced" },
  { name: "Git", icon: <FaGitAlt size={28} className="text-orange-600" />, level: "Advanced" },
];

const proficiencyLevels = {
  "Expert": "w-5/6",
  "Advanced": "w-2/3",
  "Intermediate": "w-1/2",
  "Beginner": "w-1/3"
};

export default function TechStack() {
  return (
    <motion.section
      id="techstack"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 via-zinc-300 to-zinc-800">
              Tech Stack
            </span> 🛠️
          </h2>
          <p className="text-xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-700 via-zinc-300 to-zinc-700 max-w-2xl mx-auto">
            Technologies I've mastered and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              },
            },
          }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center p-6 rounded-xl bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 shadow-lg transition-all duration-300 group-hover:bg-gray-700 group-hover:border-blue-500 group-hover:shadow-blue-500/20">
                <div className="mb-4 p-4 rounded-full bg-gray-900 group-hover:bg-gray-800 transition-all duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{tech.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div 
                    className={`h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 ${proficiencyLevels[tech.level]}`}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-gray-400 italic">
            "Mastery is not about knowing all the tools, but knowing which tool to use and when."
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}