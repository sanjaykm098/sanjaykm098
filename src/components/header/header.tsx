"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";


interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-[100] transition-colors delay-100 duration-500 ease-in backdrop-blur-md bg-background/20 border-b border-white/10"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="z-10">
            <Button variant="link" className="text-lg font-black p-0 no-underline hover:no-underline text-foreground">
              {config.author}
            </Button>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-orange-500">Home</Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-orange-500">About</Link>
            <Link href="/#projects" className="text-sm font-medium transition-colors hover:text-orange-500">Projects</Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-orange-500">Contact</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <FunnyThemeToggle className="w-5 h-5" />

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </Button>
          </div>

          <Link href="/#contact" className="hidden sm:block">
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
              Let&apos;s Talk
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background/95 border-b border-white/10"
          >
            <div className="flex flex-col p-4 gap-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-orange-500 transition-colors px-2">Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-orange-500 transition-colors px-2">About</Link>
              <Link href="/#projects" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-orange-500 transition-colors px-2">Projects</Link>
              <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-orange-500 transition-colors px-2">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
