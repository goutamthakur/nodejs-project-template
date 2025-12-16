const createErrorResponse = (message = "Something went wrong", data = {}, error = {}) => {
  return {
    success: false,
    message,
    data,
    error,
  };
};

module.exports = createErrorResponse;
