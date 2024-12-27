import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeInOut" },
        },
    };

    const loopVariants = {
        animate: {
            x: [0, 20, -20, 0], // Move left and right
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero bg-gradient-to-r from-blue-500 to-indigo-700 text-white flex items-center justify-center p-5"
        >
            <motion.div className="text-center">
                <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl font-bold"
                >
                    Welcome to Your Library
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-6 text-lg"
                >
                    Discover a world of knowledge, adventure, and inspiration.
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;
