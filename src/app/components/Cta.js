import React from 'react';

const Cta = () => {
  return (
    <div>
      <section className="cta-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="cta-one__image wow fadeInLeft" data-wow-delay="100ms">
                <div className="cta-one__image__one">
                  <img src="/images/resources/cta-1-1.jpg" alt="ienet" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-one__content wow fadeInUp" data-wow-delay="300ms">
                <div className="sec-title text-left">
                  <h6 className="sec-title__tagline bw-split-in-right"><span className="main-slider-one__sub-title__border1"></span><span> SAVE YOUR MONEY</span></h6>
                  <h3 className="sec-title__title bw-split-in-left">Save Money <br /><span>Internet</span> Service With TV Services</h3>
                </div>
                <p className="cta-one__content__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium, urna nec aliquet mattis, odio tortor mattis justo.
                </p>
                <a href="about.html" className="ienet-btn"><span>Get In Touch<span className="ienet-btn__icon"><svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"></path></svg></span></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
