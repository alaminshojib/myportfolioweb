import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const educations = [
    {
        key: "bachelor",
        title: "B.Sc. in Animal Husbandry",
        institution: "Bangladesh Agricultural University",
        duration: "2019 - Present",
    },
    {
        key: "college",
        title: "Higher Secondary Certificate (HSC)",
        institution: "Dhaka College",
        duration: "2017 - 2019",
    },
    {
        key: "school",
        title: "Secondary School Certificate (SSC)",
        institution: "Ideal School and College",
        duration: "2015 - 2017",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, when: "beforeChildren" }
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.03, transition: { duration: 0.3 } }
};

export default function Education() {
    return (
        <section
            className="w-full py-20 px-6 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-indigo-800/80 text-white"
        >
            <motion.div variants={itemVariants} className="mb-10 text-center">
                <AcademicCapIcon className="w-14 h-14 mx-auto text-pink-400 drop-shadow-md" />
                <h2 className="text-5xl font-extrabold mt-4 mb-6 border-b-4 border-pink-500 inline-block pb-2 tracking-wide drop-shadow-md text-white">
                    Education
                </h2>
            </motion.div>


            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-screen-xl mx-auto"
            >
                {educations.map(({ key, title, institution, duration }) => (
                    <motion.div
                        key={key}
                        variants={itemVariants}
                        whileHover="hover"
                        className="bg-indigo-800/40 rounded-2xl p-8 shadow-lg cursor-pointer"
                    >
                        <h3 className="text-3xl font-semibold text-pink-300 mb-2 drop-shadow-sm">{title}</h3>
                        <p className="text-lg font-medium text-purple-200">{institution}</p>
                        <p className="italic text-purple-300 mt-1">{duration}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
