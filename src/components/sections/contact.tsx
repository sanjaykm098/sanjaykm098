"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
const ContactSection = () => {
  return (
    <section id="contact" className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4">
      <div className="z-10 w-full max-w-4xl text-center mb-16">
        <Link href={"#contact"}>
          <h2
            className={cn(
              "text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent",
              "bg-gradient-to-b from-black to-black/40",
              "dark:bg-gradient-to-b dark:from-white dark:to-white/20"
            )}
          >
            LET&apos;S CRAFT <br />
            SOMETHING GREAT
          </h2>
        </Link>
        <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
          I&apos;m currently available for new projects and collaborations.
          Reach out if you want to build something amazing together.
        </p>
      </div>

      <div className="z-10 w-full max-w-2xl text-center">
        <div className="flex flex-col gap-6 items-center justify-center">
          <Link
            href={`mailto:${config.email}`}
            className={cn(
              "px-10 py-5 rounded-full text-2xl font-bold transition-all duration-300",
              "bg-black dark:bg-white text-white dark:text-black hover:scale-105 active:scale-95 shadow-2xl"
            )}
          >
            Say Hello
          </Link>
          <div className="flex gap-4 mt-8">
            <Link href={config.social.linkedin} target="_blank" className="p-3 bg-neutral-200 dark:bg-neutral-800 rounded-xl hover:bg-orange-500 hover:text-white transition-all">
              LinkedIn
            </Link>
            <Link href={config.social.github} target="_blank" className="p-3 bg-neutral-200 dark:bg-neutral-800 rounded-xl hover:bg-orange-500 hover:text-white transition-all">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
