import React from "react";
import { FaPlus } from "react-icons/fa6";
import TransferToken from "./TransferToken";
function Owner({
  setOwnerModel,
  currency,
  detail,
  account,
  setTransferModel,
  setTransferCurrency,
  setOpenDonate,
  TOKEN_WIDTHRAW,
  setOpenUpdatePrice,
  setOpenUpdateAddress,
}) {
  return (
    <section id="Tools" className="team pos-rel">
      <div className="container">
        <div className="new-owner team__wrap ul_li">
          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/shape/c_shape1.png" alt="" />
            </div>
            <div className="team__info text-center mb-2">
              <h3>Token Transfer </h3>
              <span>An ER C20</span>
            </div>
            <div className="team__social ul_li_center">
              <span
                onClick={() => {
                  setTransferModel(true);
                }}
                className="h-icon"
                style={{
                  cursor: "pointer",
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>
          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/token/t_info_img.png" alt="" />
            </div>
            <div className="team__info text-center mb-2">
              <h3>Transfer Fund </h3>
              <span>
                {detail?.maticBal.slice(0, 6)}
                {currency}
              </span>
            </div>
            <div className="team__social ul_li_center">
              <span
                onClick={() => {
                  setTransferCurrency(true);
                }}
                className="h-icon"
                style={{
                  cursor: "pointer",
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>
          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/shape/c_shape2.png" alt="" />
            </div>
            <div className="team__info text-center mb-2">
              <h3>DONATE Fund </h3>
              <span>if you can</span>
            </div>
            <div className="team__social ul_li_center">
              <span
                onClick={() => {
                  setOpenDonate(true);
                }}
                className="h-icon"
                style={{
                  cursor: "pointer",
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>
          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/shape/c_shape2.png" alt="" />
            </div>
            <div className="team__info text-center mb-2">
              <div className="team__social ul_li_center">
                <h3>WITHDRAW</h3>
                <span>ICO TOKEN,ONLY OWNER</span>
              </div>

              <span
                onClick={() => TOKEN_WIDTHRAW()}
                className="h-icon"
                style={{
                  cursor: "pointer",
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>
          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/shape/c_shape2.png" alt="" />
            </div>
            <div className="team__info text-center mb-2">
              <h3>UPDATE TOKEN Address</h3>
            </div>
            <div className="team__social ul_li_center">
              <span
                onClick={() => {
                  setOpenUpdateAddress(true);
                }}
                className="h-icon"
                style={{
                  cursor: "pointer",
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>

          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/shape/c_shape2.png" alt="" />
            </div>
            <div className="team__info text-center mb-2">
              <h3>UPDATE TOKEN PRICE</h3>
              <span>ICO TOKEN,ONLY OWNER</span>
            </div>
            <div className="team__social ul_li_center">
              <span
                onClick={() => {
                  setOpenUpdatePrice(true);
                }}
                className="h-icon"
                style={{
                  cursor: "pointer",
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="team__shape">
        <div className="shape shape--1">
          <img className="assets/img/shape/t_shape1.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img className="assets/img/shape/t_shape2.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Owner;
