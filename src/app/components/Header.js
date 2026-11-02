
"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smart mobile navigation
  useEffect(() => {
    const MOBILE_MAX = 479;

    const handleResize = () => {
      if (window.innerWidth > MOBILE_MAX) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Lumière Duplex", href: "#projects" },
    { label: "Crown Penthouse", href: "#projects" },
    { label: "Aurelia Suites", href: "#projects" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`elyse-header ${
        scrolled ? "is-scrolled" : ""
      } ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="header-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <img
            src="https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/69388fa01bc6655a709f40a4_Logo.svg"
            alt="Elyse Residence"
          />
        </a>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="nav-overlay"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closeMenu();
              }
            }}
          >
            <nav className="nav-menu active" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a href={link.href} key={link.label} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}

              <a
                href="#book-a-visit"
                className="book-btn"
                onClick={closeMenu}
              >
                BOOK A VISIT
              </a>
            </nav>
          </div>
        )}

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}

          <a href="#book-a-visit" className="book-btn">
            BOOK A VISIT
          </a>
        </nav>
      </div>
    </header>
  );
}
