import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="main-footer background-black">
        <div className="main-footer__bg background-black" style={{ backgroundImage: 'url(./images/shapes/footer-bg-1-1.png)' }}></div>
        <div className="main-footer__shape-one" style={{ backgroundImage: 'url(./images/resources/footer-shape-1.png)' }}></div>
        <div className="main-footer__shape-two" style={{ backgroundImage: 'url(./images/resources/footer-shape-2.png)' }}></div>
        <div className="main-footer__top">
          <div className="container">
            <div className="main-footer__top__inner">
              <ul className="list-unstyled main-footer__top__info">
                <li className="main-footer__top__info__item">
                  <span className="main-footer__top__info__icon">                <svg className="white" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg> 
                  </span>
                  <a href="mailto:info@ienetmail.com">info@ienetmail.com</a>
                </li>
                <li className="main-footer__top__info__item">
                  <span className="main-footer__top__info__icon">                <svg className='white' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                  </span> 1211 Madison Ave, New York, NY
                </li>
              </ul>
              <div className="main-footer__top__right">
                <div className="main-footer__top__social">
                <a href="https://facebook.com">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path></g></svg>                
                </a>
                <a href="https://twitter.com">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>                
                </a>
                <a href="https://instagram.com">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg>                
                </a>
                <a href="https://www.youtube.com/">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path></svg>                
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main-footer__middle">
            <a href="index.html">
              <img src="./images/logo-light.png" height="80" alt="Ienet HTML Template" />
            </a>
            <form action="#" data-url="MAILCHIMP_FORM_URL" className="footer-widget__newsletter mc-form">
              <span className="footer-widget__newsletter__icon">                <svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg> 
              </span>
              <input type="text" name="EMAIL" placeholder="Enter Email Address" />
              <button type="submit" className="ienet-btn"><span>Subscribe Now</span></button>
              <div className="mc-form__response"></div>
            </form>
            <div className="main-footer__middle__call">
              <div className="main-footer__middle__call__icon">                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="main-footer__middle__call__title">Call Emergency</div>
              <a className="main-footer__middle__call__text" href="tel:88012365499">+88 0123 654 99</a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-3">
              <div className="footer-widget footer-widget--about">
                <h2 className="footer-widget__title">About Ienet</h2>
                <p className="footer-widget__text">
                  There are two main types: solar photovoltaic (PV) systems for electricity generation and
                </p>
                <a href="about.html" className="ienet-btn">
                  <span>Get In Touch
                    <span className="ienet-btn__icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"></path></svg></span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Our Services</h2>
                <ul className="list-unstyled footer-widget__links">
                  <li><a href="service-d-broadband.html">Fiber & Broadband</a></li>
                  <li><a href="service-d-cyber-security.html">Cyber Security</a></li>
                  <li><a href="service-d-tv.html">Amazon Box TV</a></li>
                  <li><a href="service-d-iptv.html">Smart IPTV</a></li>
                  <li><a href="service-d-connectivity.html">Smart Connectivity</a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Useful Links</h2>
                <ul className="list-unstyled footer-widget__links">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="movie.html">Our Movie</a></li>
                  <li><a href="blog-grid-right.html">News & Blog</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="contact.html">Contacts</a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="footer-widget footer-widget--gallery">
                <h2 className="footer-widget__title">Our Gallery</h2>
                <div className="footer-widget__gallery d-flex flex-wrap">
                  <a href="gallery.html" className="footer-widget__gallery__link">
                    <img src="./images/resources/p1.jpg" alt="ienet" className="img-fluid" />
                  </a>
                  <a href="gallery.html" className="footer-widget__gallery__link">
                    <img src="./images/resources/package-1-1.jpg" alt="ienet" className="img-fluid" />
                  </a>
                  <a href="gallery.html" className="footer-widget__gallery__link">
                    <img src="./images/resources/p2.jpg" alt="ienet" className="img-fluid" />
                  </a>
                  <a href="gallery.html" className="footer-widget__gallery__link">
                    <img src="./images/resources/package-1-3.jpg" alt="ienet" className="img-fluid" />
                  </a>
                  <a href="gallery.html" className="footer-widget__gallery__link">
                    <img src="./images/resources/package-1-2.jpg" alt="ienet" className="img-fluid" />
                  </a>
                  <a href="gallery.html" className="footer-widget__gallery__link">
                    <img src="./images/resources/p1.jpg" alt="ienet" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer__bottom">
          <div className="container">
            <div className="main-footer__bottom__inner">
              <p className="main-footer__copyright">
                &copy; Copyright <span className="dynamic-year"></span> by Ienet HTML Template.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__text">back top</span>
        <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner"></span></span>
      </a>
    </div>
  );
}

export default Footer;
