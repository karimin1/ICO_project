import React, { useState, useEffect } from "react";
import { shortenAddress } from "../Utils/index";
function Popup({
  setBuyModel,
  BUY_TOKEN,
  currency,
  detail,
  account,
  ERC20,
  TOKEN_ADDRESS,
  setLoader,
}) {
  const [amount, setAmount] = useState();
  const [transferToken, setTransferToken] = useState();
  const notifySuccess = (msg) =>
    toast.success(msg, {
      duration: 2000,
    });
  const notifyError = (msg) =>
    toast.error(msg, {
      duration: 2000,
    });
  useEffect(() => {
    //setLoader(true);
    console.log("TOKEN_ADDRESS", TOKEN_ADDRESS);

    ERC20(TOKEN_ADDRESS).then((items) => {
      console.log("item creatung", items);
      setTransferToken(items);
      console.log("transferToken", transferToken);
      setLoader(false);
    });
  }, []);
  return (
    <section className="new-margin ico-contact pos-rel">
      <div className="container">
        <div className="ico-contact__wrap">
          <h2 className="title">Buy Token {""}</h2>
          <strong onClick={() => setBuyModel(false)}>X</strong>
          <div>
            <div className="row">
              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder={`Token Balance : ${transferToken?.balance} ${transferToken?.Symbol}`}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  value={
                    amount
                      ? `${amount * detail?.tokenPrice} ${currency}`
                      : "Output value"
                  }
                />
              </div>
              <div className="col-lg-6">
                <textarea
                  disabled
                  name="message"
                  cols="30"
                  rows="10"
                  readOnly
                  placeholder={`Current Price : ${detail?.tokenPrice} ${
                    detail?.symbol
                  } Token Address:  ${shortenAddress(detail?.address)}`}
                ></textarea>
              </div>

              <div className="ico-contact__btn text-center mt-10">
                <button onClick={() => BUY_TOKEN(amount)} className="thm-btn">
                  Buy Token
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
    </section>
  );
}

export default Popup;
