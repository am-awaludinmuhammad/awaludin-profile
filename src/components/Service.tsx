"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Database, Server } from "lucide-react";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const services = [
  {
    title: "Custom Web Applications",
    desc: "Building tailored web apps based on your business needs, from simple tools to full platforms.",
    icon: Code2,
  },
  {
    title: "Backend & API Development",
    desc: "Designing reliable systems and APIs to handle your data and business logic.",
    icon: Server,
  },
  {
    title: "System & Database Design",
    desc: "Structuring application to be scalable, efficient, and easy to maintain.",
    icon: Database,
  },
];

export default function Service() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div
          className="text-center mb-14 space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">
            What I do
          </h2>
          <div className="space-y-1">
            <p className="text-sm sm:text-base text-muted-foreground">
              I&apos;m a web developer with 4+ years of experience, building web applications based on real business needs.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              I work across PHP, Python, JavaScript, and SQL, and handle deployment to make sure everything runs properly in production.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group border rounded-2xl p-6 space-y-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition">
                  <Icon className="w-5 h-5 text-foreground group-hover:text-primary transition" />
                </div>

                {/* Title */}
                <h3 className="font-medium text-lg">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}