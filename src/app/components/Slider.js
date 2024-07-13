import React from 'react';

const Slider = () => {
  return (
    <div>
      <header className="main-header sticky-header sticky-header--normal">
        <div className="container-fluid">
          <div className="main-header__inner">
            <div className="main-header__logo">
              <a href="index.html">
                <img src="images/logo-light.png" alt="Ienet HTML" height="80" />
              </a>
              <a href="#" className="main-header__toggler">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
                {/* <span className="fas fa-bars" aria-hidden="true"></span> */}
              </a>
            </div>
            
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li className="dropdown megamenu">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li className="dropdown">
                  <a href="#">Pages</a>
                </li>
                <li className="dropdown">
                  <a href="#">Services</a>
                </li>
                <li className="dropdown">
                  <a href="#">Shop</a>
                </li>
                <li className="dropdown">
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>

            <div className="main-header__right">
              <div className="mobile-nav__btn mobile-nav__toggler">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a href="#" className="search-toggler main-header__search">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"></path></svg>
                {/* <i className="fas fa-search" aria-hidden="true"></i> */}
                {/* <span className="sr-only">Search</span> */}
              </a>
              <a href="#" className="main-header__cart">
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                {/* <i className="fas fa-shopping-cart" aria-hidden="true"></i> */}
                {/* <span className="sr-only">Cart</span> */}
              </a>
              <div className="main-header__call">
                <div className="main-header__call__icon">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  {/* <span className="fas fa-phone"></span> */}
                </div>
                <div className="main-header__call__title">Call Emergency</div>
                <a className="main-header__call__text" href="tel:88012365499">+88 0123 654 99</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="main-slider-one">
        <div className="item">
          <div className="main-slider-one__item">
            <div className="main-slider-one__bg" style={{ backgroundImage: 'url(/images/backgrounds/slider-1-1.jpg)' }}></div>
            <div className="main-slider-one__content">
              <h5 className="main-slider-one__sub-title"><span className="main-slider-one__sub-title__border"></span>CONNECTING THE WORLD</h5>
              <h2 className="main-slider-one__title">Welcome to Your<br /> Digital Frontier</h2>
              <p className="main-slider-one__text">
                Ienet offers reliable connectivity solutions, ensuring seamless performance.<br /> Our expert team provides dedicated support, adapting to your unique needs.
              </p>
              <div className="main-slider-one__btn">
                <a href="#" className="ienet-btn main-slider-one__btn__first">
                  <span>Our Service<span className="ienet-btn__icon">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"></path></svg></span>
                  </span>
                </a>
                <a href="#" className="ienet-btn main-slider-one__btn__last">
                  <span><span className="ienet-btn__icon ienet-btn__icon--left">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"></path></svg>
                    <i className="fas fa-gem"></i></span>Browse Plan</span>
                </a>
              </div>
            </div>
            <div className="main-slider-one__image">
              <div className="main-slider-one__image__one">
                <img src="/images/slider-1-layer-3.png" alt="ienet" />
              </div>
            </div>
            {/* <div className="main-slider-one__layer" style={{ backgroundImage: 'url(/images/slider-1-layer-3.png)' }}></div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
