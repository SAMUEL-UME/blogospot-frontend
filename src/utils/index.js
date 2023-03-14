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
function deleteItem() {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (user && token) {
    setTimeout(function () {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }, 3 * 24 * 60 * 60 * 1000);
  }
}

function getTheme(setDarkTheme) {
  const theme = localStorage.getItem("theme");
  if (theme === "true") {
    setDarkTheme(true);
  } else {
    setDarkTheme(false);
  }
}

function removeQuotes(str) {
  return str.replace(/['"]/g, "");
}

export { checkUserAndToken, removeQuotes, getTheme, deleteItem };
