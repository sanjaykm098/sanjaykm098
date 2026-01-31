import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 flex w-full shrink-0 flex-col items-center gap-4 border-t border-border bg-background px-4 py-8 md:px-6">
      <div className="flex flex-col items-center gap-2">
        <SocialMediaButtons />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
          © {year} {config.author}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
