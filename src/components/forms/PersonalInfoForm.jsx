"use client"

const PersonalInfoForm = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({
      ...data,
      [field]: value,
    })
  }

  return (
    <div className="form-section">
      <h3>Personal Information</h3>

      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Enter your full name"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="your.email@gmail.com"
          />
        </div>

        <div className="form-group">
          <label>Phone *</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+91 9876543210"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          value={data.location}
          onChange={(e) => handleChange("location", e.target.value)}
          placeholder="City, State, India"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>LinkedIn Profile</label>
          <input
            type="url"
            value={data.linkedin}
            onChange={(e) => handleChange("linkedin", e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        <div className="form-group">
          <label>GitHub Profile</label>
          <input
            type="url"
            value={data.github}
            onChange={(e) => handleChange("github", e.target.value)}
            placeholder="https://github.com/yourusername"
          />
        </div>
      </div>
    </div>
  )
}

export default PersonalInfoForm
