"use client"

const ProjectsForm = ({ data, updateData }) => {
  const addProject = () => {
    updateData([
      ...data,
      {
        title: "",
        description: "",
        technologies: "",
        link: "",
      },
    ])
  }

  const removeProject = (index) => {
    updateData(data.filter((_, i) => i !== index))
  }

  const updateProject = (index, field, value) => {
    const updated = data.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    updateData(updated)
  }

  return (
    <div className="form-section">
      <div className="section-header">
        <h3>Projects</h3>
        <button type="button" className="add-button" onClick={addProject}>
          + Add Project
        </button>
      </div>

      {data.map((project, index) => (
        <div key={index} className="project-item">
          <div className="item-header">
            <h4>Project {index + 1}</h4>
            {data.length > 1 && (
              <button type="button" className="remove-button" onClick={() => removeProject(index)}>
                Remove
              </button>
            )}
          </div>

          <div className="form-group">
            <label>Project Title *</label>
            <input
              type="text"
              value={project.title}
              onChange={(e) => updateProject(index, "title", e.target.value)}
              placeholder="e.g., E-commerce Website, Chat Application"
            />
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              value={project.description}
              onChange={(e) => updateProject(index, "description", e.target.value)}
              placeholder="Describe your project, its features, and your role (2-3 lines)"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Technologies Used</label>
            <input
              type="text"
              value={project.technologies}
              onChange={(e) => updateProject(index, "technologies", e.target.value)}
              placeholder="e.g., React, Node.js, MongoDB, Express"
            />
          </div>

          <div className="form-group">
            <label>Project Link (GitHub/Demo)</label>
            <input
              type="url"
              value={project.link}
              onChange={(e) => updateProject(index, "link", e.target.value)}
              placeholder="https://github.com/username/project"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsForm
