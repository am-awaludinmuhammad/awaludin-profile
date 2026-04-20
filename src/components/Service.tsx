"use client";

import { Variants } from "framer-motion";
import { Monitor, Server, Webhook, Wrench } from "lucide-react";

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
    title: "Backend Development",
    desc: "Building reliable systems to handle business logic, data processing, and core application workflows.",
    icon: Server,
    color: "text-emerald-600 bg-emerald-500/10 group-hover:bg-emerald-600",
  },
  {
    title: "Frontend Development",
    desc: "Creating responsive and user-friendly interfaces that integrate smoothly with backend systems.",
    icon: Monitor,
    color: "text-blue-600 bg-blue-500/10 group-hover:bg-blue-600",
  },
  {
    title: "API Integration",
    desc: "Connecting third-party services and internal systems to enable seamless data flow and automation.",
    icon: Webhook,
    color: "text-violet-600 bg-violet-500/10 group-hover:bg-violet-600",
  },
  {
    title: "Maintenance",
    desc: "Fixing issues, improving performance, and keeping applications stable for daily use.",
    icon: Wrench,
    color: "text-amber-600 bg-amber-500/10 group-hover:bg-amber-600",
  },
];

export default function Service() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div
          className="text-center mb-14 space-y-3 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">
            What I do
          </h2>
          <div className="space-y-1">
            <p className="text-sm sm:text-base text-muted-foreground">
              I help businesses build stable, scalable web applications using Laravel, Express.js, Next.js, and PostgreSQL. Solving issues, optimizing performance, and delivering systems teams can rely on every day. 
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              I also work across Python, having handled backend projects in addition to PHP and JavaScript.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group border rounded-2xl p-6 space-y-4 
                hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg 
                    transition ${item.color} group-hover:text-white`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold text-base sm:text-lg leading-none">
                    {item.title}
                  </h3>
                </div>

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