import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import { SKILLS } from "@/data/constants";
import Image from "next/image";

const SkillsSection = () => {
  return (
    <section id="skills" className="relative w-full py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-20">
        <Link href={"#skills"} className="flex justify-center">
          <BoxReveal width="fit-content">
            <h2
              className={cn(
                "text-5xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent",
                "bg-gradient-to-b from-black to-black/40",
                "dark:bg-gradient-to-b dark:from-white dark:to-white/20"
              )}
            >
              MY STACK
            </h2>
          </BoxReveal>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.values(SKILLS).map((skill, index) => (
          <BoxReveal key={skill.id} delay={0.1 * (index % 5)} width="100%">
            <div className="group relative p-6 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div
                className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl transition-all duration-300 opacity-50 group-hover:opacity-100"
                style={{ backgroundColor: skill.color }}
              />
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                  <Image
                    src={skill.icon}
                    alt={skill.label}
                    width={48}
                    height={48}
                    className={cn(
                      "w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500",
                      skill.name === "github" && "dark:invert"
                    )}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{skill.label}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2">
                    {skill.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </BoxReveal>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
