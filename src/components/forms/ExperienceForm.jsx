"use client"

const ExperienceForm = ({ data, updateData }) => {
  const addExperience = () => {
    updateData([
      ...data,
      {
        position: "",
        company: "",
        duration: "",
        description: "",
      },
    ])
  }

  const removeExperience = (index) => {
    updateData(data.filter((_, i) => i !== index))
  }

  const updateExperience = (index, field, value) => {
    const updated = data.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    updateData(updated)
  }

  return (
    <div className="form-section">
      <div className="section-header">
        <h3>Experience & Internships</h3>
        <button type="button" className="add-button" onClick={addExperience}>
          + Add Experience
        </button>
      </div>

      {data.map((experience, index) => (
        <div key={index} className="experience-item">
          <div className="item-header">
            <h4>Experience {index + 1}</h4>
            {data.length > 1 && (
              <button type="button" className="remove-button" onClick={() => removeExperience(index)}>
                Remove
              </button>
            )}
          </div>

          <div className="form-group">
            <label>Position/Role *</label>
            <input
              type="text"
              value={experience.position}
              onChange={(e) => updateExperience(index, "position", e.target.value)}
              placeholder="e.g., Software Developer Intern, Full Stack Developer"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Company/Organization *</label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => updateExperience(index, "company", e.target.value)}
                placeholder="Company Name"
              />
            </div>

            <div className="form-group">
              <label>Duration</label>
              <input
                type="text"
                value={experience.duration}
                onChange={(e) => updateExperience(index, "duration", e.target.value)}
                placeholder="Jun 2023 - Aug 2023"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={experience.description}
              onChange={(e) => updateExperience(index, "description", e.target.value)}
              placeholder="Describe your responsibilities and achievements"
              rows="3"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExperienceForm
