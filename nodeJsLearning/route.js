// router.js
const express = require("express");
const router = express.Router();
const {
  getBankDetails,
  postBankDetails,
} = require("./controller/bankcontroller");

const {
  getpersonalDetails,
  postpersonalDetails,
} = require("./controller/personalcontroller");

router.get("/bankDetails/:bankId", getBankDetails); //mysql
router.post("/bankDetails", postBankDetails); //mysql

router.get("/personalDetails", getpersonalDetails); //mongodb
router.post("/personalDetails", postpersonalDetails); //mongodb

module.exports = router;
