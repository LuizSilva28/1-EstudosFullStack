const os = require("node:os");

const plataform = os.platform();
console.log("Plataforma do SO: ", plataform);

const arquitetura = os.arch();
console.log("Arquitetura do SO: ", arquitetura);

const cpus = os.cpus();
console.log("Informações da CPU: ", cpus[0]);

const memoria = os.freemem();

console.log("Total de memoria do PC: ", memoria / 1024 / 1024 / 1024, "GB");
