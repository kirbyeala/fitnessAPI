const router = require("express").Router();

const auth = require("../auth");

const {

registerUser,
loginUser,
getProfile

} = require("../controllers/user");


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/details", auth, getProfile);


module.exports = router;