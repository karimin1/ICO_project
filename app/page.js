"use client";
import React, { useEffect, useState, useContext } from "react";
import { TokenICOContractContext } from "../Context/TokenICOcontext";
import {
  About,
  Brand,
  Contact,
  Token,
  Footer,
  TokenInfo,
  Features,
  SideBar,
  Team,
  Faq,
  TokenFeatures,
  Header,
  Loader,
  Hero,
  Roadmap,
  Popup,
  TransferCurrency,
  TransferToken,
  Owner,
  Donate,
  UpdateAddress,
  UpdatePrice,
} from "../Components/ComponentIndex";
import { shortenAddress } from "../Utils/index";
import Head from "next/head";
const Home = () => {
  const {
    BUY_TOKEN,
    TOKEN_ICO,
    TOKEN_ADDRESS,
    TOKEN_WIDTHRAW,
    UPDATE_TOKEN,
    UPDATE_TOKEN_PRICE,
    DONATE,
    TRANSFER_ETHER,
    TRANSFER_TOKEN,
    account,
    setAccount,
    setLoader,
    loader,
    changeNetwork,
    handleSwitchingNetwork,
    CheckIfWalletConnected,
    connectWallet,
    fetchContract,
    TokenICOContract,
    ERC20,
    currency,
    ERC20Contract,
    getBalance,
    checkAccountBalance,
    addtokenToMetamask,
  } = useContext(TokenICOContractContext);
  const [ownerModel, setOwnerModel] = useState(false);
  const [transferModel, setTransferModel] = useState(false);
  const [transferCurrency, setTransferCurrency] = useState(false);
  const [openDonate, setOpenDonate] = useState(false);
  const [openUpdatePrice, setOpenUpdatePrice] = useState(false);
  const [openUpdateAddress, setOpenUpdateAddress] = useState(false);
  const [buyModel, setBuyModel] = useState(false);
  const [detail, setdetail] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const item = await TOKEN_ICO();
      setdetail(item);
      console.log("itemiiiiii", item);
    };
    fetchData();
  }, [account]);
  return (
    <div className="body_wrap">
      <Head>
        <script src="/assets/js/jquery-3.5.1.min.js"></script>
        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/wow.min.js"></script>
        <script src="/assets/js/appear.js"></script>
        <script src="/assets/js/jquery.magnific-popup.min.js"></script>
        <script src="/assets/js/metisMenu.min.js"></script>
        <script src="/assets/js/jquery.marquee.min.js"></script>
        <script src="/assets/js/parallax-scroll.js"></script>
        <script src="/assets/js/countdown.js"></script>
        <script src="/assets/js/easing.min.js"></script>
        <script src="/assets/js/scrollspy.js"></script>
        <script src="/assets/js/main.js"></script>
      </Head>
      <Header
        account={account}
        connectWallet={connectWallet}
        setAccount={setAccount}
        setLoader={setLoader}
        setOwnerModel={setOwnerModel}
        shortenAddress={shortenAddress}
        detail={detail}
        currency={currency}
        ownerModel={ownerModel}
      />

      {buyModel && (
        <Popup
          setBuyModel={setBuyModel}
          BUY_TOKEN={BUY_TOKEN}
          currency={currency}
          detail={detail}
          account={account}
          ERC20={ERC20}
          TOKEN_ADDRESS={TOKEN_ADDRESS}
          setLoader={setLoader}
        />
      )}
      {transferModel && (
        <TransferToken
          setTransferModel={setTransferModel}
          TRANSFER_TOKEN={TRANSFER_TOKEN}
          ERC20={ERC20}
          setLoader={setLoader}
          detail={detail}
        />
      )}
      {transferCurrency && (
        <TransferCurrency
          setTransferCurrency={setTransferCurrency}
          TRANSFER_ETHER={TRANSFER_ETHER}
          detail={detail}
          currency={currency}
          CHECK_ACCOUNT_BALANCE={checkAccountBalance}
          setLoader={setLoader}
        />
      )}
      {openDonate && (
        <Donate
          detail={detail}
          currency={currency}
          setOpenDonate={setOpenDonate}
          DONATE={DONATE}
        />
      )}
      {openUpdatePrice && (
        <UpdatePrice
          detail={detail}
          currency={currency}
          setOpenUpdatePrice={setOpenUpdatePrice}
          UPDATE_TOKEN_PRICE={UPDATE_TOKEN_PRICE}
        />
      )}
      {openUpdateAddress && (
        <UpdateAddress
          detail={detail}
          currency={currency}
          setOpenUpdateAddress={setOpenUpdateAddress}
          UPDATE_TOKEN={UPDATE_TOKEN}
          ERC20={ERC20}
          setLoader={setLoader}
        />
      )}
      {loader && <Loader />}

      <SideBar setOwnerModel={setOwnerModel} ownerModel={ownerModel} />

      <Hero
        setBuyModel={setBuyModel}
        account={account}
        TOKEN_ADDRESS={TOKEN_ADDRESS}
        CONNECT_WALLET={connectWallet}
        setAccount={setAccount}
        setLoader={setLoader}
        detail={detail}
        addtokenToMetamask={addtokenToMetamask}
      />
      <About />
      <Features />
      <Token />
      <TokenInfo detail={detail} currency={currency} />
      {!ownerModel && (
        <Owner
          setOwnerModel={setOwnerModel}
          currency={currency}
          detail={detail}
          account={account}
          setTransferModel={setTransferModel}
          setTransferCurrency={setTransferCurrency}
          setOpenDonate={setOpenDonate}
          TOKEN_WIDTHRAW={TOKEN_WIDTHRAW}
          setOpenUpdatePrice={setOpenUpdatePrice}
          setOpenUpdateAddress={setOpenUpdateAddress}
        />
      )}
      <Team />
      <Faq />

      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
