import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-white text-2xl" />,
    bg: "bg-orange-600",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-white text-2xl" />,
    bg: "bg-blue-600",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-white text-2xl" />,
    bg: "bg-yellow-400",
  },
  {
    name: "React",
    icon: <FaReact className="text-white text-2xl" />,
    bg: "bg-cyan-400",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-white text-2xl" />,
    bg: "bg-sky-400",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-white text-2xl" />,
    bg: "bg-red-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, type: "spring" },
  }),
};

const Skills = () => (
  <section
    id="skills"
    className="min-h-screen bg-[#273449] text-white flex flex-col justify-center items-center px-4 py-12"
  >
    <h2 className="text-3xl font-bold mb-8">Skills</h2>
    <div className="max-w-4xl mx-auto mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 gap-y-10">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          className="group bg-gray-900/70 border border-gray-700 rounded-2xl shadow-md shadow-black/20 hover:shadow-xl hover:shadow-black/40 transition-all duration-200 p-6 flex flex-col items-center cursor-pointer hover:scale-[1.05]"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <div
            className={`w-14 h-14 flex items-center justify-center rounded-full shadow-inner border-2 border-white/10 mb-3 transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-110 ${skill.bg}`}
            style={{ boxShadow: "inset 0 2px 8px rgba(0,0,0,0.15)" }}
          >
            {skill.icon}
          </div>
          <span className="font-medium text-lg">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
