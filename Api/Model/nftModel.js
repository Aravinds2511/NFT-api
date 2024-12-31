const moogose = require("mongoose");

const nftSchema = new moogose.Schema({
  title: {
    type: String,
    trim: true,
  },
  discription: {
    type: String,
    trim: true,
  },
  category: String,
  email: String,
  address: String,
  createdAt: {
    type: Date,
    defaule: Date.now(),
  },
  image: String,
});

const NFT = moogose.model("NFT", nftSchema);
module.exports = NFT;
