'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import NavbarMenu from "./NavbarMenu";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center justify-center space-y-6 w-4/5 h-4/5">
        <NavbarMenu closeMenu={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
