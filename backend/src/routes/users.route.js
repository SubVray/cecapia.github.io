const { Router } = require("express");
const router = Router();

const {
  getUsers,
  getUser,
  userRegister,
  updateUser,
  deleteUser,
  userLogin,
  getUserData,
} = require("../controllers/users.controllers");

// get obtener
// post crear
// get ID  obtiene 1
// put actualizar
// delete borrar

router.route("/users").get(getUsers);
router.route("/user/register").post(userRegister);
router.route("/user/login").post(userLogin);
router.route("/user/information").post(getUserData);
router.route("/user/:id").get(getUser);
router.route("/user/update/:id").put(updateUser);
router.route("/user/delete/:id").delete(deleteUser);

module.exports = router;
