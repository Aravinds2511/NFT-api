const NFT = require("../Model/nftModel");

exports.getAllNFTs = async (req, res, next) => {
  const nfts = await NFT.find();

  res.status(200).json({
    status: "success",
    results: nfts.length,
    data: {
      nfts,
    },
  });
};

exports.getNFT = async (req, res, next) => {
  const nft = await NFT.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      nft,
    },
  });
};

exports.createNFT = async (req, res, next) => {
  console.log(req.body);
  const newNft = await NFT.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      nft: newNft,
    },
  });
};
