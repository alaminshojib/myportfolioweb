import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white text-center"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto flex flex-col items-center px-6 sm:px-12 lg:px-0 rounded-3xl shadow-lg"
      >
        <EnvelopeIcon className="w-12 h-12 text-pink-400 mb-6 drop-shadow-lg" />
        <h2 className="text-4xl font-extrabold mb-6 border-b-4 border-pink-400 inline-block pb-2 tracking-wide drop-shadow-sm">
          Get In Touch
        </h2>
        <p className="text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed text-pink-200 px-2 sm:px-0">
          Feel free to reach out for collaborations, questions, or just to say hi!
        </p>
        <a
          href="mailto:mdalamin@example.com"
          className="inline-block bg-pink-500 hover:bg-pink-600 transition-colors duration-300 text-white font-semibold rounded-full px-8 py-4 shadow-lg shadow-pink-500/50 max-w-xs w-full sm:w-auto"
          aria-label="Send email to mdalamin@example.com"
        >
          mdalamin@example.com
        </a>
      </motion.div>
    </section>
  );
}
