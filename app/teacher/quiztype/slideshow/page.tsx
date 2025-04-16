"use client"
import React, { useState } from 'react'
import Banner from "@/components/Banner"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SlideShowPage = () => {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = () => setImageSrc(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
  }

  return (
    <>
      <Banner
        title="Watch & Learn"
        color="#205781"
        showBackButton={true}
        showHamburgerMenu={true}
        showProfileButton={true}
      />

      <h1 className="text-3xl font-bold text-center text-[#205781] pt-7 pb-5">
        Create Slideshow Quiz
      </h1>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="mx-auto w-[80%] h-64 border-4 border-dashed border-[#205781] flex items-center justify-center text-center text-[#205781] rounded-xl transition ease-linear duration-200 hover:bg-[#98D2C0] "
      >
        {imageSrc ? (
          <img src={imageSrc} alt="Dropped" className="max-h-full max-w-full" />
        ) : (
          <p className="text-lg font-medium">&#x2295; Drag & drop an image here from your computer</p>
        )}
      </div>


      <div className="">
        <h1 className="text-[#205781] font-bold text-3xl text-center pt-7 pb-5">
          Configure Options:
        </h1>

        <div className="grid grid-cols-2 gap-6 pl-10 pr-10">
          <Input type="text" placeholder="Option 1" className="h-15 text-[#205781] border-3 font-bold border-[#205781] hover:border-[#98d2c0] transition-all ease-linear duration-200" ></Input>
          <Input type="text" placeholder="Option 2" className="h-15 text-[#205781] border-3 font-bold border-[#205781] hover:border-[#98d2c0] transition-all ease-linear duration-200" ></Input>
          <Input type="text" placeholder="Option 3" className="h-15 text-[#205781] border-3 font-bold border-[#205781] hover:border-[#98d2c0] transition-all ease-linear duration-200" ></Input>
          <Input type="text" placeholder="Option 4" className="h-15 text-[#205781] border-3 font-bold border-[#205781] hover:border-[#98d2c0] transition-all ease-linear duration-200" ></Input>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Button type="submit" className="border-3 border-[#205781] bg-[#f6f8d5] text-[#205781] w-35 h-15 text-xl font-bold hover:bg-[#98D2C0]">&#x2295; Add</Button>
      </div>
    </>
  )
}

export default SlideShowPage
