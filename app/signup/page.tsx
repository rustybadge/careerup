'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { StyledForm } from '@/components/StyledForm'

export default function SignUp() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    job: "",
    industry: "",
    interests: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log("Form submitted:", formData)
      // Here you would typically send the data to your backend
      // For now, we'll just redirect to the success page
      router.push("/signup-success")
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred during sign up")
    }
  }

  const fields = [
    { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
    { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
    { name: "password", label: "Password", type: "password", placeholder: "Your secure password" },
    { name: "job", label: "Job Title", type: "text", placeholder: "Your job title" },
    { name: "industry", label: "Industry", type: "text", placeholder: "Your industry" },
    { name: "interests", label: "Interests", type: "text", placeholder: "Your interests (comma separated)" },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
      <StyledForm onSubmit={handleSubmit} fields={fields} submitText="Sign Up" />
    </div>
  )
}