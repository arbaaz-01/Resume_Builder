"use client"

import { useState } from "react"
import ResumeForm from "./components/ResumeForm"
import ResumePreview from "./components/ResumePreview"
import "./App.css"

function App() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
    },
    objective: "",
    education: [
      {
        degree: "",
        institution: "",
        year: "",
        percentage: "",
      },
    ],
    skills: {
      technical: [],
      programming: [],
      tools: [],
    },
    projects: [
      {
        title: "",
        description: "",
        technologies: "",
        link: "",
      },
    ],
    experience: [
      {
        position: "",
        company: "",
        duration: "",
        description: "",
      },
    ],
    achievements: [],
    certifications: [],
    customSections: [], // New field for custom sections
  })

  const updateResumeData = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Resume Builder</h1>
      </header>

      <div className="app-container">
        <div className="form-section">
          <ResumeForm resumeData={resumeData} updateResumeData={updateResumeData} />
        </div>

        <div className="preview-section">
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
    </div>
  )
}

export default App