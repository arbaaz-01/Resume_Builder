"use client"

import { useState } from "react"
import PersonalInfoForm from "./forms/PersonalInfoForm"
import EducationForm from "./forms/EducationForm"
import SkillsForm from "./forms/SkillsForm"
import ProjectsForm from "./forms/ProjectsForm"
import ExperienceForm from "./forms/ExperienceForm"
import AchievementsForm from "./forms/AchievementsForm"
import CustomSectionForm from "./forms/CustomSectionForm"

const ResumeForm = ({ resumeData, updateResumeData }) => {
  const [activeSection, setActiveSection] = useState("personal")

  const sections = [
    { id: "personal", label: "Personal Info", icon: "👤" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "skills", label: "Skills", icon: "💻" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "achievements", label: "Achievements", icon: "🏆" },
    { id: "custom", label: "Custom Section", icon: "📝" },
  ]

  const renderActiveForm = () => {
    switch (activeSection) {
      case "personal":
        return (
          <PersonalInfoForm
            data={resumeData.personalInfo}
            updateData={(data) => updateResumeData("personalInfo", data)}
          />
        )
      case "education":
        return <EducationForm data={resumeData.education} updateData={(data) => updateResumeData("education", data)} />
      case "skills":
        return <SkillsForm data={resumeData.skills} updateData={(data) => updateResumeData("skills", data)} />
      case "projects":
        return <ProjectsForm data={resumeData.projects} updateData={(data) => updateResumeData("projects", data)} />
      case "experience":
        return (
          <ExperienceForm data={resumeData.experience} updateData={(data) => updateResumeData("experience", data)} />
        )
      case "achievements":
        return <AchievementsForm data={resumeData} updateData={updateResumeData} />
      case "custom":
        return (
          <CustomSectionForm
            data={resumeData.customSections}
            updateData={(data) => updateResumeData("customSections", data)}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="resume-form">
      <div className="form-navigation">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-button ${activeSection === section.id ? "active" : ""}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="nav-icon">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>

      <div className="form-content">{renderActiveForm()}</div>
    </div>
  )
}

export default ResumeForm