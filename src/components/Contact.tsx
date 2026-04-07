"use client";

import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-10">

        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Feel free to reach out if you have a project, idea, or just want to connect.
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/meepngkd"
          method="POST"
          className="space-y-4 text-left"
        >
          {/* Email */}
          <div className="space-y-3">
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div className="space-y-3">
            <label className="text-sm">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your message..."
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground py-2 text-sm hover:opacity-90 transition"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>

        {/* Alternative */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Or email me directly at</span>
          <a
            href="mailto:awaludin.devs@gmail.com"
            className="underline hover:text-foreground"
          >
            awaludin.devs@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
}