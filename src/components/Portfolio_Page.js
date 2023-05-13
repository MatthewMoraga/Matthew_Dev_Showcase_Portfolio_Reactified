import React from "react";
import Project from "./Project";
import techDevBlog from "../images/blog_website_dashboard_page.jpg"
import codeQuiz from "../images/question_page.png"
import '../styles/Portfolio_Page.css';
import "../styles/Project.css";

function Portfolio() {
  return (
   <main>
    <div className="protfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="portfolio-container">
        {[
          {
            title: "Tech Dev Blog",
            description: "MVC Dev Showcase",
            imageSource: techDevBlog,
            deployment: 
            "https://immense-caverns-94261.herokuapp.com/",
            githubLink:
            "https://github.com/MatthewMoraga/MVC_Paradigm_Development_Blog",
          },
          {
            title: "Code Quiz Game",
            description: "Test Your Coding Knowledge",
            imageSource: codeQuiz,
            deployment: 
            "https://matthewmoraga.github.io/code_quiz_game_v1/",
            githubLink:
            "https://github.com/MatthewMoraga/code_quiz_game_v1"
          }
        ].map((project, index) => (
          <div key={index}>
            <Project
            title={project.title}
            description={project.description}
            imageSource={project.imageSource}
            deployment={project.deployment}
            githubLink={project.githubLink}
            />
          </div>
        ))}

      </div>
    </div>
   </main>
  )
}

export default Portfolio;