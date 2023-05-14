import React from "react";
import '../styles/Resume.css';

function Resume() {
  return (
   <main>
    <section className="resume-border">
        <section className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <button className="download-resume-button">Download</button>
      </section>
      <section className="resume-section">
        </section>
      </section>
            <section className="resume-body">
              <section className="education-section box-shadow-resume">
                <h2 className="center-title">Education</h2>
                <h3 className="school">Union County College</h3>
                <p>Associates in Applied Sciences</p>
                <p>part time school 2012-2016</p>
              </section>
              <section className="certificate-section box-shadow-resume">
                <h2 className="center-title">Certificates</h2>
                <h3>Rutgers Coding Bootcamp</h3>
                <p>Full Stack Web Development</p>
                <p>Full Time Feb 2023 to May 2023</p>
              </section>
              <section className="work-section box-shadow-resume">
                <h2 className="center-title">Work Experience</h2>
                <h3>North Atlantic Packaging</h3>
                <p>Office Manager 8yrs</p>
                <p>2014-2022</p>
                <p>part time work 2014-2016</p>
                <p>full time work 2016-2022</p>
              </section>
            </section>
   </main>
  )
}

export default Resume;