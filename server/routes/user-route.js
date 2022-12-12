const express = require("express");
const router = express.Router();
const {
  registerUser,
  getUserProfile,
  updateUserProfile,
  updateUserPassword,
  switchUserRole,
  deleteUser,
} = require("../controllers/user-controller");
const {
  isAuthenticatedUser,
  isAdmin,
} = require("../middlerware/auth-middleware");

router.route("/register").post(registerUser);

router
  .route("/profile")
  .get(isAuthenticatedUser, getUserProfile)
  .patch(isAuthenticatedUser, updateUserProfile);

router.route("/password/update").patch(isAuthenticatedUser, updateUserPassword);

router.route("/switch-role").patch(isAuthenticatedUser, switchUserRole);

module.exports = router;
