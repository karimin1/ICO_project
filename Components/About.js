import React from "react";

function About() {
  return (
    <section id="about" className="about pos-rel pb-140">
      <div className="container">
        <div className="row align-items-center mt-none-30">
          <div className="col-lg-6 mt-30">
            <div className="about__img post-rel wow fadeInleft">
              <img src="assets/img/about_img.png" alt="" />
              <div className="about__shape">
                <img src="assets/img/shape/about_shape" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-30">
          <div
            className="about__content wow fadeIntRight"
            data-wow-delay="100ms"
          >
            <div className="sec-title mb-35">
              <h5 className="sec-title__subtitle"> WHAT IS ICO CRYPTO </h5>

              <h2 className="sec-title__title mb-25">
                FGFGFHFHFHGRDdfgdghfdhg
              </h2>
              <p>
                ghjgjgjgjgghjgjgjgjg ghjgjgjgjgghjgjgjgjgghjgjgjgjg
                ghjgjgjgjgghjgjgjgjgghjgjgjgjg ghjgjgjgjgghjgjgjgjgghjgjgjgjg
              </p>
            </div>
            <ul className="about__list ul_li">
              <li>
                <img src="assets/img/icon/a_arrow.svg" alt="" />
                Decentralized Platform
              </li>
              <li>
                <img src="assets/img/icon/a_arrow.svg" alt="" />
                Decentralized Platform
              </li>
              <li>
                <img src="assets/img/icon/a_arrow.svg" alt="" />
                Crowd Wisdom
              </li>
              <li>
                <img src="assets/img/icon/a_arrow.svg" alt="" />
                Investor Protection
              </li>
              <li>
                <img src="assets/img/icon/a_arrow.svg" alt="" />
                Token Sale Phrases
              </li>
              <li>
                <img src="assets/img/icon/a_arrow.svg" alt="" />
                Exchange Listing
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about__sec-shape">
        <img src="assets/img/shape/s_shape2.png" />
      </div>
    </section>
  );
}

export default About;
