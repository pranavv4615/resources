const jwt = require("jsonwebtoken");
const getEmailId = (token) => {
  const decoded = jwt.verify(token, "4512fehrettbdsfbty252524ge354523");
  return decoded?.emailId;
};

module.exports = {
  getEmailId,
};
