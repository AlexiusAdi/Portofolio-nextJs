import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30"
        initial={{ x: "100%", width: "100%", backgroundColor: "#F1F6F9" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20"
        initial={{ x: "100%", width: "100%", backgroundColor: "#D8D9DA" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10"
        initial={{ x: "100%", width: "100%", backgroundColor: "#F0EEED" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default TransitionEffect;
