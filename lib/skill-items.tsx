import type React from "react"
import {
  SiHtml5,
  SiCss3,
  SiMysql,
  SiJavascript,
  SiRuby,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiFlask,
  SiGit,
  SiVercel,
  SiDocker,
  SiTailwindcss,
  SiFramer,
  SiMarkdown,
  SiPostgresql,
  SiGraphql,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"

// Define the structure for skill items
interface SkillItem {
  name: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.FC
  color: string
}

const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="24" height="24" {...props}>
    <linearGradient
      id="python-original-a"
      gradientUnits="userSpaceOnUse"
      x1="70.252"
      y1="1237.476"
      x2="170.659"
      y2="1151.089"
      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
    >
      <stop offset="0" stopColor="#5A9FD4" />
      <stop offset="1" stopColor="#306998" />
    </linearGradient>
    <linearGradient
      id="python-original-b"
      gradientUnits="userSpaceOnUse"
      x1="209.474"
      y1="1098.811"
      x2="173.62"
      y2="1149.537"
      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
    >
      <stop offset="0" stopColor="#FFD43B" />
      <stop offset="1" stopColor="#FFE873" />
    </linearGradient>
    <path
      fill="url(#python-original-a)"
      d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
      transform="translate(0 10.26)"
    />
    <path
      fill="url(#python-original-b)"
      d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
      transform="translate(0 10.26)"
    />
    <radialGradient
      id="python-original-c"
      cx="1825.678"
      cy="444.45"
      r="26.743"
      gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" />
      <stop offset="1" stopColor="#7F7F7F" stopOpacity="0" />
    </radialGradient>
    <path
      opacity=".444"
      fill="url(#python-original-c)"
      d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
    />
  </svg>
)

export const skillItems: SkillItem[] = [
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6" },
  { name: "Python", Icon: PythonIcon, color: "" },
  { name: "SQL", Icon: SiPostgresql, color: "#336791" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Ruby", Icon: SiRuby, color: "#CC342D" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Flask", Icon: SiFlask, color: "#3776AB" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Vercel", Icon: SiVercel, color: "#000000" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
  { name: "Markdown", Icon: SiMarkdown, color: "#3B82F6" },
  { name: "API Integration", Icon: TbApi, color: "#00C7B7" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E535AB" },
]

