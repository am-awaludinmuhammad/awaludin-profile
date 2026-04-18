"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectsModal from "./shared/project-modal";

const works = [
  {
    id: "umbah",
    type: "client",
    title: "Umbah Umbah",
    subtitle: "Online Laundry Platform",
    year: 2025,
    description:
      "<p>Umbah Umbah is an online laundry platform designed to streamline subscription-based laundry services.</p><p>Users can subscribe to recurring laundry plans, schedule regular pickup and delivery within selected time intervals, and monitor the real-time status of their laundry.</p><p>The platform also allows customers to manage and adjust their subscriptions, track their balance, and maintain a seamless laundry experience without manual coordination.<p> <p>The admin dashboard offers full control over operations, including user management, order tracking, and overall system monitoring.</p>",
    thumbnail:
      "/projects/umbah/thumbnail.png",
    images: [
      "/projects/umbah/img1.png",
      "/projects/umbah/img2.png",
      "/projects/umbah/img3.png",
      "/projects/umbah/img4.png",
      "/projects/umbah/img5.png",
    ],
    techStack: ["Laravel", "MySQL"],
  },
  {
    id: "karanggayam",
    type: "client",
    title: "Desa Wisata Karanggayam",
    subtitle: "API & Dashboard",
    year: 2025,
      "description": "<p>The Karanggayam Tourism Village API is a backend system designed to power a mobile application that promotes local tourism, culture, and community-based economic activities.</p><p>The API provides structured data for a variety of features, including a list of tourist attractions, traditional arts, and local UMKM products, enabling users to explore and discover the unique offerings of the village in a seamless way.</p><p>In addition, the platform supports interactive game features based on specific tourist attractions, creating a more engaging and educational experience for users.</p><p>A dedicated web-based dashboard is also available for administrators to manage content, monitor data, and maintain the overall system efficiently.</p>",
    thumbnail:
      "/projects/karanggayam/thumbnail.png",
    images: [
      "/projects/karanggayam/img1.png",
      "/projects/karanggayam/img2.png",
      "/projects/karanggayam/img3.png",
      "/projects/karanggayam/img4.png",
      "/projects/karanggayam/img5.png",
    ],
    techStack: ["Laravel", "MySQL"],
  },
  {
    type: "personal",
    title: "Fintrack",
    subtitle: "Personal Finance Tracker",
    year: 2026,
    description: "<p>This Personal Finance Tracker is a custom-built application designed to monitor expenses by syncing transaction data from mobile banking notifications via the Gmail API. Incoming emails are parsed and normalized into a structured transaction database, enabling automated tracking without manual input.</p><p>The system includes transaction categorization to help organize spending patterns and provide clearer insights into where money is being spent. It was initially driven by the need to replace a manual end-of-month Excel recap process with a more efficient and flexible solution.</p><p>Instead of relying on spreadsheets, the application introduces a customizable dashboard that allows for better analysis and visualization of expenses over time.</p><p>This project is not focused on maintaining an exact account balance, but rather on serving as a dedicated expense tracker to understand financial behavior. The application is currently under active development.</p>",
    thumbnail:
      "/projects/fintrack/thumbnail.png",
    images: [],
    techStack: ["PostgreSQL", "Express.js", "TypeScript", "Next.js"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <section className="py-16 px-4" id="works">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Recent projects I&apos;ve worked on
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {works.map((work, i) => (
            <div
              key={i}
              onClick={() => setSelected(work)}
              className="group cursor-pointer rounded-xl border bg-muted/30 hover:bg-muted/50 transition overflow-hidden"
            >
              {/* Thumbnail (no crop) */}
              <div className="relative w-full aspect-5/3 bg-background/60 flex items-center justify-center">
                <Image
                  src={work.thumbnail}
                  alt={work.title}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Info (always visible) */}
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] px-2 rounded-lg border
                    ${
                      work.type === "client"
                        ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                        : "bg-blue-500/10 text-blue-600 border-blue-500/20"
                    }`}
                  >
                    {work.type === "personal" ? "Personal" : "Client"}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {work.year}
                  </span>
                </div>

                <h3 className="text-sm font-medium leading-tight">
                  {work.title}
                </h3>
                {
                  work.subtitle && (
                    <h5 className="text-xs leading-tight">
                      {work.subtitle}
                    </h5>
                  )
                }

                <div className="flex flex-wrap gap-1 pt-1">
                  {work.techStack.slice(0, 3).map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="text-[10px] px-1.5 py-0.5 rounded-md bg-gray-100 border"
                    >
                      {tech}
                    </span>
                  ))}
                  {work.techStack.length > 3 && (
                    <span className="text-[10px] text-black">
                      +{work.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        selected && (
        <ProjectsModal selected={selected} setSelected={setSelected} />
        )
      }
    </section>
  );
}