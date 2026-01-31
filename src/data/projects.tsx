import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill } from "react-icons/ri";
import {
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiJquery,
  SiMysql,
  SiNestjs,
  SiWordpress,
} from "react-icons/si";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  laravel: {
    title: "Laravel",
    bg: "black",
    fg: "white",
    icon: <SiLaravel />,
  },
  jquery: {
    title: "jQuery",
    bg: "black",
    fg: "white",
    icon: <SiJquery />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  nestjs: {
    title: "NestJS",
    bg: "black",
    fg: "white",
    icon: <SiNestjs />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  wordpress: {
    title: "WordPress",
    bg: "black",
    fg: "white",
    icon: <SiWordpress />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "school-admin",
    category: "Management System",
    title: "School Admin Software",
    src: "/assets/projects-screenshots/school-admin.png",
    screenshots: ["school-admin.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.jquery, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.laravel, PROJECT_SKILLS.mysql],
    },
    live: "https://github.com/sanjaykm098",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive School Community Portal featuring dynamic banner management and interactive interfaces. I integrated the WhatsApp API for real-time notifications and built a robust school listing feature to increase visibility and accessibility for educational institutions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.live} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Dynamic Banner Functionality</li>
            <li>WhatsApp API Integration</li>
            <li>School Listing & Discovery Portal</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "truck-parts",
    category: "E-commerce",
    title: "Truck Parts & Tools",
    src: "/assets/projects-screenshots/truck-parts.png",
    screenshots: ["truck-parts.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.jquery],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    live: "https://github.com/sanjaykm098",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An e-commerce platform specialized in truck parts and tools. I modified complex PHP scripts to enhance performance and integrated the EasyShip API to streamline shipping notifications, ensuring customers stayed updated throughout the delivery process.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.live} />
          <TypographyH3 className="my-4 mt-8">Integrations</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>EasyShip API for Tracking</li>
            <li>Custom PHP Script Modifications</li>
            <li>Scalable Product Management</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "school-erp",
    category: "Personal Project",
    title: "Advanced School ERP",
    src: "/assets/projects-screenshots/school-erp.png",
    screenshots: ["school-erp.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.laravel, PROJECT_SKILLS.mysql, PROJECT_SKILLS.next],
    },
    live: "https://github.com/sanjaykm098",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            My flagship personal project: A full-scale School ERP built with Laravel and Vue3 (Inertia.js). Featuring custom authentication systems, role-based dashboards, and a sleek UI powered by Vuetify, this system manages everything from student records to payroll.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.live} />
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Laravel & Vue3 (Inertia.js)</li>
            <li>Custom Auth & Authorization</li>
            <li>Vuetify & Tailwind CSS</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
