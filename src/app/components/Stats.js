import React from "react";
import "./About.css";

export default function Stats() {
  return (
    <div data-anim="stagger-wrap" className="stats">

      {/* ROW 1 */}
      <div className="stats-row-1">

        {/* 60% */}
        <div data-anim="stagger" className="stats-box stats-box-1">
          <div className="stats-box-row">
            <div data-number="60" className="h2 mob-h5">
              60
            </div>

            <div className="text-color-white-70">
              <div className="b0 mob-b1 is-it">
                %
              </div>
            </div>
          </div>

          <p className="b1 mob-b4">
            green spaces for tranquility &amp; wellness.
          </p>
        </div>

        {/* 30 */}
        <div data-anim="stagger" className="stats-box stats-box-2">
          <div className="stats-box-row">
            <div data-number="30" className="h2 mob-h5">
              30
            </div>
          </div>

          <p className="b1 mob-b4">
            exclusive residences, each tailored for comfort
            &amp; elegance.
          </p>
        </div>

      </div>

      {/* ROW 2 */}
      <div className="stats-row-2">

        {/* 150K */}
        <div data-anim="stagger" className="stats-box stats-box-3">
          <div className="stats-box-row in-stats-row-2">

            <div className="h2 mob-h5">
              <span data-number="150">150</span>k
            </div>

            <div className="text-color-white-70">
              <div className="b0 mob-b1 is-it">
                sq. ft.
              </div>
            </div>

          </div>

          <p className="b1 mob-b4">
            green spaces for tranquility &amp; wellness.
          </p>
        </div>

      </div>

      {/* ROW 3 */}
      <div className="stats-row-3">

        {/* 24/7 */}
        <div data-anim="stagger" className="stats-box stats-box-4">

          <div className="stats-box-row">

            <div data-number="24" className="h2 mob-h5">
              24
            </div>

            <div className="h2 mob-h5">
              /
            </div>

            <div data-number="7" className="h2 mob-h5">
              7
            </div>

          </div>

          <div className="stats-box-4-text">
            <p className="b1 mob-b4">
              concierge services, meeting every need effortlessly.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
