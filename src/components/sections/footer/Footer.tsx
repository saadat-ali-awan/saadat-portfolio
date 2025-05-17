import { Button } from "@/components/ui/button";
import { PathName } from "./PathName";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const Footer = () => (
  <footer className="flex gap-6 flex-wrap items-center justify-center flex-col p-10">
    <div className="flex gap-6 flex-row w-full">
      <div className="flex-[1.5] py-4">
        <h5 className="text-9xl font-semibold">Saadat</h5>
        <div className="flex gap-36 items-center">
          <h6 className="text-lg max-w-44 text-wrap">Full Stack Developer</h6>
          <h5 className="text-9xl font-semibold">Ali</h5>
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
    <div className="flex justify-center items-center w-full gap-4">
      <Button asChild variant={"outline"} size={"lg"} className="rounded-full">
        <Link href="https://github.com/saadat-ali-awan" target="_blank" className="p-4 px-8"><Image src={'/brands/github.svg'} className="dark:invert" width={24} height={24} alt={'Github'} /> Github</Link>
      </Button>
      <Button asChild variant={"outline"} size={"lg"} className="rounded-full">
        <Link href="https://www.linkedin.com/in/saadatali1999/" target="_blank" className="p-4 px-8"><Image src={'/brands/linkedin.svg'} className="dark:invert" width={24} height={24} alt={'LinkedIn'} /> LinkedIn</Link>
      </Button>
      <Button asChild variant={"outline"} size={"lg"} className="rounded-full">
        <Link href="mailto:saadatali0202@gmail.com" target="_blank" className="p-4 px-8"><Image src={'/icons/mail.svg'} className="dark:invert" width={24} height={24} alt={'Email'} /> E-Mail</Link>
      </Button>
      <Button asChild variant={"outline"} size={"lg"} className="rounded-full">
        <Link href="https://wa.me/+923360224999" target="_blank" className="p-4 px-8"><Image src={'/brands/whatsapp.svg'} className="dark:invert" width={24} height={24} alt={'WhatsApp'} /> WhatsApp</Link>
      </Button>
      <Button asChild variant={"outline"} size={"lg"} className="rounded-full">
        <Link href="https://wellfound.com/saadatali1999" target="_blank" className="p-4 px-8"><Image src={'/brands/wellfound.svg'} className="dark:invert" width={24} height={24} alt={'Wellfound'} /> Wellfound</Link>
      </Button>
    </div>
  </footer>
);
