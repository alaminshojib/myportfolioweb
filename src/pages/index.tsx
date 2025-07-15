import DefaultLayout from "@/layouts/default";
import {

  

  StarIcon,
  HeartIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
// import { SparklesIcon } from "@heroicons/react/24/solid";
import MyPhoto from "@/assets/mda-transparent.png";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Skills from "./careerGoalsPages/skills";
import Projects from "./careerGoalsPages/projects";
import Education from "./careerGoalsPages/academic";
import Contact from "./contact";
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


        <section
          className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between 
             px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 2xl:px-48 
             py-14 md:py-24 lg:py-32 
             bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 
             text-white overflow-hidden group"
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="z-10 max-w-xl text-center md:text-left mt-12 md:mt-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-pink-400 via-yellow-400 to-red-500 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Mr. Al-Amin
              </motion.span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 md:max-w-md max-w-sm mx-auto md:mx-0 leading-relaxed">
              Passionate Web Developer & Animal Science student. I blend design, code, and compassion.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 rounded-full bg-pink-600 hover:bg-pink-700 transition-all text-base sm:text-lg font-semibold shadow-lg hover:shadow-pink-500/50 mx-auto md:mx-0"
            >
              View Projects
              <ArrowRightIcon className="w-6 h-6 ml-3" />
            </a>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="z-10 mt-12 md:mt-0 flex-shrink-0"
          >
            <img
              src={MyPhoto}
              alt="Md. Al-Amin"
              className="w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full object-contain bg-white/10 backdrop-blur-xl p-3 shadow-2xl border-4 border-white/25 mx-auto md:mx-0"
              loading="lazy"
            />
          </motion.div>
        </section>



        {/* Skills Section */}
        <Skills></Skills>

        {/* Projects Section */}
        <Projects></Projects>

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
      <Education></Education>

        {/* Contact Section */}
       <Contact></Contact>

      </div>
    </DefaultLayout>
  );
}
