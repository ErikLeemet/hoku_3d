import React from "react";
import { motion } from "framer-motion";

const Servicecard = ({ title, text, children, fromLeft = false }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: fromLeft ? -100 : 100,
        rotate: fromLeft ? -15 : 15,
      }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex justify-center items-center relative bg-primary w-[280px] h-[160px] lg:w-[420px] lg:h-[152px] rounded-[5px] border-[3px] border-neutral py-[12px] px-[10px] shadow-custom"
    >
      <h2 className="absolute -top-5 left-6 bg-primary px-2 text-3xl h-[20px] font-thedusWLB text-accent">
        {title}
      </h2>
      {text && <p className="text-base text-neutral">{text}</p>}
      {children && <div className="mt-4">{children}</div>}
    </motion.div>
  );
};

export default Servicecard;
