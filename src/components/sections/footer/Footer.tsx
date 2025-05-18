import { Button } from "@/components/ui/button";
import { PathName } from "./PathName";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

const socialLinks = [
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

export const Footer = () => (
  <footer className="flex gap-6 flex-wrap items-center justify-center flex-col p-4 md:p-10">
    <div className="flex gap-6 flex-col-reverse md:flex-row w-full md:max-w-6xl">
      <div className="flex-[1.5] py-4 w-full max-md:gap-4 max-md:flex max-md:flex-col">
        <h5 className="text-6xl md:text-9xl font-semibold">Saadat</h5>
        <div className="flex gap-12 md:gap-36 items-center">
          <h6 className="text-sm md:text-lg max-w-32 md:max-w-44 text-wrap">Full Stack Developer</h6>
          <h5 className="text-6xl md:text-9xl font-semibold">Ali</h5>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="w-full font-bold text-lg capitalize">
          <PathName />
        </div>
        <div className="w-full flex gap-8">
          <Button asChild variant={"link"} className="p-0">
            <Link href="/">Main</Link>
          </Button>
          <Button asChild variant={"link"} className="p-0">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant={"link"} className="p-0">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild variant={"link"} className="p-0">
            <Link href="/articles">Articles</Link>
          </Button>
        </div>
        <div className="w-full flex-1">
          <Card className="gap-2 rounded-4xl">
            <CardHeader>
              <CardTitle className="font-normal text-lg">Site</CardTitle>
            </CardHeader>
            <CardContent className="font-normal text-sm">
              <p>Handcrafted by ME /</p>
              <p>Designed by Taisia /</p>
              <p>Powered by Next.js /</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-0 w-full">
      {socialLinks.map(({ href, label, icon, alt }) => (
        <div key={label} className="p-2 max-md:w-[48%] w-auto">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full"
          >
            <Link
              href={href}
              target="_blank"
              className="flex items-center gap-2 px-8 py-4"
            >
              <Image
                src={icon}
                className="dark:invert"
                width={24}
                height={24}
                alt={alt}
              />
              {label}
            </Link>
          </Button>
        </div>
      ))}
    </div>

  </footer>
);
