const getToken = function() {
  let currentToken = localStorage.getItem("token");

  if (jwtDecode(token).exp < Date.now() / 1000) {
    localStorage.clear();
    //refreshToken()
  }

  return currentToken;
};

export { getToken };
