const { Router } = require("express");

const userController = require("../controller/userController");

const router = new Router();

router.post("/login", userController.handleLogin);

module.exports = router;
