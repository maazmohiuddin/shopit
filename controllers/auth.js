exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get("Cookie").split(";")[0].trim().split("=")[0] || "";

  console.log(isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
};
exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedin=true");
  res.redirect("/");
};
