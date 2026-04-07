"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useAnimationControls, Variants } from "framer-motion";

import Contact from "@/components/Contact";
import ExperienceSection from "@/components/Experience";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Tech from "@/components/Tech";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Home() {
  const pathname = usePathname();
  const controls = useAnimationControls();

  const replayAnimation = () => {
    controls.set("hidden");
    requestAnimationFrame(() => {
      controls.start("visible");
    });
  };

  useEffect(() => {
    replayAnimation();
  }, [pathname]);

  useEffect(() => {
    const handlePageShow = () => {
      replayAnimation();
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <motion.main
      variants={containerVariants}
      initial={false}
      animate={controls}
      className="pt-20"
    >
      <motion.section variants={sectionVariants}>
        <Hero />
      </motion.section>

      <motion.section variants={sectionVariants}>
        <Service />
      </motion.section>

      <motion.section variants={sectionVariants}>
        <Tech />
      </motion.section>

      <motion.section variants={sectionVariants}>
        <ExperienceSection />
      </motion.section>

      <motion.section variants={sectionVariants}>
        <Contact />
      </motion.section>
    </motion.main>
  );
}