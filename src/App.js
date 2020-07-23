import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Navigation from "./Navigation";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <section className="about-us-container">
        <div className="about-us-wrap">
          <div className="about-us-left">
            <div className="about-us-img">
              <div className="about-img"></div>
            </div>
          </div>
          <div className="about-us-right" id="about">
            <div className="about-us-content">
              <h1>About Us</h1>
              <p>
                Our journey to become a leading healthcare solution provider and
                overcome some of the country’s challenges which is the provision
                of safe and effective medicines began with one small location.
                Today, we are a fast growing community pharmacy chain aiming to
                make a meaningful difference in the way we deliver our variety
                of product and service offerings in the communities we operate.
                We offer an array of quality and affordable healthcare products
                and we are committed to providing solutions that support
                healthier lifestyles as well as reimagining ways to exceed our
                clients’ expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      "
      <section className="tugak-info-container">
        <div className="tugak-info-wrap">
          <div className="tugak-info-left">
            <div className="our-mission">
              <div className="tab">
                <svg
                  width="60"
                  height="72"
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mission"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M74.7422 328.078C71.8437 333.859 72.9726 340.848 77.539 345.418L81.207 349.086C91.8047 336.527 104.156 322.898 119.137 307.922C120.195 306.863 121.285 306.352 122.348 305.375L98.75 281.773C85.0312 306.586 77.0312 323.539 74.7422 328.078Z"
                      fill="white"
                    />
                    <path
                      d="M203.988 392.773C188.973 407.789 175.379 420.164 162.891 430.77L167.859 435.738C172.469 440.348 179.523 441.457 185.324 438.473C193.094 434.469 205.312 428.719 231.25 414.273L206.539 389.562C205.563 390.629 205.051 391.715 203.988 392.773V392.773Z"
                      fill="white"
                    />
                    <path
                      d="M195.992 315.938C185.152 305.098 154.668 314.816 140.348 329.133C92.4414 377.039 70.8047 411.004 61.0898 431.059C58.3047 436.805 59.4648 443.684 63.9805 448.199C68.5039 452.727 75.3945 453.875 81.1445 451.09C100.75 441.57 134.301 420.035 182.777 371.563C198.523 355.809 206.293 326.242 196.004 315.949L195.992 315.938Z"
                      fill="white"
                    />
                    <path
                      d="M46.8203 199.711L4.39453 242.137C-0.402345 246.934 -1.38672 254.359 2.01172 260.242C5.32812 266.047 12.2734 269.004 18.8828 267.234C41.8125 261.086 61.9883 258.488 75.5742 261.973C94.9023 227.609 115.672 195.977 137.668 167.242C124.945 159.086 82.9023 163.629 46.8203 199.711V199.711Z"
                      fill="white"
                    />
                    <path
                      d="M253.894 510.391C259.672 513.312 266.668 512.184 271.242 507.605L313.672 465.18C346.519 432.324 352.301 389.934 344.848 376.492C312.801 400.645 280.336 421.039 250.047 438.113C252.137 449.914 250.746 461.363 245.805 494.801C244.84 501.273 248.184 507.535 253.894 510.391V510.391Z"
                      fill="white"
                    />
                    <path
                      d="M297.801 150.469C280.258 168.016 280.258 196.559 297.801 214.105C315.348 231.652 343.895 231.652 361.441 214.105C378.988 196.559 378.988 168.016 361.441 150.469C343.895 132.922 315.348 132.922 297.801 150.469Z"
                      fill="white"
                    />
                    <path
                      d="M511.117 14.6328C510.578 7.21484 504.672 1.35156 497.277 0.796873C460.438 -1.97656 423.742 2.55469 387.773 13.5547C390.48 38.2656 403.262 65.0078 425.082 86.8281C447.164 108.906 474.633 121.684 499.785 124.074C509.473 90.125 514.066 53.7656 511.117 14.6328V14.6328Z"
                      fill="white"
                    />
                    <path
                      d="M403.871 108.043C378.91 83.082 363.668 53.1445 358.777 23.9961C268.703 60.9375 182.477 141.609 114.34 254.938L148.191 288.789C171.32 279.398 199.398 276.918 217.207 294.723C235.039 312.559 232.512 340.625 223.125 363.723L258.09 398.688C345.285 346.137 446.801 263.344 489.969 153.191C460.109 148.68 429.238 133.41 403.871 108.043V108.043ZM382.652 235.32C353.414 264.559 305.832 264.559 276.59 235.32C247.348 206.078 247.348 158.492 276.59 129.254C305.832 100.016 353.414 100.016 382.652 129.254C411.895 158.496 411.895 206.078 382.652 235.32Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="512" height="512" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional pharmacy experience by providing high
                quality products, innovative and professional healthcare
                services to our clients.
              </p>
            </div>
          </div>
          <div className="tugak-info-right">
            <div className="our-vission">
              <div className="tab">
                <svg
                  width="72"
                  height="100"
                  viewBox="0 0 512 270"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="vision"
                >
                  <path
                    d="M508.177 124.995C503.607 119.897 393.682 0 256 0C118.318 0 8.39401 119.897 3.82301 124.995C-1.27499 130.693 -1.27499 139.307 3.82301 145.005C8.39401 150.103 118.32 270 256 270C393.68 270 503.606 150.103 508.177 145.005C513.274 139.307 513.274 130.693 508.177 124.995ZM256 240C198.109 240 151 192.891 151 135C151 77.109 198.109 30 256 30C313.891 30 361 77.109 361 135C361 192.891 313.891 240 256 240Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>Our Vission</h3>
              <p>
                To be the benchmark pharmacy for excellent healthcare experience
                in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="list-container">
        <div id="service" className="list-wrap">
          <div className="list-left-img topper">
            <div className="list-left">
              <h3>Our Services</h3>
              <ul className="detail-list">
                <li>Medication dispensing </li>
                <li>Medication use review</li>
                <li>Counseling</li>
                <li>Blood pressure assessment</li>
                <li>Blood sugar Test</li>
                <li>Minor ailments and self-medication advice</li>
                <li>Quit smoking clinic</li>
                <li>Weight loss management</li>
                <li>Asthma management support</li>
                <li>Delivery</li>
              </ul>
            </div>
          </div>
          <div className="list-left-img">
            <div className="list-left">
              <h3>Core Values</h3>
              <ul className="detail-list">
                <li>Trust: Our foundation in every relationship.</li>
                <li>Care: The heart of everything we do.</li>
                <li>
                  Innovation: Constantly creating value by turning our ideas
                  into solutions.
                </li>
                <li>Dedication: Our passion and commitment in all we do.</li>
                <li>
                  Accountability: Putting in our best and holding ourselves
                  accountable for results.
                </li>
                <li>
                  Excellent service: Going the extra mile to make a happy client
                </li>
                <li>Partnership: Together we make the difference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="location-container" id="contact">
        <div className="location-wrap">
          <div className="location-wrap-inner">
            <div className="location-left">
              <h3>Our Locations</h3>
              <ul className="location-list">
                <li>
                  Tugak Pharmacy Marketsquare Supermarket #279 Peter Odili Rd
                  Trans Amadi Port Harcourt
                  <div className="number">
                    <div className="call-image"></div>
                    <a href="tel:08098000119">08098000119</a>
                  </div>
                </li>
                <li>
                  Tugak Pharmacy #19 Peter Odili Rd Emma Estate Junction Okujagu
                  Port Harcourt
                  <div className="number">
                    <div className="call-image"></div>
                    <a href="tel:08098000119">08091946232</a>
                  </div>
                </li>
                <li>
                  Tugak Pharmacy Marketsquare Supermarket Woji Rd GRA Port
                  Harcourt
                  <div className="number">
                    <div className="call-image"></div>
                    <a href="tel:08098000119">090887506304</a>
                  </div>
                </li>
                <li>
                  Tugak Pharmacy Marketsquare/Kilimanjaro complex Okporo Rd –
                  Rumudara Junction
                  <div className="number">
                    <div className="call-image"></div>
                    <a href="tel:08098000119">09087506314</a>
                  </div>
                </li>
                <li>
                  Tugak Pharmacy Marketsquare/Kilimanjaro complex Orlu Rd Owerri
                  <div className="number">
                    <div className="call-image"></div>
                    <a href="tel:08098000119">09087506306</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="location-right">
              <div className="form-wrap">
                <h3 className="contact-title"> Contact Us</h3>
                <form>
                  <div className="grouped">
                    <label className="contact-label" for="zip">
                      <small>Email</small>
                    </label>
                    <input
                      name="email"
                      placeholder="John.doe@gmail.com"
                      type="text"
                      className="contact-input"
                    />
                    <label className="contact-label" for="zip">
                      <small>Subject</small>
                    </label>
                    <input
                      name="email"
                      placeholder="enquiries"
                      type="text"
                      className="contact-input"
                    />
                    <label className="contact-label" for="zip">
                      <small>Message</small>
                    </label>
                    <textarea
                      className="contact-input"
                      cols="30"
                      rows="5"
                      placeholder="Type your message here"
                    ></textarea>
                    <button type="submit" className="contact-button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        
          <div>
            <h3>Hours of Operation</h3>
            <span>Mondays - Saturdays: 8am - 9.30pm</span>
            <span>Sundays: 12pm - 9pm</span>
          </div>
        </div>
      </section>
      <Router>
        <section className="footer-section">
          <footer>
            <div className="footer-content">
              <div className="footer-overlay"></div>
              <div className="footer-text">
                <h4>Tugak Pharmacy</h4>
                <span>Your well being is our main priority</span>

                <div className="socials">
                  <Link to={"/"} className="facebook"></Link>
                  <Link to={"/"} className="email"></Link>
                </div>
                <span className="rights">
                  &copy; 2020 &nbsp;| All rights reserved
                </span>
              </div>
              <div className="footer-overlay2"></div>
            </div>
          </footer>
        </section>
      </Router>
    </div>
  );
}

export default App;
