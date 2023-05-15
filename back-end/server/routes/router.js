const express = require("express");
const route = express.Router();
const userController = require("../controller/userController");
const experienceController = require("../controller/experienceController")
const projectController = require("../controller/projectController")
const auth = require("../middleware/auth");
const upload = require("../middleware/upload")

route.post("/api/userCreate", userController.userCreate);
route.post("/api/userLogin", userController.userLogin);
route.post("/api/createExperience", experienceController.createExperience);
route.post("/api/createProject", upload.single('imageProject'), projectController.createProject);


module.exports = route;
