import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import {
  useAddress,
  useContract,
  useMetamask,
  //New hooks for frontend
  useDisconnect,
  useSigner,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0xb553C4DF4009a867216b45d6c5199010a7226bca"
  );

  const address = useAddress();
  const connect = useMetamask();

  const disconnect = useDisconnect();
  const signer = useSigner();
  const [userBalance, setUserBalance] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      //USER BALANCE
      const balance = await signer?.getBalance();
      const userBalance = address
        ? ethers.utils.formatEther(balance?.toString())
        : "";
      setUserBalance(userBalance);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //contract functions
  //upload
  const uploadImage = async (imageInfo) => {
    const { title, description, email, category, image } = imageInfo;
    try {
      const listingPrice = await contract.call("listingPrice");

      const createNFTs = await contract.call(
        "uploadIPFS",
        [address, image, title, description, email, category],
        { value: listingPrice.toString() }
      );

      //api call
      const response = await axios({
        method: "post",
        url: `/api/v1/NFTs`,
        data: {
          title: title,
          description: description,
          category: category,
          image: image,
          address: address,
          email: email,
        },
      });
      console.log(response);
      console.info("contract call success", createNFTs);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
};
