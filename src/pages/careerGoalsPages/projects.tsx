import { motion } from 'framer-motion';
import { RocketLaunchIcon, DevicePhoneMobileIcon, StarIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    key: "matrimony",
    icon: <RocketLaunchIcon className="w-8 h-8 text-purple-400" />,
    title: "Matrimony Platform",
    desc: "Firebase-based matchmaking app.",
    color: "bg-purple-700/40",
  },
  {
    key: "portfolio",
    icon: <DevicePhoneMobileIcon className="w-8 h-8 text-indigo-400" />,
    title: "Portfolio Website",
    desc: "Built with Vite, HeroUI & Framer Motion.",
    color: "bg-indigo-700/40",
  },
  {
    key: "feed-calculator",
    icon: <StarIcon className="w-8 h-8 text-pink-400" />,
    title: "Feed Calculator",
    desc: "Daily livestock ration app.",
    color: "bg-pink-700/40",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 14 }
  },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 20px 30px rgba(0,0,0,0.3)", 
    backgroundColor: "rgba(255, 255, 255, 0.15)" // subtle overlay on hover
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 px-6 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-indigo-800/80 text-white"
    >
      <div className="w-full mx-auto text-center">
        <motion.h2
          className="text-5xl w-fit mx-auto font-bold mb-16 border-b-4 border-indigo-400 inline-block pb-2 tracking-wide drop-shadow-sm"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Projects
        </motion.h2>
      </div>

      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map(({ key, icon, title, desc, color }) => (
          <motion.div
            key={key}
            variants={itemVariants}
            whileHover="hover"
            className="bg-white/10 p-8 rounded-3xl shadow-md cursor-pointer select-none transition-colors duration-300"
          >
            <div className={`inline-flex items-center justify-center mb-6 p-4 rounded-full ${color}`}>
              {icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-200 leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
