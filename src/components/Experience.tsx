"use client";
import { motion } from "framer-motion";

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


export default function ExperienceSection() {
  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Experience
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Professional journey & selected work
          </p>
        </div>

        {/* List */}
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="border rounded-xl p-5 hover:shadow-sm transition"
            >

              {/* Top */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-sm">
                    {exp.company} • {exp.type}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {exp.location}
                  </p>
                </div>

                <span className="text-xs text-muted-foreground">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>

              {/* Highlights */}
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground text-justify">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span>•</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

