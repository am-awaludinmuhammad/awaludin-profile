import { Button } from "@/components/ui/button";
import { playfair } from "@/app/layout";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <div className="max-w-2xl text-center space-y-6">
        
        {/* Name */}
        <h1
          className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight`}
        >
          Hi, I&apos;m Awaludin
        </h1>

        <div className="space-y-2">
          {/* Role */}
          <h2 className="text-lg sm:text-xl text-muted-foreground">
            Full-stack Web Developer
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mx-auto">
            I build web applications that solve real business problems, delivering scalable solutions that improve efficiency, performance, and growth.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link href="#contact">
            <Button size="lg" className="px-6">
              Contact Me
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="px-6">
            Download Resume
          </Button>
        </div>

      </div>
    </section>
  );
}