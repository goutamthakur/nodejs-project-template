const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

function globalErrorHandler(err, req, res, next) {
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json(ErrorResponse("Something went wrong", {}, {}));
}

module.exports = {
  globalErrorHandler,
};
