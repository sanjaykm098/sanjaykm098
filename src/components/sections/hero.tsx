import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full min-h-[90dvh] flex items-center justify-center overflow-hidden")}>
      <div className="container mx-auto px-4 z-10 text-center">
        <div
          className={cn(
            "flex flex-col justify-center items-center py-20 md:py-32"
          )}
        >
          {!isLoading && (
            <>
              <div className="flex flex-col items-center">
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "font-medium text-lg text-orange-500 mb-4",
                      "cursor-default uppercase tracking-[0.3em]"
                    )}
                  >
                    Hi, I am
                  </p>
                </BlurIn>
                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "font-black text-6xl md:text-9xl leading-[0.9] tracking-tighter text-transparent bg-clip-text pb-2",
                          "bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-zinc-500",
                          "cursor-default mb-6"
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      Nice to meet you!
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <div className="flex items-center gap-4">
                    <p
                      className={cn(
                        "font-semibold text-xl md:text-2xl text-slate-600 dark:text-zinc-400",
                        "cursor-default tracking-tight"
                      )}
                    >
                      Laravel & Full Stack Developer
                    </p>
                  </div>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col items-center gap-6 w-full max-w-sm">
                <Link
                  href={"/assets/resume.pdf"}
                  target="_blank"
                  className="w-full"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full h-12 text-lg rounded-full">
                      <File size={20} />
                      <p>View Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="flex gap-4">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="h-12 px-8 rounded-full text-md border-orange-500/50 hover:bg-orange-500/10"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Let&apos;s build something! 🚀</p>
                    </TooltipContent>
                  </Tooltip>
                  <Link
                    href={config.social.github}
                    target="_blank"
                  >
                    <Button variant={"outline"} size="icon" className="h-12 w-12 rounded-full border-zinc-500/30 hover:border-orange-500">
                      <SiGithub size={20} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                  >
                    <Button variant={"outline"} size="icon" className="h-12 w-12 rounded-full border-zinc-500/30 hover:border-orange-500">
                      <SiLinkedin size={20} />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
