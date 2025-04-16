"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Banner from "@/components/Banner"
// since Banner not within UI folder so dont need {} just use default export

const QuizTypePage = () => {
  const router = useRouter();
  return (
    <>
      <Banner title="Watch & Learn" color="#205781" showBackButton={true} showHamburgerMenu={true} showProfileButton={true} />
      <h1 className="text-5xl font-bold text-center text-[#205781] pt-25 pb-25">Select a Quiz to Create</h1>
      <div className="bg-[#98D2C0] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10 pb-10 pl-10 pr-10 rounded-2xl border-[3px] m-5 border-[#205781]">

        <Button onClick={() => router.push("/teacher/quiztype/slideshow")} className="w-full p-10 bg-[#F6F8D5] hover:bg-[#205781] text-[#205781] hover:text-[#F6F8D5] border-[3px] border-[#205781] text-2xl md:font-bold transition ease-linear duration-300">Create Slide Show Question</Button >
        <Button onClick={() => router.push("/teacher/quiztype/pic2pic")} className="w-full p-10 bg-[#F6F8D5] hover:bg-[#205781] text-[#205781] hover:text-[#F6F8D5] border-[3px] border-[#205781] text-2xl md:font-bold transition ease-linear duration-300">Create Picture to picture Question</Button >
        <Button onClick={() => router.push("/teacher/quiztype/vidqn")} className="w-full p-10 bg-[#F6F8D5] hover:bg-[#205781] text-[#205781] hover:text-[#F6F8D5] border-[3px] border-[#205781] text-2xl md:font-bold transition ease-linear duration-300">Create Video Question</Button >
        <Button onClick={() => router.push("/teacher/quiztype/dragndrop")} className="w-full p-10 bg-[#F6F8D5] hover:bg-[#205781] text-[#205781] hover:text-[#F6F8D5] border-[3px] border-[#205781] text-2xl md:font-bold transition ease-linear duration-300">Create Drag & Drop Question</Button >
        <Button onClick={() => router.push("/teacher/quiztype/whichimg")} className="w-full p-10 bg-[#F6F8D5] hover:bg-[#205781] text-[#205781] hover:text-[#F6F8D5] border-[3px] border-[#205781] text-2xl md:font-bold transition ease-linear duration-300">Create Match Image Question</Button >
        <Button onClick={() => router.push("/teacher/quiztype/imghotspot")} className="w-full p-10 bg-[#F6F8D5] hover:bg-[#205781] text-[#205781] hover:text-[#F6F8D5] border-[3px] border-[#205781] text-2xl md:font-bold transition ease-linear duration-300">Create Image Hotspot Question</Button >
      </div>
    </>
  )
}

export default QuizTypePage
