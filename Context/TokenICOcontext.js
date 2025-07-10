"use client";
import React, { useEffect, useContext, useState } from "react";
import { ethers } from "ethers";
import { formatEther, parseEther } from "ethers";
import toast from "react-hot-toast";
import {
  changeNetwork,
  handleSwitchingNetwork,
  CheckIfWalletConnected,
  connectWallet,
  fetchContract,
  TokenICOContract,
  ERC20,
  ERC20Contract,
  getBalance,
  checkAccountBalance,
  addtokenToMetamask,
} from "../Utils/apiFeatures";
import { shortenAddress } from "../Utils/index";
import { TokenICOabi, TokenICOAddress, ERC20Address } from "./constants";
import { notifySuccess, notifyError } from "";
export const TokenICOContractContext = React.createContext();
export const TokenICOContractProvider = ({ children }) => {
  const DAPP_NAME = "TOKEN ICO DAPP";
  const currency = "ETH";
  const TOKEN_ADDRESS = ERC20Address;
  const network = "sepolia";
  const [loader, setLoader] = useState(false);
  const [account, setAccount] = useState("");
  const [count, setCount] = useState(0);
  const notiftySuccess = (msg) => {
    toast.success(msg, {
      duration: 2000,
    });
  };
  const notifyError = (msg) => {
    toast.error(msg, {
      duration: 2000,
    });
  };
  //------CONTRACT FUNCTION----------------
  const TOKEN_ICO = async () => {
    try {
      const address = await connectWallet();
      setAccount(address);
      if (address) {
        //setAccount(address);
        const contract = await TokenICOContract();
        if (!contract) {
          console.error("contract not fetched");
          return;
        }
        try {
          console.log("contract to take tokendetails", contract);

          console.log(
            " contract.tokenAddress():",
            await contract.tokenAddress()
          );
          console.log("TokenICOabi", TokenICOabi);
          console.log(
            "TokenICOabi functions",
            TokenICOabi.map((item) => item.name).filter(Boolean)
          );

          const tokenDetails = await contract.getTokenDetails();
          console.log("tokenDetails:", tokenDetails);
          const contractOwner = await contract.owner();
          console.log("contractOwner:", contractOwner);
          const soldTokens = await contract.soldTokens();
          console.log("soldTokens:", soldTokens);
          const ethBal = await getBalance();
          console.log("ethBal", ethBal);

          const token = {
            tokenBal: formatEther(tokenDetails.balance),
            name: tokenDetails.name,
            symbol: tokenDetails.symbol,
            supply: formatEther(tokenDetails.totalsupply),
            tokenPrice: formatEther(tokenDetails.tokenPrice),
            maticBal: ethBal,
            address: tokenDetails.tokenAddr.toLowerCase(),

            owner: contractOwner.toLowerCase(),
            soldTokens: Number(soldTokens),
          };
          console.log("token deatils");
          setLoader(false);
          return token;
        } catch (error) {
          console.error("error contract calling", error);
        }
      } else {
        console.log("no account exist");
      }
    } catch (error) {
      console.log("error", error);
      notifyError("errot try again later");
      setLoader(false);
    }
  };
  const BUY_TOKEN = async (amount) => {
    //console.log("amount iiiis", ethers.parseUnits(amount, 18));
    try {
      const address = await CheckIfWalletConnected();
      if (address) {
        setLoader(true);
        setAccount(address);
        const contract = await TokenICOContract();
        const tokenDetails = await contract.getTokenDetails();
        console.log("tokenDetails.balance", tokenDetails.balance);
        const avaliableToken = ethers.formatEther(tokenDetails.balance);
        console.log("avaliableToken", avaliableToken);
        if (Number(avaliableToken) > 1) {
          const price = tokenDetails.tokenPrice;
          console.log("price is is is is ", price);
          const amountIn18 = ethers.parseUnits(amount.toString(), 18); // amount with 18 decimals (BigInt)

          // const amountInWei = ethers.parseUnits(amount, 18);
          const payAmount = (price * amountIn18) / BigInt(1e18);

          console.log("payAmount is is is is ", payAmount);

          const transaction = await contract.buyToken(amount, {
            value: payAmount,
          });
          await transaction.wait();
          notifySuccess("transaction successfuly completed");
          window.location.reload();
        }
      }
    } catch (error) {
      console.log("error", error);
      notifyError("errot try again later");
      setLoader(false);
    }
  };

  const TOKEN_WIDTHRAW = async () => {
    try {
      const address = await CheckIfWalletConnected();
      if (address) {
        setLoader(true);
        setAccount(address);
        const contract = await TokenICOContract();
        const tokenDetails = await contract.getTokenDetails();
        const avaliableToken = formatEther(tokenDetails.balance);
        if (avaliableToken > 1) {
          const transaction = await contract.transferAllToken();
          await transaction.wait();
          notiftySuccess("transaction successfuly completed");
          window.location.reload();
        }
      }
    } catch (error) {
      console.log("error", error);
      notifyError("errot try again later");
      setLoader(false);
    }
  };

  const UPDATE_TOKEN = async (_address) => {
    try {
      const address = await CheckIfWalletConnected();
      if (address) {
        setLoader(true);

        setAccount(address);
        const contract = await TokenICOContract();

        const transaction = await contract.updateToken(_address);
        await transaction.wait();
        notiftySuccess("transaction successfuly completed");
        window.location.reload();
      }
    } catch (error) {
      console.log("error", error);
      notifyError("errot try again later");
      setLoader(false);
    }
  };
  const UPDATE_TOKEN_PRICE = async (_price) => {
    try {
      const address = await CheckIfWalletConnected();
      if (address) {
        setLoader(true);
        setAccount(address);
        const contract = await TokenICOContract();
        const price_Token = ethers.parseEther(_price);
        const transaction = await contract.updateTokenSalePrice(price_Token);
        await transaction.wait();
        notiftySuccess("transaction successfuly completed");
        window.location.reload();
      }
    } catch (error) {
      console.log("error", error);
      notifyError("errot try again later");
      setLoader(false);
    }
  };
  const DONATE = async (amount) => {
    try {
      setLoader(true);
      const address = await CheckIfWalletConnected();
      if (address) {
        setLoader(true);
        setAccount(address);
        const contract = await TokenICOContract();
        const amount_eth = ethers.parseEther(amount);
        const transaction = await contract.transferToOwner(amount_eth, {
          value: amount_eth,
          gasLimit: BigInt(8000000),
        });
        await transaction.wait();
        notiftySuccess("transaction successfuly completed");

        setLoader(false);
        window.location.reload();
      }
    } catch (error) {
      console.log("error", error);
      notifyError("errot try again later");
      setLoader(false);
    }
  };
  //0x3529A33A5980FF99DF319219AdcF9fb04217204F
  const TRANSFER_ETHER = async (transfer) => {
    try {
      const { _receiver, _amount } = transfer;
      setLoader(true);
      const address = await CheckIfWalletConnected();
      if (address) {
        setAccount(address);
        console.log("_amount _receiver", _receiver, _amount);

        const contract = await TokenICOContract();
        console.log("oher wa contract", contract);
        console.log("xxxxxx", typeof _amount);
        const amount_eth = ethers.parseEther(_amount.toString());
        console.log("amount_eth", amount_eth);
        console.log("_receivermount_eth", _receiver, _amount);

        const transaction = await contract.transferEther(
          _receiver,
          amount_eth,
          {
            value: amount_eth,
            gasLimit: BigInt(8000000),
          }
        );
        await transaction.wait();
        notiftySuccess("transaction successfuly completed");

        setLoader(false);
        window.location.reload();
      }
    } catch (error) {
      console.log("error", error);
      notifyError("errot try again later");
      setLoader(false);
    }
  };

  const TRANSFER_TOKEN = async (transfer) => {
    try {
      setLoader(true);
      const address = await CheckIfWalletConnected();
      console.log(" const address", address);
      const {
        _tokenAddress: tokenAddress,
        _sendTo: receiver,
        _amount: amount,
      } = transfer;

      console.log(
        " tokenAddress, receiver, amount",
        tokenAddress,
        receiver,
        amount
      );
      if (address) {
        setLoader(true);
        setAccount(address);
        const contract = await ERC20Contract(tokenAddress);
        console.log(" const contract", contract);
        const amounToken = ethers.parseEther(amount);
        console.log(" amounToken ", amounToken);
        const transaction = await contract.transfer(receiver, amounToken, {
          gasLimit: BigInt(8000000),
        });
        console.log("  transaction", transaction);
        await transaction.wait();
        notiftySuccess("transaction successfuly completed");

        setLoader(false);
        window.location.reload();
      }
    } catch (error) {
      console.log("error", error);
      notifyError("errot try again later");
      setLoader(false);
    }
  };
  return (
    <TokenICOContractContext.Provider
      value={{
        BUY_TOKEN,
        currency,
        TOKEN_ICO,
        TOKEN_WIDTHRAW,
        UPDATE_TOKEN,
        UPDATE_TOKEN_PRICE,
        DONATE,
        TRANSFER_ETHER,
        TRANSFER_TOKEN,
        account,
        setAccount,
        TOKEN_ADDRESS,
        setLoader,
        changeNetwork,
        handleSwitchingNetwork,
        CheckIfWalletConnected,
        connectWallet,
        fetchContract,
        loader,
        TokenICOContract,
        ERC20,
        ERC20Contract,
        getBalance,
        checkAccountBalance,
        addtokenToMetamask,
        shortenAddress,
      }}
    >
      {children}
    </TokenICOContractContext.Provider>
  );
};
