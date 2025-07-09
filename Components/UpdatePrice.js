import React, { useState, useEffect } from "react";

function UpdatePrice({
  detail,
  currency,
  setOpenUpdatePrice,
  UPDATE_TOKEN_PRICE,
}) {
  const [price, setPrice] = useState();

  return (
    <section className="new-margin ico-contact pos-rel">
      <div className="container">
        <div className="ico-contact__wrap">
          <h2 className="title">Update Token Price {currency}</h2>
          <strong onClick={() => setOpenUpdatePrice(false)}>X</strong>

          <div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="text"
                  placeholder="_price"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <p>
                  <strong>Current price</strong>
                  {detail?.tokenPrice}
                  {console.log("detail isss", detail)}
                  {currency} <strong>Token Balance:</strong> {detail?.tokenBal}
                  {""}
                  {detail?.symbol}
                </p>
                &nbsp;&nbsp;
              </div>
              <div className="ico-contact__btn text-center mt-10">
                <button
                  onClick={() => UPDATE_TOKEN_PRICE(price)}
                  className="thm-btn"
                >
                  Update Price
                </button>
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
export default UpdatePrice;
