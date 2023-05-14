import React from "react";
import selfPhoto from "../images/self_photo_white.jpg"
import '../styles/About.css';

function About() {
  return (
   <main className="about-body">
        <h1 className="about-title">About Me</h1>
        <section className="about-wrapper">
          <section className="self-photo-wrapper">
            <img src={selfPhoto} className="self-photo box-shadow-photo" />
          </section>
        </section>
      <section className="about-section">
        <textarea className="about-paragraph-1 box-shadow-p" disabled>
          Hello! my name is Matthew Moraga, and I am currently a student at
          Rutgers University Coding Bootcamp. I am very excited that I made 
          the decision to take the course. I learned many skills and
          best practices from Instructor JD Tadlock. When I graduate
          from the course I aspire to get a job in the field as a developer.
          I believe that I have a lot to offer as a developer, and any tech company
          that would hire me would not regret it.
        </textarea>
        <ul className="proficiency-area box-shadow-pa">
          <h4 className="proficiency-title">Proficiencies:</h4>
          <li>Fullstack Web Developer</li>
          <li>javaScript</li>
          <li>HTML</li>
          <li>CSS - Vanilla</li>
          <li>CSS - Bootstrap</li>
          <li>Web APIs</li>
          <li>Third Party APIs</li>
          <li>Server APIs</li>
          <li>NodeJS</li>
          <li>MVC</li>
          <li>ORM</li>
          <li>OOP</li>
          <li>Express</li>
          <li>MySql - Sequelize</li>
          <li>NoSql - MongoDB</li>
          <li>Handlebars Engine</li>
          <li>Authentication</li>
          <li>React</li>
          <li>MERN Stack</li>
        </ul>
      </section>
   </main>
  )
}

export default About;