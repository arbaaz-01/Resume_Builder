"use client"

import { useState } from "react"

const AchievementsForm = ({ data, updateData }) => {
  const [newAchievement, setNewAchievement] = useState("")
  const [newCertification, setNewCertification] = useState("")

  const addAchievement = () => {
    if (newAchievement.trim()) {
      updateData("achievements", [...data.achievements, newAchievement.trim()])
      setNewAchievement("")
    }
  }

  const removeAchievement = (index) => {
    updateData(
      "achievements",
      data.achievements.filter((_, i) => i !== index),
    )
  }

  const addCertification = () => {
    if (newCertification.trim()) {
      updateData("certifications", [...data.certifications, newCertification.trim()])
      setNewCertification("")
    }
  }

  const removeCertification = (index) => {
    updateData(
      "certifications",
      data.certifications.filter((_, i) => i !== index),
    )
  }

  return (
    <div className="form-section">
      <h3>Achievements & Certifications</h3>

      <div className="achievement-section">
        <h4>Achievements</h4>
        <div className="input-group">
          <input
            type="text"
            value={newAchievement}
            onChange={(e) => setNewAchievement(e.target.value)}
            placeholder="e.g., Winner of Hackathon 2023, Dean's List"
            onKeyPress={(e) => e.key === "Enter" && addAchievement()}
          />
          <button type="button" onClick={addAchievement} className="add-btn">
            Add
          </button>
        </div>

        <div className="items-list">
          {data.achievements.map((achievement, index) => (
            <div key={index} className="list-item">
              <span>{achievement}</span>
              <button type="button" onClick={() => removeAchievement(index)} className="remove-item">
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="certification-section">
        <h4>Certifications</h4>
        <div className="input-group">
          <input
            type="text"
            value={newCertification}
            onChange={(e) => setNewCertification(e.target.value)}
            placeholder="e.g., AWS Cloud Practitioner, Google Cloud Associate"
            onKeyPress={(e) => e.key === "Enter" && addCertification()}
          />
          <button type="button" onClick={addCertification} className="add-btn">
            Add
          </button>
        </div>

        <div className="items-list">
          {data.certifications.map((certification, index) => (
            <div key={index} className="list-item">
              <span>{certification}</span>
              <button type="button" onClick={() => removeCertification(index)} className="remove-item">
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AchievementsForm
