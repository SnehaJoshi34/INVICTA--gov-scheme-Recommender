const {
  login,
  register,
  // getAllUsers,
  // setAvatar,
  // forgetpass,
  // logOut,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/", login);
// router.post("/Login", login);
router.post("/Signup", register);
// router.get("/allusers/:id", getAllUsers);
// router.post("/setavatar/:id", setAvatar);
// router.post("/forgetpass", forgetpass);
// router.get("/logout/:id", logOut);

module.exports = router;
