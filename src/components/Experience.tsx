"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  type?: string;
  location: string;
  techStack: string[];
  highlights: string[];
};

const experiences: Experience[] = [
  {
    "company": "Budhi Futura Incresca",
    "role": "Fullstack Web Developer",
    "location": "Jakarta, Indonesia",
    "startDate": "January 2026",
    "endDate": "Present",
    "type": "Contract",
    "techStack": [
      "Next.js",
      "Express.js",
      "NestJS",
      "Laravel",
      "PostgreSQL",
      "Prisma",
      "Docker"
    ],
    "highlights": [
      "Developed frontend features using Next.js for internal HR management system (HRIS), handling employee data, attendance, and administrative workflows",
      "Maintained and improved existing applications, including query optimization and traffic monitoring",
      "Built and maintained backend services using Express.js and NestJS for API development and system integration",
      "Implemented structured database access using Prisma ORM to improve maintainability and scalability",
      "Worked with PostgreSQL for data modeling, querying, and performance tuning",
      "Maintained and enhanced legacy systems built with Laravel",
      "Handled deployment using Docker"
    ]
  },
  {
    "company": "Bentara Fraktal Indonesia Teknologi",
    "role": "Fullstack Web Developer",
    "location": "Jakarta, Indonesia",
    "startDate": "March 2025",
    "endDate": "December 2025",
    "type": "Contract",
    "techStack": [
      "Laravel",
      "Lumen",
      "Next.js",
      "Express.js",
      "FastAPI",
      "PostgreSQL",
      "Elasticsearch",
      "Docker",
    ],
    "highlights": [
      "Designed and implemented a scalable data ingestion architecture using FastAPI, transforming raw data into a structured knowledge base for downstream processing",
      "Developed asynchronous and modular service layers to handle high-volume data crawling, processing, and normalization",
      "Implemented Elasticsearch to enable advanced search, filtering, and high-performance data retrieval",
      "Built backend services and automated workflows using FastAPI, including integration with AI-based services for dynamic processing",
      "Designed and optimized relational database schemas in PostgreSQL to support scalable and maintainable data structures",
      "Optimized database performance in Laravel using Eloquent ORM by eliminating N+1 query issues, applying efficient joins, and restructuring queries, resulting in up to 50% faster search and data retrieval",
      "Containerized applications using Docker to streamline development, deployment, and environment consistency",
      "Modernized frontend architecture and user interface to improve responsiveness, usability, and overall user experience",
      "Led end-to-end migration of legacy application from Laravel 5 to Laravel 11, ensuring system stability, backward compatibility, and minimal downtime",
    ]
  },
  {
    "company": "PT Global Intermedia Nusantara",
    "role": "Fullstack Web Developer",
    "location": "Indonesia",
    "startDate": "February 2023",
    "endDate": "February 2025",
    "type": "Contract",
    "techStack": [
      "Django",
      "PostgreSQL",
      "FastReport",
      "Linux"
    ],
    "highlights": [
      "Maintained and enhanced existing applications by implementing new features based on client requirements and improving overall system reliability",
      "Developed RESTful APIs for a mobile-based budget monitoring application used by regional government officials to track budget allocations and expenditure realization",
      "Built and maintained a web-based financial management system using Django and PostgreSQL to support reporting and operational workflows",
      "Designed and generated complex PDF report templates using FastReport, integrated with PostgreSQL for dynamic and data-driven document generation",
      "Implemented PostgreSQL functions and optimized complex SQL queries to improve reporting performance and query efficiency",
      "Developed and executed stored procedures to extract and transform raw data into structured Excel reports based on client requirements",
      "Developed an Official Travel Authorization system to streamline digital submission, approval workflows, and tracking of government travel documents",
      "Developed an automation tool to eliminate repetitive manual data entry by transforming file-based inputs into automated workflows, reducing processing time by up to 80% and improving operational efficiency",
      "Managed deployment, configuration, and maintenance of applications on Linux-based servers"
    ]
  },
  {
    "company": "PT Anak Bangsa Cerdas Digital",
    "role": "Fullstack Web Developer",
    "location": "Indonesia",
    "startDate": "April 2022",
    "endDate": "January 2023",
    "type": "Full-time",
    "techStack": [
      "PHP",
      "Laravel",
      "MySQL",
      "Firebase"
    ],
    "highlights": [
      "Developed a customer-facing construction platform enabling property purchases (ready-built and custom), including stage-based project customization, real-time progress tracking, cost estimation, and integration with contractors and suppliers",
      "Built and maintained a Point of Sale (POS) system supporting multi-outlet management, product inventory control, and comprehensive sales reporting",
      "Developed backend APIs for a self-service food ordering system, enabling digital menu browsing, order placement, and real-time order tracking to improve customer experience and operational efficiency",
      "Engineered backend services for a laundry management application, supporting service selection, pricing calculation, duration tracking, and automated report generation for operational monitoring",
      "Implemented push notification system using Firebase to enable real-time updates for orders, transactions, and user activities"
    ]
  },
  {
    "company": "PT. Transisi Teknologi Mandiri",
    "role": "Backend Web Developer",
    "location": "Yogyakarta, Indonesia",
    "startDate": "November 2021",
    "endDate": "March 2022",
    "type": "Full-time",
    "techStack": ["PHP", "Laravel", "MySQL"],
    "highlights": [
      "Developed modules for an enterprise web application using Laravel",
      "Handled multi-database connections to support various data sources",
      "Implemented modular monolithic architecture using Laravel Modules",
      "Managed roles and permissions using Laravel Permission",
      "Applied Repository Pattern to improve code structure and maintainability"
    ]
  },
  {
    "company": "PT. Redi Teknologi Nusantara",
    "role": "Backend Web Developer",
    "location": "Yogyakarta, Indonesia",
    "startDate": "November 2020",
    "endDate": "May 2021",
    "type": "Internship",
    "techStack": ["PHP", "Laravel", "MySQL", "Telegram API"],
    "highlights": [
      "Participated in existing web applications development using PHP Laravel, jQuery, HTML and MySQL database",
      "Improved performance by converting synchronous processes into background jobs",
      "Integrated the system with third-party email marketing provider enabling automated email campaigns and personalized marketing",
      "Maintained user preferences for managing notification settings, allowing users to customize their notification preferences",
      "Built API resources using Laravel Passport to allow third-party applications to securely integrate and access system data via OAuth2 authentication"
    ]
  }
];



