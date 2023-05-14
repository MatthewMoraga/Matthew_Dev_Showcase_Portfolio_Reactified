import React from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
          <Link as={Link} to="portfolio/about" className="hover-underline-animation">About Me</Link>
          <Link as={Link} to="portfolio/portfolio" className="hover-underline-animation">Portfolio</Link>
          <Link as={Link} to="portfolio/resume" className="hover-underline-animation">Resume</Link>
          <Link as={Link} to="portfolio/contact" className="hover-underline-animation">Contact</Link>
        </nav>
    )
}

export default Navigation;