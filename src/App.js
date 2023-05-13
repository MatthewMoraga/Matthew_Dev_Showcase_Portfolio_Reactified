import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landing_Page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio_Page";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import './styles/index.css';

function App() {
  return (
   <main className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<About />} className="hover-underline-animation"/>
            <Route path="portfolio/about" element={<About />} className="hover-underline-animation"/>
            <Route path="portfolio/portfolio" element={<Portfolio />} className="hover-underline-animation"/>
            <Route path="portfolio/resume" element={<Resume />} className="hover-underline-animation"/>
            <Route path="portfolio/contact" element={<Contact />} className="hover-underline-animation"/>
          </Routes>
        <Footer />
      </Router>
   </main>
  )
}

export default App;
