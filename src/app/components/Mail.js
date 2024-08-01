import React from 'react';

const Mail = () => {
  return (
    <div>
      <section className="mail-one">
        <div className="mail-one__bg" style={{ backgroundImage: 'url(./images/mail-bg-1.jpg)' }}></div>
        {/* /.movie-one__bg */}
        <div className="mail-one__shape-left" style={{ backgroundImage: 'url(./images/resources/mail-shape-1.png)' }}></div>
        <div className="mail-one__shape-right" style={{ backgroundImage: 'url(./images/resources/mail-shape-2.png)' }}></div>
        <div className="container">
          <div className="mail-one__content">
            <div className="sec-title text-left">
              <h6 className="sec-title__tagline bw-split-in-right">
                <span className="main-slider-one__sub-title__border1"></span> <span> CHECK YOUR AREA</span>
              </h6>
              <h3 className="sec-title__title bw-split-in-left">Check Availability In <br/><span>Your City</span></h3>
            </div>
            <form action="#" data-url="MAILCHIMP_FORM_URL" className="mail-one__newsletter mc-form">
              <input type="text" name="EMAIL" placeholder="Enter Your Address" />
              <span className="mail-one__newsletter__icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg></span>
              <button type="submit" className="ienet-btn"><span>Check Availability</span></button>
              <div className="mc-form__response"></div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mail;
