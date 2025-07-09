"use client";
import React, { useState, useEffect } from "react";

const Header = ({
  account,
  connectWallet,
  setAccount,
  setLoader,
  setOwnerModel,
  shortenAddress,
  detail,
  currency,
  ownerModel,
}) => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  //   const handleAccountsChanged=(accounts)=>{
  //     setAccount(accounts[0]);
  //     console.log('this is the account    fter chnaging function',account)
  // };
  // useEffect(()=>{
  //     if(typeof window.ethereum !=='undefined'){
  //         setIsMetaMaskInstalled(true);
  //         window.ethereum.on("accountsChanged",
  //             handleAccountsChanged);
  //     }
  //     return()=>{
  //         if(typeof window.ethereum !=="undefined"){
  //             window.ethereum.removeListener(
  //                 "accountsChanged",
  //                 handleAccountsChanged
  //             )
  //         }
  //     }
  // },[]);
  useEffect(() => {
    console.log("account use effecr statz", account);
  }, [account]);

  return (
    <div className="site-header header--trasnparent ico-header">
      <div className="header__main-wrap">
        <div className="container mxw_1640">
          <div className="header__main ul_li_between">
            <div className="header__left ul_li">
              <div className="header__logo">
                <a href="/">
                  <img src="assets/img/logo/logo.svg" alt="" srcSet="" />
                </a>
              </div>
            </div>

            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className="active has-mega-menu">
                    <a href="/">Home</a>{" "}
                  </li>
                  <li className="scrollspy-btn">
                    <a href="#RoadMap">RoadMap</a>{" "}
                  </li>
                  <li className="scrollspy-btn">
                    <a href="#Team">Team</a>{" "}
                  </li>
                  <li className="scrollspy-btn">
                    <a href="#Tools">Tools</a>{" "}
                  </li>
                  <li className="scrollspy-btn">
                    <a href="#Faq">Faq</a>{" "}
                  </li>
                  <li className="scrollspy-btn">
                    <a href="#Contact">Contact</a>{" "}
                  </li>
                  <li className="scrollspy-btn">
                    <a href="#Footer">Footer</a>{" "}
                  </li>

                  <li className="scrollspy-btn">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        ownerModel ? setOwnerModel(false) : setOwnerModel(true);
                      }}
                    >
                      Tools
                    </a>{" "}
                  </li>
                </ul>
              </nav>

              <div className="header__action ul_li">
                <div className="d-xl-none">
                  <div className="header__bar hamburger_menu">
                    <div className="header__bar-icon">
                      {account ? (
                        <div className="header__account">
                          <a
                            onClick={() =>
                              navigator.clipboard.writeText(detail?.address)
                            }
                          >
                            {shortenAddress(detail?.address)}:
                            {detail?.maticBal.slice(0, 6)}
                            {currency}
                          </a>
                        </div>
                      ) : (
                        <div className="header__account">
                          <a
                            onClick={async () => {
                              const address = await connectWallet();
                              console.log("address seettting   ", address);
                              setAccount(address);
                              console.log("account seettting   ", account);
                            }}
                          >
                            {" "}
                            connect wallet
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
