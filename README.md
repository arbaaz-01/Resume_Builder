# Resume Builder

A simple web-based application built with React to create resumes and export them as single-page PDF files. The app provides an intuitive form-based interface to input personal information, education, skills, projects, experience, achievements, certifications, and custom sections, with a real-time preview and downloadable PDF output.

## Features
- **User-Friendly Interface**: Input resume details through a clean, organized form with sections for personal info, education, skills, projects, experience, achievements, certifications, and custom sections.
- **Real-Time Preview**: View resume updates instantly in a formatted preview pane.
- **PDF Export**: Download a single-page A4 PDF with optimized margins, horizontal lines between sections, and a professional layout.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Technologies Used
- **Frontend**: React, JavaScript, HTML, CSS
- **Libraries**: `html2canvas` (for PDF rendering), `jsPDF` (for PDF generation)
- **Styling**: Custom CSS with responsive design
- **Build Tool**: Vite

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/arbaaz-01/Resume-Builder.git
   cd resume-builder
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Development Server**:
   ```bash
   npm start
   ```

## Usage
1. Open the app in your browser.
2. Fill out the form sections:
   - **Personal Info**: Name, email, phone, location, LinkedIn, GitHub.
   - **Objective**: A brief professional summary.
   - **Education**: Degree, institution, year, and percentage/CGPA.
   - **Skills**: Programming languages, technical skills, and tools/technologies.
   - **Projects**: Title, technologies, link (e.g., GitHub), and description (use newlines for bullet points).
   - **Experience**: Position, company, duration, and description (use newlines for bullet points).
   - **Achievements**: List notable achievements.
   - **Certifications**: List certifications.
3. View the real-time preview on the right side.
4. Click "Download PDF" to generate and download a single-page A4 PDF resume.

**Tips**:
- Use newlines (press Enter) in project and experience descriptions to create bullet points in the PDF.
- Ensure complete URLs for LinkedIn and GitHub links to avoid formatting issues.
- Keep content concise to fit within a single A4 page.