import Web3Modal from "web3modal";
import { ethers } from "ethers";

let web3modal = null;
let isConnecting = false;
export const getProviderOrSigner = async () => {
  if (typeof window == "undefined") {
    throw new Error("This function can only run in the browser");
  }
  if (!web3modal) {
    web3modal = new Web3Modal({ cacheProvider: true });
    console.log("web3modal", web3modal);
  }
  if (isConnecting) {
    console.log("alreading cnnecting");
    return;
  }

  isConnecting = true;
  try {
    const connection = await web3modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = await provider.getSigner();

    return { provider, signer };
  } catch (error) {
    console.log("eror", error);
  } finally {
    isConnecting = false;
  }
};
