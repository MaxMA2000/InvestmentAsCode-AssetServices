
const getDalErrorMessage = (error) => {
  if (error.response && error.response.data && error.response.data.message) {
    return error.response.data.message;
  }
  return 'Unknown error occurred';
}


module.exports = {
  getDalErrorMessage
};
