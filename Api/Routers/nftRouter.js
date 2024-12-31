const express = require("express");
const nftController = require("../Controllers/nftController");
const router = express.Router();

router.route("/").get(nftController.getAllNFTs).post(nftController.createNFT);
router.route("/:id").get(nftController.getNFT);

module.exports = router;
