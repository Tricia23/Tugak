import React from "react";
import "./App.css";

function Navigation() {
  return (
    <div>
      <header>
        <div>
          <span className="logo-text">Logo Image</span>
        </div>
        <svg
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-300 0 950 270"
          className="background"
        >
          <path
            d="M-314,267 C105,364 400,100 812,279"
            fill="none"
            stroke="white"
            stroke-width="120"
            stroke-linecap="round"
          />
        </svg>
        <div className="banner-text-wrap">
          <h2 className="banner-text">Tugak Pharmacy</h2>
          <span className="divider"></span>
          <span className="banner-caption">
            Serving all the health care needs in our <br />
            community and beyond.
          </span>
          <a className="contact-us-button" href="#contact">
            <span>Contact Us</span>
          </a>
        </div>
        <div className="banner-image-wrapper">
          <div className="banner-image"></div>
        </div>
      </header>

      <div className="down-arrow-wrap">
        <a href="#about">
          <svg
            width="145"
            height="71"
            viewBox="0 0 445 281"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="down-arrow"
          >
            <path
              d="M434.252 32.203L412.843 10.787C405.424 3.747 396.759 0.225998 386.868 0.225998C376.773 0.225998 368.211 3.747 361.168 10.787L222.41 149.549L83.653 10.791C76.611 3.751 68.047 0.230003 57.956 0.230003C48.06 0.230003 39.397 3.751 31.977 10.791L10.849 32.207C3.615 39.436 0 48.099 0 58.188C0 68.465 3.619 77.03 10.848 83.881L196.712 269.746C203.567 276.976 212.128 280.594 222.409 280.594C232.497 280.594 241.159 276.977 248.386 269.746L434.251 83.881C441.294 76.837 444.818 68.273 444.818 58.188C444.819 48.287 441.295 39.629 434.252 32.203Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="222.409"
                y1="0.225998"
                x2="222.409"
                y2="280.594"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.166667" stop-color="#002F62" />
                <stop offset="1" stop-color="#138B89" stop-opacity="0.49" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Navigation;
