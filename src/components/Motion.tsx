"use client";
import { motion } from "motion/react";

export default function Motion({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -10 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
