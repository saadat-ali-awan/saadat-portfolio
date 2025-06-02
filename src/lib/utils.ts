import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const socialLinks = [
  {
    href: "https://github.com/saadat-ali-awan",
    label: "Github",
    icon: "/brands/github.svg",
    alt: "Github",
  },
  {
    href: "https://www.linkedin.com/in/saadatali1999/",
    label: "LinkedIn",
    icon: "/brands/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "mailto:saadatali0202@gmail.com",
    label: "E-Mail",
    icon: "/icons/mail.svg",
    alt: "Email",
  },
  {
    href: "https://wa.me/+923360224999",
    label: "WhatsApp",
    icon: "/brands/whatsapp.svg",
    alt: "WhatsApp",
  },
  {
    href: "https://wellfound.com/saadatali1999",
    label: "Wellfound",
    icon: "/brands/wellfound.svg",
    alt: "Wellfound",
  },
]

export const techStack = ["Node.js", "Nest.js", "Next.js", "React.js", "Ruby on Rails", "AWS"];