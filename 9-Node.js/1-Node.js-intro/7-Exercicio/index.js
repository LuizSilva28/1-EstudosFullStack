const os = require("node:os");
const fs = require("node:fs");
const path = require("node:path");

async function showInfoPC() {
	const detailsPC = {
		platform: os.platform(),
		arch: os.arch(),
		nameCpu: os.cpus()[0].model,
		systemUptime:
			`Dias:${Math.floor(os.uptime() / 3600 / 24)}dias ` +
			`Hora:${Math.floor((os.uptime() / 3600) % 24)}h ` +
			`Min:${Math.floor((os.uptime() % 3600) / 60)}m ` +
			`Seg: ${Math.floor(os.uptime() % 60)}s`,
		memoryUsed: `Memória usada: ${((os.totalmem() - os.freemem()) / 1024 ** 3).toFixed(
			2
		)}GB / Total: ${(os.totalmem() / 1024 ** 3).toFixed(2)}GB / Porcentagem: ${(
			((os.totalmem() - os.freemem()) / os.totalmem()) * 100) 
		.toFixed(2)}%`,
	};
	return detailsPC;
}

async function createFolder(absolutePath) {
	const folder = fs.mkdir(absolutePath, { recursive: true }, (error) => {
		if (error) {
			console.log("Falha ao criar a pasta: ", error.message);
		}
		console.log("pasta criada com sucesso");
	});
	return folder;
}

async function createFile(filePath, res) {
	const file = fs.writeFile(filePath, res, "utf8", (error) => {
		if (error) {
			console.log("Falha ao criar o arquivo: ", error.message);
			return;
		}
		console.log("Arquivo criado com sucesso!");
	});
	return file;
}

async function registerInfo(res, filePath) {
	const registerInfo = fs.appendFile(filePath, res, "utf8", (error) => {
		if (res === undefined || res === null) {
			console.log("Falha ao armazenar as informações: ", error.message);
			return;
		}
		console.log("Informações armazenadas com sucesso!");
	});
}

async function filesVerification(result) {
	const dir = "log";
	const fileName = "log.txt";
	const absolutePath = path.join(__dirname, dir);
	const filePath = path.join(absolutePath, fileName);
	const existFileName = fs.existsSync(absolutePath);
	const existPathForfileName = fs.existsSync(filePath);

	return { existFileName, existPathForfileName, absolutePath, filePath };
}

async function execute() {
	setInterval(async () => {
		try {
			console.clear();
			const result = await showInfoPC();
			console.log(result);
			const res = JSON.stringify(result);
			const {
				existFileName,
				existPathForfileName,
				absolutePath,
				filePath,
			} = await filesVerification();

			if (!existFileName || !existPathForfileName) {
				createFolder(absolutePath);
				createFile(filePath, res);
			}
			if (existPathForfileName) {
				registerInfo(res, filePath);
			}
		} catch (error) {
			console.log(error);
		}
	}, 1000);
}

execute();
