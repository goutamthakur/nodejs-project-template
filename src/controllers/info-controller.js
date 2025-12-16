const { StatusCodes } = require("http-status-codes");
const { SuccessResponse } = require("../utils/common");

const info = (req, res) => {
  return res.status(StatusCodes.OK).json(SuccessResponse("API is live"));
};

module.exports = {
  info,
};
