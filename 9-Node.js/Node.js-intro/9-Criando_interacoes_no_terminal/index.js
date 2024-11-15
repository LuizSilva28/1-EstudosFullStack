/*process.stdout.write("Olá, mundo!");


process.stdin.on("data", (data)=> {
    process.stdout.write(`Voce digitou: ${data}`)
})*/

const readline = require("node:readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
/*
rl.on("line", (input)=>{
rl.write(`Voce digitou: ${input}`);
})*/
/*
rl.question("Qual é o seu nome?", (answer) => {
	rl.write(`Olá, ${answer}\n`);
	rl.close();
});

rl.once("close", () => {
	rl.write("Saindo..");
	//process.exit(0);
});
*/
rl.on("SIGINT", () => {
	rl.question("Deseja realmente sair?(s/n)", (answer) => {
		if (answer.trimEnd().toLocaleLowerCase() === "s") {
			process.exit(0);
		} else {
			rl.write("Você escolheu continuar.");
		}
	});
});
