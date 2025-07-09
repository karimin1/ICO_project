import React from "react";

function TokenInfo({ detail, currency }) {
  return (
    <section
      className="token-info pos-rel pt-200
        pb-150"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-4">
            <div
              className="token-info__title
                 sec-title mb-95 text-xl-start"
            >
              <h5 className="sec-title__substitle">ICO coindox Token</h5>
              <h2 className="sec-title__title">
                ICO TOKEN <br /> Details and sale
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="token-info__img">
              <img src="assets/img/token/t_info_img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="token-info--info-wrap ul_li">
              <ul className="token-info__list token-info--start">
                <li>
                  <h4>tOTAL sUPPLY</h4>
                  <span>
                    {Number(detail?.supply)}
                    {detail?.symbol}
                  </span>
                </li>
                <li>
                  <h4>Sold Token</h4>
                  <span>
                    {Number(detail?.soldTokens)}
                    {detail?.symbol}
                  </span>
                </li>
                <li>
                  <h4>Minimal Transaction</h4>
                  <span>10 TOknes/Tansaction</span>
                  <span>
                    {Number(detail?.soldTokens)}
                    {detail?.symbol}
                  </span>
                </li>
              </ul>
              <ul className="token-info__list token-info--end">
                <li>
                  <h4>Token Market Value</h4>
                  <span>
                    {Number(detail?.supply) * Number(detail?.tokenPrice)}
                    {currency}
                  </span>
                </li>
                <li>
                  <h4>Fund Raised</h4>
                  <span>
                    {Number(detail?.soldTokens) * Number(detail?.tokenPrice)}
                    {currency}
                  </span>
                </li>
                <li>
                  <h4>Acceptable currencies</h4>
                  <span>ETH,BTC,LTC</span>
                  <span>
                    {Number(detail?.soldTokens) * Number(detail?.tokenPrice)}
                    {currency}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TokenInfo;
