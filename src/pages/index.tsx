import DefaultLayout from "@/layouts/default";
import {
  SparklesIcon as OutlineSparklesIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  StarIcon,
  HeartIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
// import { SparklesIcon } from "@heroicons/react/24/solid";
import MyPhoto from "@/assets/mda-transparent.png";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
// import { useEffect, useState } from "react";

export default function HomePage() {
  // Cursor effect
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [clicked, setClicked] = useState(false);
  // const [hovering, setHovering] = useState(false);

  // useEffect(() => {
  //   const move = (e: MouseEvent) => {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //   };

  //   const handleClick = () => {
  //     setClicked(true);
  //     setTimeout(() => setClicked(false), 150);
  //   };

  //   const handleMouseOver = (e: MouseEvent) => {
  //     const tag = (e.target as HTMLElement)?.tagName;
  //     if (["A", "BUTTON", "INPUT", "TEXTAREA", "LABEL"].includes(tag)) {
  //       setHovering(true);
  //     }
  //   };

  //   const handleMouseOut = () => setHovering(false);

  //   window.addEventListener("mousemove", move);
  //   window.addEventListener("mousedown", handleClick);
  //   window.addEventListener("mouseover", handleMouseOver);
  //   window.addEventListener("mouseout", handleMouseOut);

  //   return () => {
  //     window.removeEventListener("mousemove", move);
  //     window.removeEventListener("mousedown", handleClick);
  //     window.removeEventListener("mouseover", handleMouseOver);
  //     window.removeEventListener("mouseout", handleMouseOut);
  //   };
  // }, []);

  // const size = hovering ? 60 : clicked ? 40 : 24;

  return (
    <DefaultLayout>
      {/* Custom Cursor */}
      {/* <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`,
          transition: "transform 0.07s ease-out",
        }}
      >
        <div
          className={`rounded-full border transition-all duration-150 ease-out flex items-center justify-center ${
            hovering
              ? "border-pink-400 bg-pink-500/10 shadow-[0_0_20px_5px_rgba(255,0,128,0.3)]"
              : clicked
              ? "border-white bg-white/10 scale-125"
              : "border-white"
          }`}
          style={{
            width: size,
            height: size,
          }}
        >
          <SparklesIcon
            className={`w-4 h-4 ${
              hovering ? "text-pink-400 animate-spin-slow" : "text-white"
            }`}
          />
        </div>
      </div> */}

      <div className="min-h-screen text-white font-sans">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white overflow-hidden group">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="z-10 max-w-xl text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              I'm {" "}
              <motion.span
                className="bg-gradient-to-r from-pink-400 via-yellow-400 to-red-500 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
              Mr. Al Amin
              </motion.span>
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Passionate Web Developer & Animal Science student. I blend design, code, and compassion.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 rounded-full bg-pink-600 hover:bg-pink-700 transition-all text-lg font-semibold shadow-lg hover:shadow-pink-500/50"
            >
              View Projects
              <ArrowRightIcon className="w-6 h-6 ml-2" />
            </a>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="z-10"
          >
            <img
              src={MyPhoto}
              alt="Md. Al-Amin"
              className="w-[320px] md:w-[400px] h-[320px] md:h-[400px] rounded-full object-contain bg-white/10 backdrop-blur-xl p-2 shadow-2xl border-4 border-white/20"
            />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6 bg-gradient-to-tr from-purple-900 via-indigo-900 to-purple-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-10 border-b-4 border-pink-500 inline-block pb-2">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["HTML5", "CSS3", "JavaScript", "React", "Tailwind", "Firebase", "Framer Motion", "GitHub"].map((skill, i) => (
              <div key={i} className="bg-indigo-700 py-3 px-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-white text-gray-900 py-20 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center border-b-4 border-indigo-600 inline-block pb-2">Projects</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <RocketLaunchIcon className="w-6 h-6 text-purple-600" />,
                title: "Matrimony Platform",
                desc: "Firebase-based matchmaking app.",
              },
              {
                icon: <DevicePhoneMobileIcon className="w-6 h-6 text-indigo-600" />,
                title: "Portfolio Website",
                desc: "Built with Vite, HeroUI & Framer Motion.",
              },
              {
                icon: <OutlineSparklesIcon className="w-6 h-6 text-pink-500" />,
                title: "Feed Calculator",
                desc: "Daily livestock ration app.",
              },
            ].map((project, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-lg shadow cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300">
                <div className="mb-3">{project.icon}</div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-700 mt-1">{project.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Extra Topics Section */}
        <section className="py-20 px-6 bg-gradient-to-tr from-indigo-900 via-purple-800 to-indigo-900 text-white text-center max-w-4xl mx-auto space-y-20">
          {[
            {
              icon: <StarIcon className="w-10 h-10 text-yellow-300 mx-auto" />,
              title: "Awards",
              desc: "Dean's List (2023), Web Dev Hackathon Finalist",
            },
            {
              icon: <HeartIcon className="w-10 h-10 text-pink-400 mx-auto" />,
              title: "Personal Values",
              desc: "Empathy • Dedication • Lifelong Learning",
            },
            {
              icon: <MusicalNoteIcon className="w-10 h-10 text-blue-400 mx-auto" />,
              title: "Hobbies",
              desc: "Music, Photography, Open Source, Reading",
            },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="space-y-4">
              <div>{icon}</div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="py-20 px-6 bg-white text-gray-900 text-center">
          <AcademicCapIcon className="w-8 h-8 mx-auto text-indigo-600 mb-4" />
          <h2 className="text-3xl font-bold mb-4 border-b-4 border-indigo-600 inline-block pb-2">Education</h2>
          <p>
            B.Sc. in Animal Husbandry — <span className="font-medium">Bangladesh Agricultural University</span>
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-indigo-900 text-white text-center">
          <EnvelopeIcon className="w-8 h-8 mx-auto text-pink-400 mb-4" />
          <h2 className="text-3xl font-bold mb-4 border-b-4 border-pink-400 inline-block pb-2">Get In Touch</h2>
          <p>
            Email me: <a href="mailto:mdalamin@example.com" className="text-pink-300 underline">mdalamin@example.com</a>
          </p>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 text-center py-6">
          <p>&copy; 2025 Md. Al-Amin. All rights reserved.</p>
        </footer>
      </div>
    </DefaultLayout>
  );
}
