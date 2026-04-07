import Image from "next/image";

const techStack = [
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Django", icon: "/icons/django.svg" },
  { name: "FastAPI", icon: "/icons/fastapi.svg" },
  { name: "Express", icon: "/icons/express.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "NestJS", icon: "/icons/nestjs.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Nginx", icon: "/icons/nginx.svg" },
  { name: "Apache", icon: "/icons/apache.svg" },
  { name: "Ubuntu", icon: "/icons/ubuntu.svg" },
];

export default function Tech() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        
        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Tech I Work With
          </h2>
          <p className="text-sm text-muted-foreground">
            Tools I use to build and deploy web applications
          </p>
        </div>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl border flex flex-col items-center justify-center gap-2 hover:shadow-sm hover:-translate-y-1 transition-all"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={28}
                height={28}
              />
              <span className="text-[11px] sm:text-xs text-muted-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}