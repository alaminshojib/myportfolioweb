import { motion } from 'framer-motion';

const skills = [
  { name: "HTML5", color: "bg-red-600" },
  { name: "CSS3", color: "bg-blue-600" },
  { name: "JavaScript", color: "bg-yellow-400 text-black" },
  { name: "React", color: "bg-cyan-500" },
  { name: "Tailwind", color: "bg-teal-500" },
  { name: "Firebase", color: "bg-orange-500" },
  { name: "Framer Motion", color: "bg-pink-600" },
  { name: "GitHub", color: "bg-gray-800" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120 } },
  hover: { scale: 1.1, boxShadow: "0 8px 15px rgba(0,0,0,0.3)" },
};

function Skills() {
  return (
      <section className="py-20 px-6 bg-gradient-to-tr from-purple-900 via-indigo-900 to-purple-900 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-14 border-b-4 border-pink-500 inline-block pb-2 tracking-wide">
          My Skills
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map(({ name, color }, ) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover="hover"
              className={`cursor-pointer rounded-xl py-6 px-8 text-xl font-semibold shadow-lg ${color} select-none`}
            >
              {name}
            </motion.div>
          ))}
        </motion.div>
      </section>
    
  );
}

export default Skills;
