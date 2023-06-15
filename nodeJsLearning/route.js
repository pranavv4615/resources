// router.js
const express = require("express");
const router = express.Router();
const {
  getBankDetails,
  postBankDetails,
} = require("./controller/bankcontroller");

const { getSheets, getSheetById, getBooking, createBooking } = require("./controller/cricketmatch")

router.get("/bankDetails/:bankId", getBankDetails); //mysql
router.post("/bankDetails", postBankDetails); //mysql

router.get("/sheets", getSheets);
router.get("/sheets/:sheet_id", getSheetById);

router.get("/booking", getBooking);
router.post("/booking", createBooking);

module.exports = router;
