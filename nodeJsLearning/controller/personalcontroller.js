const { getpersonalDetailsServices } = require("../services/personalServices");

const getpersonalDetails = (req, res) => {
  try {
    const result = getpersonalDetailsServices(req);
    res.status(200).send({
      status: true,
      message: "Request Processed Succesfully",
      result: result,
    });
  } catch (err) {
    res.send(500).send({ status: false, message: "Internal Server Error!" });
  }
};

const postpersonalDetails = (req, res) => {};

module.exports = {
  getpersonalDetails,
  postpersonalDetails,
};