type ExperienceCardProps = {
  exp: Experience;
  index: number;
};

function ExperienceCard({ exp, index }: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);

  const previewHighlights = exp.highlights.slice(0, 2);
  const hiddenHighlights = exp.highlights.slice(2);
  const hasMoreHighlights = exp.highlights.length > 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="rounded-xl border p-5 transition hover:shadow-sm"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <div>
          <h3 className="text-base font-semibold">{exp.role}</h3>
          <p className="text-sm">
            {exp.company} • {exp.type}
          </p>
          <p className="text-sm text-muted-foreground">{exp.location}</p>
        </div>

        <span className="text-xs text-muted-foreground">
          {exp.startDate} - {exp.endDate}
        </span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {previewHighlights.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="mt-1 text-xs">•</span>
            <p>{item}</p>
          </li>
        ))}

        <AnimatePresence initial={false}>
          {expanded &&
            hiddenHighlights.map((item, idx) => (
              <motion.li
                key={`hidden-${idx}`}
                initial={{ opacity: 0, height: 0, y: -4 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-2 overflow-hidden"
              >
                <span className="mt-1 text-xs">•</span>
                <p>{item}</p>
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>

      {hasMoreHighlights && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:opacity-70"
        >
          {expanded ? "Show less" : `Show ${hiddenHighlights.length} more`}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {exp.techStack.map((tech) => (
          <span
            key={tech}
            className="
              text-xs font-medium
              px-3 py-1.5
              rounded-xl
              bg-gray-100 text-primary
              border border-primary/20
              hover:bg-primary/20
              transition
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="px-4 py-20" id="experience">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Experience
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Professional journey & selected work
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
