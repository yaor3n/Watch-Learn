"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const QuizTypePage = () => {
  const router = useRouter();

  return (
    <>
      <h1>Select a Quiz</h1>
      <Button onClick={() => router.push("/teacher/quiztype")} className="mt-4">Create Question</Button >
    </>
  )
}

export default QuizTypePage
