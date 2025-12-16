const { rateLimit } = require("express-rate-limit");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

// Basic rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  handler: (req, res) => {
    res
      .status(StatusCodes.TOO_MANY_REQUESTS)
      .json(
        ErrorResponse("Too many requests, please try again later.", {}, {})
      );
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { limiter };
