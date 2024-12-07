const express = require("express");
const taskController = require("./controllers/taskController");

const router = express.Router();

router.get("/", taskController.main);
router.get("/tasks", taskController.showAllTasks);
router.get("/tasks/:id", taskController.showTask);
router.get("/createTask", taskController.showCreationTask);

router.post("/createTask", taskController.createTask);
router.post("/createTask/update/:id", taskController.updating);

router.post("/createTask/delete/:id", taskController.removeTask);

module.exports = router;
