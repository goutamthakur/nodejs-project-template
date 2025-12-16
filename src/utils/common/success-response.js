const createSuccessResponse = (message = "Successfully completed the request", data = {}, error = {}) => {
  return {
    success: true,
    message,
    data,
    error,
  };
};

module.exports = createSuccessResponse;
