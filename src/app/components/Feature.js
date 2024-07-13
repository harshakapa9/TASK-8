import React from 'react';

const Feature = () => {
  return (
    <div>
      <section className="feature-one">
        <div className="container">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline sec-title__title s1 bw-split-in-right">
              <span className="main-slider-one__sub-title__border"></span> Our facility{' '}
              <span className="main-slider-one__sub-title__border"></span>
            </h6>
            <h3 className="sec-title__title s1 bw-split-in-left">Our Special <span>Features</span></h3>
          </div>

          <div className="row">
            <div className="col-lg-4 wow fadeInLeft" data-wow-delay="00ms">
              <div className="feature-one__box">
                <div className="feature-one__box__icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 54.28c-124.603 0-226 101.398-226 226 0 47.864 14.975 92.293 40.465 128.876l29.79-19.86c-17.188-24.545-28.708-53.362-32.696-84.577H96v-18H66.115c-.07-2.14-.115-4.284-.115-6.44 0-45.378 15.816-86.97 42.236-119.598l17.4 17.4 12.727-12.727-18.133-18.132C152.735 114.057 197.335 92.8 247 90.498v29.22h18V90.5c49.665 2.302 94.265 23.56 126.77 56.725l-18.133 18.132 12.726 12.727 17.4-17.4c26.42 32.63 42.237 74.22 42.237 119.6 0 2.154-.044 4.3-.115 6.437H416v18h28.44c-3.987 31.214-15.507 60.03-32.694 84.575l29.79 19.86C467.025 372.574 482 328.146 482 280.282c0-124.602-101.397-226-226-226zm15.83 66.23a144 160 0 0 1 74.608 100.062l49.966-17.568a160 160 0 0 0-4.3-7.012l-5.135 5.153-30.368-30.29-5.76-5.746 7.85-7.874a160 160 0 0 0-86.862-36.726zm156.15 89.844l-175.332 60.6C240.505 272.618 231 283.155 231 295.72c0 13.7 11.3 25 25 25 6.77 0 12.95-2.764 17.473-7.208L427.98 210.354zm-16.513 32.322l-60.713 40.72a144 160 0 0 1-56.6 108.323h76.057a160 160 0 0 0 39.763-68.572H398.48v-52.515h17.022a160 160 0 0 0-4.035-27.957zM128 421.72v36h256v-36H128z"></path></svg></div>
                <h5 className="feature-one__box__title">Ultra-Speed Connection</h5>
                <p className="feature-one__box__text">
                  Nulla facilisi. Pellentesque imperdiet,<br /> sem et commodo interdum, justo velit.
                </p>
              </div>
              <div className="feature-one__box">
                <div className="feature-one__box__icon"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></div>
                <h5 className="feature-one__box__title">250+ TV chanels</h5>
                <p className="feature-one__box__text">
                  Nulla facilisi. Pellentesque imperdiet,<br /> sem et commodo interdum, justo velit.
                </p>
              </div>
              <div className="feature-one__box">
                <div className="feature-one__box__icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M18,4 L18,0 L18,4 Z M7,18 L5,18 L7,18 Z M19,18 L9,18 L19,18 Z M7,14 L5,14 L7,14 Z M19,14 L9,14 L19,14 Z M6,4 L6,0 L6,4 Z M1,9 L23,9 L1,9 Z M1,23 L23,23 L23,4 L1,4 L1,23 Z"></path></svg></div>
                <h5 className="feature-one__box__title">Flexible Plans</h5>
                <p className="feature-one__box__text">
                  Nulla facilisi. Pellentesque imperdiet,<br /> sem et commodo interdum, justo velit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp py-3" data-wow-delay="100ms">
              <div className="feature-one__image">
                <div className="feature-one__image__one">
                  <img src="/images/resources/feature-1-1.jpg" alt="ienet" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInRight" data-wow-delay="00ms">
              <div className="feature-one__box">
                <div className="feature-one__box__icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z"></path></svg></div>
                <h5 className="feature-one__box__title">100% free installation</h5>
                <p className="feature-one__box__text">
                  Nulla facilisi. Pellentesque imperdiet,<br /> sem et commodo interdum, justo velit.
                </p>
              </div>
              <div className="feature-one__box">
                <div className="feature-one__box__icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12v0.714V16v0.143C2,17.167,2.897,18,4,18h1c0.553,0,1-0.448,1-1v-5.143c0-0.552-0.447-1-1-1 H4.092C4.648,6.987,7.978,4,12,4s7.352,2.987,7.908,6.857H19c-0.553,0-1,0.448-1,1V16v1v1c0,1.103-0.897,2-2,2h-2v-1h-4v3h2h2h2 c2.206,0,4-1.794,4-4c1.103,0,2-0.833,2-1.857V16v-3.286V12C22,6.486,17.514,2,12,2z"></path></svg></div>
                <h5 className="feature-one__box__title">fast support 24/7</h5>
                <p className="feature-one__box__text">
                  Nulla facilisi. Pellentesque imperdiet,<br /> sem et commodo interdum, justo velit.
                </p>
              </div>
              <div className="feature-one__box">
                <div className="feature-one__box__icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"></path></svg></div>
                <h5 className="feature-one__box__title">4K And 8K quality</h5>
                <p className="feature-one__box__text">
                  Nulla facilisi. Pellentesque imperdiet,<br /> sem et commodo interdum, justo velit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
