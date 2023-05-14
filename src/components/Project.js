import React from "react";
import "../styles/Project.css";

function Project (props) {

    return (
        <main>
            <div className="card-section">
                <div className="card-wrapper">
                    <div className="card">
                        <h1 className="card-title">{props.title}</h1>
                        <a href={props.deployment} target="_blank" rel="nonreferrer">
                            <img className="project-image" src={props.imageSource} alt={props.imgAlt}/>
                        </a>
                        <div className="card-body">
                            <p className="card-text">{props.description}</p>
                            <a 
                            href={props.deployment}
                            target="_blank"
                            rel="nonreferrer"
                            className="project-anchor hover-underline-animation"
                            >
                            Deployment
                            </a>
                            <a
                            href={props.githubLink}
                            target="_blank"
                            rel="nonrefferer"
                            className="project-anchor hover-underline-animation"
                            >
                            GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
    
    
}
export default Project;