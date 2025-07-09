import React, { useState, useEffect } from "react";
import { shortenAddress } from "../Utils/index";
function UpdateAddress({
  detail,
  currency,
  setOpenUpdateAddress,
  UPDATE_TOKEN,
  ERC20,
  setLoader,
}) {
  const [address, setAddress] = useState();
  const [tokenDetails, setTokenDetails] = useState();
  const [transferToken, setTransferToken] = useState();
  useEffect(() => {
    if (transferToken) {
      const loadToken = async () => {
        setLoader(true);
        const token = await ERC20(transferToken);
        console.log("token rrrrr", token);
        if (token == undefined) {
          console.log("kindly past the token");
        } else {
          setTokenDetails(token);
          console.log(token);
        }
        setLoader(false);
      };
      loadToken();
    }
  }, [transferToken]);
  return (
    <section className="new-margin ico-contact pos-rel">
      <div className="container">
        <div className="ico-contact__wrap">
          <h2 className="title">Update Token Address </h2>
          <strong onClick={() => setOpenUpdateAddress(false)}>X</strong>

          <div>
            <div className="row">
              <div className="col-lg-12">
                {tokenDetails ? (
                  <input
                    type="text"
                    value={`Name ${tokenDetails?.name}Balance:${tokenDetails?.balance}  Address:${tokenDetails?.address} ${tokenDetails?.symbol}`}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="_tokenAddress"
                    onChange={(e) => (
                      setAddress(e.target.value),
                      setTransferToken(e.target.value)
                    )}
                  />
                )}

                <div className="col-lg-12">
                  <p>
                    <strong>Current price</strong>
                    {console.log("detail is is is is", detail)}
                    {detail?.tokenPrice}
                    {currency} &nbsp;&nbsp;
                    <strong>Token Balance</strong>
                    {detail?.tokenBal}
                    <strong>Token Address</strong>
                    {shortenAddress(detail?.address)}
                    {detail?.symbol} &nbsp;&nbsp;
                    <strong
                      onClick={() =>
                        navigator.clipboard.writeText(detail?.tokenAddr)
                      }
                    ></strong>{" "}
                  </p>
                </div>
                <div className="ico-contact__btn text-center mt-10">
                  <button
                    onClick={() => UPDATE_TOKEN(address)}
                    className="thm-btn"
                  >
                    Update Address
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
      </div>
    </section>
  );
}
export default UpdateAddress;
