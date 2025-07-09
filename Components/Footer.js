import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialGithub,
} from "react-icons/ti";

import { IoIosCloudDone, IoIosSend } from "react-icons/io";
function Footer() {
  return (
    <footer
      id="Footer"
      className="site-footer footer__ico pos-rel"
      data-background="assets/img/bg/footer_bg.png"
    >
      <div className="container">
        <div className="row mt-none-30">
          <div className="col-lg-4 mt-30">
            <div className="footer__widget footer_subscribe">
              <h2>Subscribe news letter</h2>
              <p>
                hkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhf
                hkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhf
                hkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhf
                hkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhfhkjdshfsdkhf
              </p>

              <form action="">
                <input
                  type="text"
                  placeholder="theblockchaincoders@gmail.com"
                />

                <button>
                  <IoIosSend />
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-8 mt-30">
            <div
              className="footer__widget
                text-lg-end"
            >
              <h2> DownLoad Document</h2>
              <div
                className="footer__document
                   ul_li_right"
              >
                <a href="#" className="footer__document_item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" srcSet="" />
                  </div>
                  <span className="title">
                    <IoIosCloudDone />
                    one paper
                  </span>
                </a>

                <a href="#" className="footer__document_item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" srcSet="" />
                  </div>
                  <span className="title">
                    <IoIosCloudDone />
                    privacy policy
                  </span>
                </a>
                <a href="#" className="footer__document_item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" srcSet="" />
                  </div>
                  <span className="title">
                    <IoIosCloudDone />
                    terms of sale
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer__bottom ul_li_betwen mt-50"> </div>
          <div className="footer__logo  mt-20"> </div>
          <a href="#">
            <img src="assets/img/logo/logo.svg" alt="" srcSet="" />
          </a>
        </div>
        <ul className="footer__social ul_li mt-20">
          <li>
            <a href="#">
              <TiSocialFacebook />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <TiSocialTwitter />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <TiSocialInstagram />{" "}
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <TiSocialGithub />{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright  mt-35">
        <div className="container">
          <div
            className="footer__copyright-inner 
      ul_li_between"
          ></div>
          <div
            className="footer_copyright-text
      mt-15"
          >
            Copyright @ 2024 @theblockchaincoders, All right reserved
          </div>
          <ul className="footer_links ul_li_right mt-15">
            <li>
              <a href="#">privacy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">terms</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
