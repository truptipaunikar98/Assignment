
exports.sendResponse = (res, code, message, data) => {
  const response = {
    status: {
      code,
      message,
    },
  };
  if (data) {
    response.data = data;
  }
  return res.status(code).json(response);
};


