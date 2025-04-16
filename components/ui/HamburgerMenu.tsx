
'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger className="p-2" title="Menu">
        <Menu className="w-6 h-6 text-[#f6f8d5] hover:text-[#98D2C0]  transition ease-initial duration-300" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="items-center text-center ">
          <SheetTitle className="text-[#205781] md:font-bold text-3xl mt-5 underline">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-4">
          <a href="/somewhere" className="text-xl font-medium text-[#205781] hover:text-[#98d2c0] hover:text-2xl hover:underline mt-7 ml-7 transition-all duration-400">&bull; 📋 Dashboard</a>
          <a href="/somewhere" className="text-xl font-medium text-[#205781] hover:text-[#98d2c0] hover:text-2xl hover:underline mt-7 ml-7 transition-all duration-400">&bull; ✏️ Edit Profile</a>
          <a href="/somewhere" className="text-xl font-medium text-[#205781] hover:text-[#98d2c0] hover:text-2xl hover:underline mt-7 ml-7 transition-all duration-400">&bull; 🏆 Leaderboard</a>
          <a href="/somewhere" className="text-xl font-medium text-[#205781] hover:text-[#98d2c0] hover:text-2xl hover:underline mt-7 ml-7 transition-all duration-400">&bull; 🏅 Badges</a>
          <a href="/somewhere" className="text-xl font-medium text-[#205781] hover:text-[#98d2c0] hover:text-2xl hover:underline mt-7 ml-7 transition-all duration-400">&bull; ⚙️ Settings</a>
          <a href="/somewhere" className="text-xl font-medium text-[#205781] hover:text-[#98d2c0] hover:text-2xl hover:underline mt-7 ml-7 transition-all duration-400">&bull; ℹ️ About</a>
          <a href="/somewhere" className="text-xl font-medium text-[#205781] hover:text-[#98d2c0] hover:text-2xl hover:underline mt-7 ml-7 transition-all duration-400">&bull; 🚪Logout</a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
