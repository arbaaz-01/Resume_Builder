"use client"

import { useState } from "react"

const SkillsForm = ({ data, updateData }) => {
  const [newSkill, setNewSkill] = useState({ technical: "", programming: "", tools: "" })

  const addSkill = (category) => {
    if (newSkill[category].trim()) {
      updateData({
        ...data,
        [category]: [...data[category], newSkill[category].trim()],
      })
      setNewSkill({ ...newSkill, [category]: "" })
    }
  }

  const removeSkill = (category, index) => {
    updateData({
      ...data,
      [category]: data[category].filter((_, i) => i !== index),
    })
  }

  const skillCategories = [
    {
      key: "programming",
      label: "Programming Languages",
      placeholder: "e.g., Java, Python, C++, JavaScript",
      suggestions: ["Java", "Python", "C++", "JavaScript", "C", "C#", "PHP", "Go", "Kotlin", "Swift"],
    },
    {
      key: "technical",
      label: "Technical Skills",
      placeholder: "e.g., Data Structures, Algorithms, DBMS",
      suggestions: [
        "Data Structures",
        "Algorithms",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Machine Learning",
        "Web Development",
      ],
    },
    {
      key: "tools",
      label: "Tools & Technologies",
      placeholder: "e.g., Git, Docker, AWS, React",
      suggestions: [
        "Git",
        "Docker",
        "AWS",
        "React",
        "Node.js",
        "MongoDB",
        "MySQL",
        "Firebase",
        "Android Studio",
        "VS Code",
      ],
    },
  ]

  return (
    <div className="form-section">
      <h3>Skills</h3>

      {skillCategories.map((category) => (
        <div key={category.key} className="skill-category">
          <h4>{category.label}</h4>

          <div className="skill-input">
            <input
              type="text"
              value={newSkill[category.key]}
              onChange={(e) => setNewSkill({ ...newSkill, [category.key]: e.target.value })}
              placeholder={category.placeholder}
              onKeyPress={(e) => e.key === "Enter" && addSkill(category.key)}
            />
            <button type="button" onClick={() => addSkill(category.key)} className="add-skill-btn">
              Add
            </button>
          </div>

          <div className="skill-suggestions">
            {category.suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="suggestion-btn"
                onClick={() => {
                  if (!data[category.key].includes(suggestion)) {
                    updateData({
                      ...data,
                      [category.key]: [...data[category.key], suggestion],
                    })
                  }
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>

          <div className="skill-tags">
            {data[category.key].map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
                <button type="button" onClick={() => removeSkill(category.key, index)} className="remove-tag">
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsForm
