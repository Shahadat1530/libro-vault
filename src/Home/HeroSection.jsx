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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
        },
        animate: {
            y: [0, -10, 0],
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero py-20 px-4 min-h-[70vh] flex items-center"
            style={{
                background: "linear-gradient(to bottom, #58fbda, #4338ca)",
            }}
        >
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Section */}
                <motion.div className="text-center md:text-left md:w-1/2">
                    <motion.h1
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        Welcome to Your Library
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-xl md:text-2xl text-[#fff] max-w-lg mx-auto md:mx-0"
                    >
                        Discover a world of knowledge, adventure, and inspiration.
                    </motion.p>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate={["visible", "animate"]}
                    className="md:w-1/2 flex justify-center"
                >
                    <img
                        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Library books"
                        className="w-full max-w-2xl rounded-lg shadow-lg border-2 border-[#00c9f5]"
                        style={{ maxHeight: "500px", objectFit: "cover" }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HeroSection;
