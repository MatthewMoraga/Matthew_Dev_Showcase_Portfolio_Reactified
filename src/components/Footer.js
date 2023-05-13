import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import '../styles/Footer.css';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/MatthewMoraga",
      icon: faGithub,
    },
    {
      name: "Gmail",
      url: "matthewmoraga90@gmail.com",
      icon: faEnvelope
    }
  ]

  return (


   <main>
      <footer>
        <div className="footer-wrapper">
          <h1>Socials</h1>
          <section className="links-wrapper">
            {socialLinks.map(({ name, url, icon, color}) => (
              <div className="link-card"
              key={name}
              >
                <a
                href={url}
                className={`icon ${name}`}
                target="_blank"
                rel="nonrefferer"
                >
                  <FontAwesomeIcon
                  icon={icon}
                  bounce
                  />
                </a>
                <a href={url} target="_blank" rel="nonrefferer" className="hover-underline-animation">
                  <span>{name}</span>
                </a>
              </div>

            ))}
          </section>
        </div>

      </footer>

        



   </main>
  )
}

export default Footer;