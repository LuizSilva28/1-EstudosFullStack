let listTasks = [
	{
		id: "1",
		title: "Luiz",
		tasks: [{ content: "", status: false }],
		createdAt: new Date().toUTCString(),
		updatedAt: new Date().toUTCString(),
	},
	{
		id: "2",
		title: "Juliana",
		tasks: [{ content: "", status: false }],
		status: false,
		createdAt: new Date().toUTCString(),
		updatedAt: new Date().toUTCString(),
	},
];

let tasks = [{ content: "Lorem ipsum...", status: false }];

// {id, title, content, status, createdAt, updatedAt}

const modelTasks = {
	showAllTasks() {
		return listTasks;
	},
	showTask(id) {
		//console.log(id);
		const task = listTasks.find((task) => task.id === id);
		return task;
	},
	createTasks(title, listContent, listStatus) {
		let tasks = [];
		let i = 0;

		
		while (i <= listContent.length - 1 && i <= listStatus.length - 1) {
			
			tasks.push({ content: listContent[i], status: listStatus[i] });

			i++;
		}

		const listTask = {
			id: Date.now().toString(),
			title: title,
			tasks: tasks,
			status: false,
			createdAt: new Date().toUTCString(),
			updatedAt: new Date().toUTCString(),
		};
		//console.log(listTask);

		return listTask;
	},
	saveTask(task) {
		listTasks.unshift(task);
	},

	updatedTasks(id, title, listContent, listStatus) {
		const index = listTasks.findIndex((task) => task.id === id);

		console.log(listStatus);

		let tasks = [];
		let i = 0;

			while (i <= listContent.length - 1 && i <= listStatus.length - 1) {
				tasks.push({ content: listContent[i], status: listStatus[i] });

				i++;
			}
		// console.log("teste1")
		// console.log(listStatus.length);
		// console.log("teste")
		// console.log(tasks)
		// console.log("teste")

		listTasks[index] = {
			...listTasks[index],
			title: title,
			tasks: tasks,
			updatedAt: new Date().toUTCString(),
		};

		//console.log(listTasks[index]);
	},

	deleteTask(id) {
		//console.log(id);
		listTasks = listTasks.filter((task) => task.id !== id);
	},
};

(module.exports = modelTasks), listTasks;
