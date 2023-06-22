// router.js
const express = require("express");
const router = express.Router();
const {
  getBankDetails,
  postBankDetails,
  redirectToWebsite
} = require("./controller/bankcontroller");
const { login, register } = require("./controller/authentication")
const { getSheets, getSheetById, getBooking, createBooking } = require("./controller/cricketmatch")

const { verifyToken } = require("./middleware/jwtVerify")

router.post('/register', register)
router.post("/login", login)
router.get("/bankDetails/:bankId", verifyToken, getBankDetails); //mysql
router.post("/bankDetails", verifyToken, postBankDetails); //mysql

router.get("/sheets", verifyToken, getSheets);
router.get("/sheets/:sheet_id", verifyToken, getSheetById);

router.get("/booking", verifyToken, getBooking);
router.post("/booking", verifyToken, createBooking);

router.get('/website', verifyToken, redirectToWebsite)

module.exports = router;
