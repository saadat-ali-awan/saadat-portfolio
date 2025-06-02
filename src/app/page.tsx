import { Button } from "@/components/ui/button";
import { socialLinks, techStack } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      <main className="flex flex-col gap-[32px] row-start-2 items-start md:items-center justify-center p-4 md:p-8 md:py-10 w-full md:max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
          <div className="order-1 md:order-none md:col-span-7 text-3xl md:text-8xl font-semibold">Full-stack</div>
          <div className="order-4 md:order-none md:col-span-3 flex items-center justify-start md:justify-end gap-2">
            <Link href={"/projects"}>
              <Button className="rounded-full cursor-pointer text-base md:text-2xl size-10 md:size-14 !w-[16ch]">Projects</Button>
            </Link>
            <Link href={"/projects"}>
              <Button variant="default" size="icon" className="size-10 md:size-14 rounded-full cursor-pointer"><ArrowRight className="size-6 md:size-8" /></Button>
            </Link>
          </div>
          <div className="order-3 md:order-none md:col-span-3 font-extralight">
            Solving real-world problems with real-world code — {techStack.map((item) => <><span className="font-semibold" key={item}>{item}</span>, </> )} and a get-it-done mindset.
          </div>
          <div className="order-2 md:order-none md:col-span-7 text-3xl md:text-8xl font-semibold text-left md:text-right">Developer</div>
        </div>
        <div className="w-full flex flex-wrap justify-start md:justify-center gap-4 md:gap-8 py-4 md:py-8">
          {socialLinks.map(({ href, label, icon, alt }, index) => (
            <div key={label} className={`max-md:flex-1 max-md:max-w-1/2 md:w-auto flex justify-center ${index === 2 ? "md:flex-1" : ""} `}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full max-md:w-full"
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
          <div className="max-md:flex-1 md:hidden" />
        </div>
      </main>
    </div>
  );
}
