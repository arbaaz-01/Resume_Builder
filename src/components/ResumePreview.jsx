"use client"

import { useRef } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

const ResumePreview = ({ resumeData }) => {
  const resumeRef = useRef()

  const downloadPDF = async () => {
    const element = resumeRef.current
    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
      allowTaint: true,
      width: element.offsetWidth,
      height: element.offsetHeight,
    })

    const imgData = canvas.toDataURL("image/png", 0.7)
    const pdf = new jsPDF("p", "mm", "a4")
    const imgWidth = 198
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    pdf.addImage(imgData, "PNG", 6, 6, imgWidth, imgHeight)
    pdf.save(`${resumeData.personalInfo.name || "resume"}.pdf`)
  }

  return (
    <div className="resume-preview">
      <div className="preview-header">
        <h3>Resume Preview</h3>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>

      <div className="resume-container">
        <div className="resume" ref={resumeRef}>
          <div className="resume-header">
            <h1>{resumeData.personalInfo.name || "Your Name"}</h1>
            <div className="contact-info">
              {[
                resumeData.personalInfo.location,
                resumeData.personalInfo.email,
                resumeData.personalInfo.phone,
                resumeData.personalInfo.linkedin,
                resumeData.personalInfo.github,
              ]
                .filter(Boolean)
                .map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < [resumeData.personalInfo.location, resumeData.personalInfo.email, resumeData.personalInfo.phone, resumeData.personalInfo.linkedin, resumeData.personalInfo.github].filter(Boolean).length - 1 && " | "}
                  </span>
                ))}
            </div>
          </div>

       

          {resumeData.education.some((edu) => edu.degree) && (
            <div className="resume-section">
              <h2>Education</h2>
              <hr />
              {resumeData.education.map(
                (edu, index) =>
                  edu.degree && (
                    <div key={index} className="education-item">
                      <div className="item-header">
                        <strong>{edu.degree}</strong>
                        <span>{edu.year}</span>
                      </div>
                      <div>{edu.institution}</div>
                      {edu.percentage && <div>{edu.percentage}</div>}
                    </div>
                  ),
              )}
            </div>
          )}

          {(resumeData.skills.programming.length > 0 ||
            resumeData.skills.technical.length > 0 ||
            resumeData.skills.tools.length > 0) && (
            <div className="resume-section">
              <h2>Skills</h2>
              <hr />
              {resumeData.skills.programming.length > 0 && (
                <div className="skill-group">
                  <strong>Programming Languages: </strong>
                  {resumeData.skills.programming.join(", ")}
                </div>
              )}
              {resumeData.skills.technical.length > 0 && (
                <div className="skill-group">
                  <strong>Technical Skills: </strong>
                  {resumeData.skills.technical.join(", ")}
                </div>
              )}
              {resumeData.skills.tools.length > 0 && (
                <div className="skill-group">
                  <strong>Tools & Technologies: </strong>
                  {resumeData.skills.tools.join(", ")}
                </div>
              )}
            </div>
          )}

          {resumeData.projects.some((project) => project.title) && (
            <div className="resume-section">
              <h2>Projects</h2>
              <hr />
              {resumeData.projects.map(
                (project, index) =>
                  project.title && (
                    <div key={index} className="project-item">
                      <div className="item-header">
                        <strong>{project.title}{project.technologies && `: ${project.technologies}`}</strong>
                        {project.link && <span className="project-link">({project.link})</span>}
                      </div>
                      {project.description && (
                        <ul>
                          {project.description.split('\n').map((line, i) => (
                            line.trim() && <li key={i}>{line}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ),
              )}
            </div>
          )}

          {resumeData.experience.some((exp) => exp.position) && (
            <div className="resume-section">
              <h2>Experience</h2>
              <hr />
              {resumeData.experience.map(
                (exp, index) =>
                  exp.position && (
                    <div key={index} className="experience-item">
                      <div className="item-header">
                        <strong>{exp.position}</strong>
                        <span>{exp.duration}</span>
                      </div>
                      <div className="company">{exp.company}</div>
                      {exp.description && (
                        <ul>
                          {exp.description.split('\n').map((line, i) => (
                            line.trim() && <li key={i}>{line}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ),
              )}
            </div>
          )}

          {resumeData.achievements.length > 0 && (
            <div className="resume-section">
              <h2>Achievements</h2>
              <hr />
              <ul>
                {resumeData.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {resumeData.certifications.length > 0 && (
            <div className="resume-section">
              <h2>Certifications</h2>
              <hr />
              <ul>
                {resumeData.certifications.map((certification, index) => (
                  <li key={index}>{certification}</li>
                ))}
              </ul>
            </div>
          )}

          {resumeData.customSections.length > 0 && (
            <div className="resume-section">
              <h2>Custom Section</h2>
              <hr />
              <ul>
                {resumeData.customSections.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResumePreview