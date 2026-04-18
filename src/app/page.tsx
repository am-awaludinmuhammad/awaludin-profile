"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useAnimationControls, Variants } from "framer-motion";

import Contact from "@/components/Contact";
import ExperienceSection from "@/components/Experience";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Tech from "@/components/Tech";
import Project from "@/components/Project";

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
    >
      <motion.section variants={sectionVariants} className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Hero />
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Service />
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Tech />
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        className="bg-gradient-to-b from-muted/30 to-background py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <Project />
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <ExperienceSection />
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Contact />
        </div>
      </motion.section>
    </motion.main>
  );
}