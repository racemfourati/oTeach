var lecturesController = require("../controllers/lecturesControllers");
var lectureRouter = require("express").Router();

lectureRouter.route("/").get(lecturesController.retrieve);

lectureRouter.route("/:id").get(lecturesController.retrieveOne);

lectureRouter.route("/").post(lectureController.create);

module.exports = lecturesController;
