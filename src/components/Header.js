import React from "react";
import { Link } from "react-router-dom"
import '../styles/Header.css';

function Header() {
  return (
    <>
    <header className="">
      <section className="header-wrap">
        <section className="title-wrap">
          <h1 className="header-title">Matthew Moraga's</h1>
          <h1 className="header-title">Cool Portfolio</h1>
        </section>
        <nav>
          <Link as={Link} to="portfolio/about" className="hover-underline-animation">About Me</Link>
          <Link as={Link} to="portfolio/portfolio" className="hover-underline-animation">Portfolio</Link>
          <Link as={Link} to="portfolio/resume" className="hover-underline-animation">Resume</Link>
          <Link as={Link} to="portfolio/contact" className="hover-underline-animation">Contact</Link>
        </nav>
      </section>
    </header>
    </>
  )
}

export default Header;