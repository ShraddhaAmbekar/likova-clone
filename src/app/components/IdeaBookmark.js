
"use client";

import "./IdeaBookmark.css";

export default function IdeaBookmark() {
  return (
    <div className="idea__bookmark">
      <div className="idea__bookmark-inner">
        <a
          className="idea__bookmark-button"
          href="#intro-next"
          aria-label="Scroll to the next section"
        >
          <svg
            className="idea__bookmark-arrow"
            width="12"
            height="7"
            viewBox="0 0 12 7"
            aria-hidden="true"
          >
            <path
              d="m1 1 5 5 5-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
