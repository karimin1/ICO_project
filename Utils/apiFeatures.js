import { ethers } from "ethers";
import { formatEther } from "ethers";
import { getProviderOrSigner } from "./web3modal";
import {
  ERC20abi,
  ERC20Address,
  TokenICOabi,
  TokenICOAddress,
} from "../Context/constants";
export const changeNetwork = async ({ Networkname }) => {
  try {
    if (!web3modal) throw new Error("no crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[Networkname],
        },
      ],
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const handleSwitchingNetwork = async () => {
  const networkName = "sepolia";
  await changeNetwork({ networkName });
};
export const CheckIfWalletConnected = async () => {
  if (!window.ethereum) return console.log("please insall wallet");
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  if (accounts.length) {
    return accounts[0];
  } else {
    console.log("please Install MEtaMAsk    &connect");
  }
};
export const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      console.log("please install a wallet");
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (accounts.length) {
      // console.log('account',accounts[0]);
      return accounts[0];
    } else {
      console.log("please install metamask &connect");
    }
    window.location.reload();
  } catch (error) {
    console.log("error", error);
  }
};
export const fetchContract = (address, abi, singerOrProvider) => {
  if (!address || !abi || !singerOrProvider) {
    console.log("address,abi,singerOrProvider", {
      address,
      abi,
      singerOrProvider,
    });
    return null;
  }
  const contract = new ethers.Contract(address, abi, singerOrProvider);
  return contract;
};
export const TokenICOContract = async () => {
  try {
    const { provider, signer } = await getProviderOrSigner();
    console.log("TokenICOabi", TokenICOabi);
    const network = await provider.getNetwork();
    console.log("network.name", network.name);
    console.log("network.chainId", network.chainId);
    let contract;
    try {
      contract = fetchContract(TokenICOAddress, TokenICOabi, signer);
      console.log("conrac of TokenICOAddress, TokenICOabi,", contract);
    } catch (error) {
      console.log("error in contract fetching", error);
    }
    return contract;
  } catch (error) {
    console.log("error", error);
  }
};
export const ERC20 = async (ADDRESS) => {
  try {
    const { provider, signer } = await getProviderOrSigner();
    const network = await provider.getNetwork();

    const contract = fetchContract(ADDRESS, ERC20abi, signer);
    console.log("Address token", ADDRESS, "***", ERC20abi, "****", signer);
    console.log("contract of erc20 is", contract);

    const userAddress = await signer.getAddress();
    console.log("userAddress", userAddress);
    const balance = await contract.balanceOf(userAddress);
    console.log("balance", balance);
    const name = await contract.name();
    const supply = await contract.totalSupply();
    const decimals = await contract.decimals();
    const chainId = await network.chainId;
    const symbol = await contract.symbol();
    const address = await contract.target;
    console.log(
      "name,supply,decimals,symbol,address,balance,chainId",
      name,
      supply,
      decimals,
      symbol,
      balance,
      address,
      chainId
    );

    const token = {
      name: name,
      Symbol: symbol,
      address: address,
      supply: formatEther(supply),
      balance: formatEther(balance),
      chainId: chainId,
      decimals: decimals,
    };
    console.log("token is ", token);
    return token;
  } catch (error) {
    console.log("error", error);
  }
};
export const ERC20Contract = async (tokenAddress) => {
  try {
    const { provider, signer } = await getProviderOrSigner();
    const network = await provider.getNetwork();

    const contract = fetchContract(tokenAddress, ERC20abi, signer);
    return contract;
  } catch (error) {
    console.log("error", error);
  }
};
export const getBalance = async () => {
  try {
    const { provider, signer } = await getProviderOrSigner();
    const network = await provider.getNetwork();

    const maticBal = formatEther(await provider.getBalance(signer.address));

    // return ;

    return maticBal;
  } catch (error) {
    console.log("error", error);
  }
  S;
};
export const checkAccountBalance = async (ADDRESS) => {
  try {
    const { provider, signer } = await getProviderOrSigner();

    const maticBal = await provider.getBalance(ADDRESS);
    return ethers.utils.formatEther(maticBal.toString());
  } catch (error) {
    console.log("error", error);
  }
};
export const addtokenToMetamask = async (TOKEN_ADDRESS) => {
  if (window.ethereum) {
    console.log("TOKEN_ADDRESS", TOKEN_ADDRESS);
    const tokenDetails = await ERC20(TOKEN_ADDRESS);
    const tokenDecimals = tokenDetails?.decimals;
    const tokenAddress = TOKEN_ADDRESS;
    const tokenSymbol = tokenDetails?.Symbol;
    const tokenImage = "assets/img/brand/brand_01.png";

    try {
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            Symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });
      if (wasAdded) {
        return "Token dded";
      } else {
        return "token not added";
      }
    } catch (error) {
      console.log("failed to add", error);
    }
  } else {
    return "?KMetaKM?Ask ,not installed";
  }
};
