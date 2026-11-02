
"use client";

import "./IntroHead.css";

export default function IntroHead() {
  return (
    <div className="intro__head">
      <p className="intro__text">
        Where future
        <br />
        gains momentum
      </p>

      <div className="intro__bookmark">
        <a
          className="intro__scroll-button"
          href="#intro-next"
          aria-label="Scroll to next section"
        >
          <svg
            viewBox="0 0 12 7"
            width="12"
            height="7"
            aria-hidden="true"
          >
            <path d="M1 1l5 5 5-5" />
          </svg>
        </a>
      </div>
    </div>
  );
}
