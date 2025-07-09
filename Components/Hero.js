import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
const Hero = ({
  setBuyModel,
  account,
  CONNECT_WALLET,
  TOKEN_ADDRESS,
  setAccount,
  setLoader,
  detail,
  addtokenToMetamask,
}) => {
  const notifySuccess = (msg) =>
    toast.success(msg, {
      duration: 2000,
    });
  const notifyError = (msg) =>
    toast.error(msg, {
      duration: 2000,
    });
  const connectWallet = async () => {
    setLoader(true);
    const address = await CONNECT_WALLET();
    setAccount(address);
  };
  const [percentage, setpercentage] = useState();
  useEffect(() => {
    console.log("detail issssss", detail);
    const calculatePercentage = () => {
      const tokenSold = detail?.soldTokens ?? 0;
      console.log("tokenSold", tokenSold);
      const tokenTotalSupply = tokenSold + Number(detail?.tokenBal) * 1 ?? 1;
      console.log("tokenTotalSupply", tokenTotalSupply);
      console.log("detail?.tokenBal", detail?.tokenBal);
      const percentage = (tokenSold / tokenTotalSupply) * 100;
      console.log("percentage", percentage);
      if (tokenTotalSupply == 0) {
        {
          console.log("token sale balance is zero");
        }
        setpercentage(percentage);
      }
    };
    const timer = setTimeout(calculatePercentage, 1000);
    return () => clearTimeout(timer);
  }, [detail]);
  const ADD_TOKEN_METAMASK = async (address) => {
    setLoader(true);
    const response = await addtokenToMetamask(address);
    setLoader(false);
    notifySuccess(response);
  };
  return (
    <section className="hero hero_ico pos-rel">
      <div className="hero_bg" data-background="assets/img/bg/hero_bg.bng" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero_content">
              <h1 className="title mb-45">
                Participate in the <span>Ongoing ICO Token </span>Sale
              </h1>
              <div className="btns">
                {account ? (
                  <a className="thm-btn" onClick={() => setBuyModel(true)}>
                    PURCHASE TOKEN
                  </a>
                ) : (
                  <a className="thm-btn" onClick={() => connectWallet()}>
                    Connect Walet{" "}
                  </a>
                )}
                <a
                  className="thm-btn thm-btn--dark"
                  onClick={() => {
                    console.log(
                      "TOKEN_ADDRESS isssssssssssssss",
                      TOKEN_ADDRESS
                    );
                    ADD_TOKEN_METAMASK(TOKEN_ADDRESS);
                  }}
                >
                  Add MetaMask
                </a>
              </div>
              <div className="hero__progress mt_50">
                <div className="progress-title ul_li_between">
                  <span>
                    <span>Raised</span>
                    {detail?.soldTokens}Tokens
                  </span>
                  <span>
                    <span>Total ICO</span>
                    {detail?.soldTokens + Number(detail?.tokenBal)}
                    {""}
                    {detail?.symbol}
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${percentage * 10}` }}
                    role="progressbar"
                  />
                </div>
                <ul className="ul_li_between">
                  <li>Pre Sell</li>
                  <li>Soft Cap</li>
                  <li>Bonus</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero_explore-wrap text-center">
              <div className="hero_explore text-center">
                <div className="scroll-down" />
                <span>Explore Causes</span>
              </div>
              <div className="hero_countdown">
                <h6 className="text-center">ICO WILL Start in... </h6>
              </div>
            </div>
          </div>

          <div className="hero-shape">
            <div className="shape shape--1">
              <img
                data-background="assets/img/shape/h_shape.png"
                alt=""
                srcSet=""
              />
            </div>
            <div className="shape shape--2">
              <img
                data-background="assets/img/shape/h_shape2.png"
                alt=""
                srcSet=""
              />
            </div>

            <div className="shape shape--3">
              <img
                data-background="assets/img/shape/h_shape3.png"
                alt=""
                srcSet=""
              />
            </div>
          </div>
          <div className="hero-coin">
            <div className="coin coin--1">
              <img src="assets/img/icon/coin1.png" alt="" srcSet="" />
            </div>
            <div className="coin coin--2">
              <img src="assets/img/icon/coin2.png" alt="" srcSet="" />
            </div>
            <div className="coin coin--3">
              <img src="assets/img/icon/coin3.png" alt="" srcSet="" />
            </div>
            <div className="coin coin--4">
              <img src="assets/img/icon/coin4.png" alt="" srcSet="" />
            </div>
            <div className="coin coin--5">
              <img src="assets/img/icon/coin5.png" alt="" srcSet="" />
            </div>
            <div className="coin coin--6">
              <img src="assets/img/icon/coin6.png" alt="" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
