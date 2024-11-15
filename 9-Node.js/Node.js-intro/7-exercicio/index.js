const os = require("node:os");
const fs = require("node:fs");
const path = require("node:path");

async function showInfoPC() {
	const detailsPC = {
		platform: os.platform(),
		arch: os.arch(),
		nameCpu: os.cpus()[0].model,
		systemUptime:
			`Hora:${Math.floor(os.uptime() / 3600)}h ` +
			`Min:${Math.floor((os.uptime() % 3600) / 60)}m ` +
			`Seg: ${Math.floor(os.uptime() % 60)}s`,
		memoryUsed: Math.round((os.totalmem() - os.freemem()) / 1024 ** 3),
	};
	//console.log(detailsPC);
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
			const result = await showInfoPC();
			const res = JSON.stringify(result);
			const {
				existFileName,
				existPathForfileName,
				absolutePath,
				filePath,
			} = await filesVerification();

			//const { existPathForfileName } = await filesVerification();
			//const { fileName } = await filesVerification();

			if (!existFileName || !existPathForfileName) {
				createFolder(absolutePath);
				createFile( filePath, res);
			}
			if (existPathForfileName) {
				registerInfo(res, filePath);
			}
		} catch (error) {
			console.log(error);
		}
	}, 1000 * 2);
}
execute();
