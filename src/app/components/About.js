import React from 'react';

const About = () => {
  return (
    <div>
      <section className="about-one" style={{ backgroundImage: 'url(./images/shapes/about-1-bg.png)' }}>
        <div className="about-one__shape" style={{ backgroundImage: 'url(./images/resources/about-shape-1.png)' }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-one__image wow fadeInLeft" data-wow-delay="300ms">
                <div className="about-one__image__one">
                  <img src="./images/about.png" alt="ienet" />
                </div>
                <div className="about-one__image__bg"></div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="about-one__content">
                <div className="sec-title text-left">
                  <h6 className="sec-title__tagline bw-split-in-right">
                    <span className="main-slider-one__sub-title__border1"></span>
                    <span>ABOUT OUR INTERNET</span>
                  </h6>
                  <h3 className="sec-title__title bw-split-in-left">We Offer <span>Unlimited</span> Connectivity For You.</h3>
                </div>
                <p className="about-one__content__text">
                  Experience unparalleled connectivity with our cutting-edge technology. Our services are designed to keep you connected, whether at home or on the go. Enjoy seamless internet access, exceptional speed, and reliable support, tailored to meet your needs.
                </p>
                <ul className="about-one__content__list">
                  <li><svg class="red-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path></svg>Lightning-Fast</li>
                  <li><svg class="red-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path></svg>High-Speed Wi-Fi</li>
                  <li><svg class="red-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path></svg>Flexible Prepaid SIM</li>
                  <li><svg class="red-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path></svg>5G Updates</li>
                </ul>
                <a href="#" className="ienet-btn">
                  <span>More About Us<span className="ienet-btn__icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"></path></svg></span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
