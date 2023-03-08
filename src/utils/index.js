function checkUserAndToken(setGetUser, setGetToken) {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (user && token) {
    setGetUser(true);
    setGetToken(true);
  } else {
    setGetUser(false);
    setGetToken(false);
  }
}

export default checkUserAndToken;
