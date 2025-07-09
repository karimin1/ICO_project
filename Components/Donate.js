import React, { useState, useEffect } from "react";

function Donate({ detail, currency, setOpenDonate, DONATE }) {
  const [donateFund, setDonateFund] = useState();

  return (
    <section className="new-margin ico-contact pos-rel">
      <div className="container">
        <div className="ico-contact__wrap">
          <h2 className="title">Donate uuu {currency}</h2>
          <strong onClick={() => setOpenDonate(false)}>X</strong>
          <div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="text"
                  placeholder="_amount"
                  onChange={(e) => setDonateFund(e.target.value)}
                />

                <p>
                  <strong>Balance</strong>
                  {detail?.maticBal}
                  {currency}
                </p>
                <div className="ico-contact__btn text-center mt-10">
                  <button
                    onClick={() => DONATE(donateFund)}
                    className="thm-btn"
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>

            <div className="ico-contact__shape-img">
              <div className="shape shape--1">
                <div className="">
                  <img src="assets/img/shape/c_shape1.png" />
                </div>
              </div>
              <div className="shape shape--2">
                <div className="">
                  <img src="assets/img/shape/c_shape2.png" />
                </div>
              </div>
            </div>
            <div className="ico-contact__shape">
              <div className="shape shape--1">
                <img src="assets/img/shape/c_shape1.png" />
              </div>
              <div className="shape shape--2">
                <img src="assets/img/shape/c_shape2.png" />
              </div>
              <div className="shape shape--3">
                <img src="assets/img/shape/f_shape3.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Donate;
