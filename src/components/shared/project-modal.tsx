"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type ProjectItem = {
  title: string;
  type: string;
  year?: string | number;
  thumbnail: string;
  description: string;
  techStack: string[];
  images?: string[];
};

type ProjectsModalProps = {
  selected: ProjectItem | null;
  setSelected: (value: ProjectItem | null) => void;
};

export default function ProjectsModal({
  selected,
  setSelected,
}: ProjectsModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const gallery = useMemo(() => {
    if (!selected) return [];
    return [selected.thumbnail, ...(selected.images ?? [])];
  }, [selected]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selected) return;

    setActiveIndex(0);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }

      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => Math.min(prev + 1, gallery.length - 1));
      }

      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, setSelected, gallery.length]);

  if (!mounted || !selected) return null;

  const activeImage = gallery[activeIndex] ?? selected.thumbnail;

  const handleClose = () => setSelected(null);

  const goPrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const goNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, gallery.length - 1));
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        onClick={() => setSelected(null)}
      >
        <div
          className="relative w-full max-w-[980px] rounded-2xl bg-background"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={cn(
              "relative w-full overflow-hidden rounded-2xl border bg-background shadow-2xl",
              "max-w-[980px]",
              "h-[88vh] sm:h-[84vh] lg:h-[78vh]"
            )}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close modal"
              className={cn(
                "absolute right-3 top-3 z-50 inline-flex h-9 w-9 items-center justify-center",
                "rounded-full border bg-background/90 text-foreground shadow-sm backdrop-blur",
                "transition hover:bg-muted"
              )}
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid h-full grid-cols-1 md:grid-cols-[0.95fr_1.05fr]">
              <div className="flex min-h-0 flex-col border-b bg-muted/20 md:border-b-0 md:border-r">
                <div className="p-4 sm:p-5">
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-xl border",
                      "bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-50",
                      "dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
                    )}
                  >
                    {gallery.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={goPrev}
                          disabled={activeIndex === 0}
                          className={cn(
                            "absolute left-3 top-1/2 z-20 -translate-y-1/2",
                            "inline-flex h-9 w-9 items-center justify-center rounded-full",
                            "border bg-background/85 shadow-sm backdrop-blur transition",
                            "disabled:pointer-events-none disabled:opacity-40"
                          )}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={goNext}
                          disabled={activeIndex === gallery.length - 1}
                          className={cn(
                            "absolute right-3 top-1/2 z-20 -translate-y-1/2",
                            "inline-flex h-9 w-9 items-center justify-center rounded-full",
                            "border bg-background/85 shadow-sm backdrop-blur transition",
                            "disabled:pointer-events-none disabled:opacity-40"
                          )}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </>
                    )}

                    <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px]">
                      <Image
                        src={activeImage}
                        alt={selected.title}
                        fill
                        unoptimized
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                  </div>
                </div>

                {gallery.length > 1 && (
                  <div className="min-h-0 flex-1 px-4 pb-4 sm:px-5 sm:pb-5">
                    <ScrollArea className="h-full">
                      <div className="grid grid-cols-3 gap-2 pr-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
                        {gallery.map((img, i) => {
                          const isActive = i === activeIndex;

                          return (
                            <button
                              key={`${img}-${i}`}
                              type="button"
                              onClick={() => setActiveIndex(i)}
                              className={cn(
                                "relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted",
                                "transition",
                                isActive
                                  ? "border-foreground ring-1 ring-foreground/20"
                                  : "border-border hover:border-foreground/40"
                              )}
                            >
                              <Image
                                src={img}
                                alt={`${selected.title} preview ${i + 1}`}
                                fill
                                unoptimized
                                className="object-cover"
                                sizes="160px"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  </div>
                )}
              </div>

              <div className="min-h-0">
                <ScrollArea className="h-full">
                  <div className="space-y-6 p-4 pr-12 sm:p-6 sm:pr-14">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold leading-tight sm:text-2xl">
                        {selected.title}
                      </h2>

                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                        {selected.type && (
                          <span
                              className={`rounded-md border px-2.5 py-1
                              ${
                                selected.type === "client"
                                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                  : "bg-blue-500/10 text-blue-600 border-blue-500/20"
                              }`}
                            >
                              {selected.type === "personal" ? "Personal" : "Client"}
                            </span>
                        )}

                        {selected.year && (
                          <span className="rounded-md border px-2.5 py-1">
                            {selected.year}
                          </span>
                        )}
                      </div>

                      {/* DIVIDER */}
                      <div className="h-px w-full bg-border" />
                    </div>

                    <section className="space-y-3">
                      <div
                        className="text-sm leading-7 sm:text-[14px] [&>p]:mb-4 [&>p:last-child]:mb-0"
                        dangerouslySetInnerHTML={{ __html: selected.description }}
                      />
                    </section>

                    {selected.techStack?.length > 0 && (
                      <section className="space-y-3">
                        <p className="text-sm font-medium text-foreground">
                          Tech Stack
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {selected.techStack.map((tech, i) => (
                            <span
                              key={`${tech}-${i}`}
                              className="rounded-lg border font-semibold bg-muted/10 px-3 py-1.5 text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}