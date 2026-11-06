
"use client";

import { useState ,useEffect} from "react";
import "./Header.css";

export default function Header() {


  const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  const links = [
    { label: "About", href: "#projects" },
    { label: "Projects", href: "#projects" },
    { label: "Beleifs", href: "#projects" },
  ];

  
  return (
    <header className={`elyse-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-container">
        <a href="#home" className="elyse-logo">
          {/* <img
            src="https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/69388fa01bc6655a709f40a4_Logo.svg"
            alt="SHIVSHIVAYE"
          /> */}
    <h4 className="logo">SHIVSHIVAYE</h4>  
        </a>

        <nav className="elyse-desktop-nav">
          {links.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#book-a-visit" className="elyse-book-button">
          BOOK A VISIT
        </a>

        <button
          className="elyse-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="elyse-mobile-menu">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.label}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#book-a-visit"
            onClick={() => setMenuOpen(false)}
          >
            BOOK A VISIT
          </a>
        </div>
      )}
    </header>
  );
}
