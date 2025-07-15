import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";

const About = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-indigo-800 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/src/assets/mda-transparent.png"
              alt="Md. Al Amin"
              className="w-72 h-72 object-cover rounded-2xl shadow-2xl border-4 border-white"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Md. Al Amin</h1>
              <h2 className="text-lg text-purple-200">
                Student, Faculty of Animal Husbandry  
                <br />Bangladesh Agricultural University
              </h2>
            </div>

            <p className="text-base text-slate-200 leading-relaxed">
              I'm an enthusiastic and motivated student with a deep interest in livestock science, research, and technological innovation. I strive to contribute meaningfully in the fields of animal nutrition, welfare, and sustainable livestock development.
            </p>

            {/* Grid of Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Career Objective */}
              <div className="bg-white/10 rounded-xl p-4 shadow-md backdrop-blur-md border border-white/20">
                <h3 className="text-xl font-semibold mb-2">🎯 Career Objective</h3>
                <p className="text-slate-200 text-sm">
                  To pursue advanced research and academic excellence in livestock feeding, biotechnology, or sustainable animal production systems through higher education and global collaboration.
                </p>
              </div>

              {/* Skills & Interests */}
              <div className="bg-white/10 rounded-xl p-4 shadow-md backdrop-blur-md border border-white/20">
                <h3 className="text-xl font-semibold mb-2">🛠️ Interests & Skills</h3>
                <ul className="list-disc list-inside text-slate-200 text-sm space-y-1">
                  <li>Livestock Nutrition & Formulation</li>
                  <li>Academic Research & Data Analysis</li>
                  <li>Web Development (React, Vite, Tailwind)</li>
                  <li>Scientific Writing & Public Speaking</li>
                </ul>
              </div>

              {/* Optional: Achievements */}
              <div className="bg-white/10 rounded-xl p-4 shadow-md backdrop-blur-md border border-white/20 md:col-span-2">
                <h3 className="text-xl font-semibold mb-2">🏆 Achievements</h3>
                <ul className="list-disc list-inside text-slate-200 text-sm space-y-1">
                  <li>Presented research at academic seminar on livestock feeding (2024)</li>
                  <li>Built a responsive personal portfolio site using React + HeroUI</li>
                  <li>Ranked top 5% in Animal Nutrition coursework</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;
