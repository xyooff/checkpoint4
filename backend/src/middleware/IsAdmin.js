const IsAdmin = (req, res, next) => {
  if (req.userRole === "ROLE_ADMIN") {
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = IsAdmin;
