const {
  getBankDetailsServices,
  postBankDetailsServices,
  redirectToWebsiteService
} = require("../services/bankServices.js");

const getBankDetails = async (req, res) => {
  try {
    const result = await getBankDetailsServices(req);
    res.status(200).send({
      status: true,
      message: "Request Processed Succesfully",
      response: result,
    });
  } catch (err) {
    res.status(500).send({ status: false, message: "Internal server error" });
  }
};

const postBankDetails = async (req, res) => {
  try {
    const result = await postBankDetailsServices(req);
    res.status(200).send({
      status: true,
      message: "Request Processed Succesfully",
      response: result,
    });
  } catch (err) {
    res.status(500).send({ status: false, message: "Internal server error" });
  }
};

const redirectToWebsite = async (req, res) => {
  try {
    const result = await redirectToWebsiteService(req);
    res.status(200).send({
      status: true,
      message: "Request Processed Succesfully",
      response: result,
    });
  } catch (err) {
    res.status(500).send({ status: false, message: "Internal server error" });
  }
};

module.exports = {
  getBankDetails,
  postBankDetails,
  redirectToWebsite
};
