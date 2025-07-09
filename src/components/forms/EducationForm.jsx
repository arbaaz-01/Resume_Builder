"use client"

const EducationForm = ({ data, updateData }) => {
  const addEducation = () => {
    updateData([
      ...data,
      {
        degree: "",
        institution: "",
        year: "",
        percentage: "",
      },
    ])
  }

  const removeEducation = (index) => {
    updateData(data.filter((_, i) => i !== index))
  }

  const updateEducation = (index, field, value) => {
    const updated = data.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    updateData(updated)
  }

  return (
    <div className="form-section">
      <div className="section-header">
        <h3>Education</h3>
        <button type="button" className="add-button" onClick={addEducation}>
          + Add Education
        </button>
      </div>

      {data.map((education, index) => (
        <div key={index} className="education-item">
          <div className="item-header">
            <h4>Education {index + 1}</h4>
            {data.length > 1 && (
              <button type="button" className="remove-button" onClick={() => removeEducation(index)}>
                Remove
              </button>
            )}
          </div>

          <div className="form-group">
            <label>Degree/Course *</label>
            <input
              type="text"
              value={education.degree}
              onChange={(e) => updateEducation(index, "degree", e.target.value)}
              placeholder="e.g., MCA"
            />
          </div>

          <div className="form-group">
            <label>Institution/School *</label>
            <input
              type="text"
              value={education.institution}
              onChange={(e) => updateEducation(index, "institution", e.target.value)}
              placeholder="College/School Name"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Year of Completion *</label>
              <input
                type="text"
                value={education.year}
                onChange={(e) => updateEducation(index, "year", e.target.value)}
                placeholder="2024"
              />
            </div>

            <div className="form-group">
              <label>Percentage/CGPA</label>
              <input
                type="text"
                value={education.percentage}
                onChange={(e) => updateEducation(index, "percentage", e.target.value)}
                placeholder="85% or 8.5 CGPA"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EducationForm