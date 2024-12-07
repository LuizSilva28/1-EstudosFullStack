const modelTasks = require("../models/modelsTasks");

const taskController = {
	main: (req, res) => {
		res.render("main");
	},

	showAllTasks: (req, res) => {
		const allTasks = modelTasks.showAllTasks();
		res.render("allTasks", { allTasks });
	},

	showTask: (req, res) => {
		const { id } = req.params;

		const task = modelTasks.showTask(id);

		res.render("task", { task: task });
	},

	showCreationTask: (req, res) => {
		res.render("creationTask");
	},

	createTask: (req, res) => {
		const { title } = req.body;
		let listStatus = req.body.status;
		let listContent = req.body.content;

		const task = modelTasks.createTasks(title, listContent, listStatus);

		modelTasks.saveTask(task);
		res.redirect(`/tasks/${task.id}`);
	},



	updating: (req, res) => {
		const { id } = req.params;
		let { title } = req.body;
		let listStatus = req.body.status;
		let listContent = req.body.content;

		

		modelTasks.updatedTasks(id, title, listContent, listStatus);
		res.redirect(`/tasks/`);
	},

	removeTask: (req, res) => {
		const { id } = req.params;
		modelTasks.deleteTask(id);
		res.redirect("/tasks");
	},
};

module.exports = taskController;
