import React from "react";
import { Link } from "react-router-dom"
import '../styles/Header.css';
import Navigation from "./Navigation";

function Header() {
  return (
    <>
    <header className="">
      <section className="header-wrap">
        <section className="title-wrap">
          <h1 className="header-title">Matthew Moraga's</h1>
          <h1 className="header-title">Cool Portfolio</h1>
        </section>
      </section>
      <Navigation />
    </header>
    </>
  )
}

export default Header;