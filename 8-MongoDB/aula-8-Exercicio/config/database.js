const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//Pega o objeto mongoose que criamos e usa o método connect passando o caminho do banco que queremos manipular no mongodb
mongoose
	.connect("mongodb://localhost/todo-list", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}) //parametros de consiguração do mongo e é uma promise e o mongo vai tentar resolver esta promise
	.then(() => console.log("Conectado ao MongoDB")) // no then quando ele conseguir resolver essa promise ele retornara o console.logo('Conectado ao MongoDB')
	.catch((err) => console.error(err));//caso de errado o console.error ira aparecer

