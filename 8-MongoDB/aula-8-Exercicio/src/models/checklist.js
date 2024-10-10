const mongoose = require('mongoose');

const checklistSchema = mongoose.Schema({
	name: { type: String, required: true },
	tasks: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Task",
		},
	],
});
module.exports = mongoose.model('Checklist', checklistSchema)




/* EXPLICANDO O CÓDIGO 

    criando uma estrutura de dados com o schema para o projeto
    const checklistSchema = mongoose.Schema({
	    name: { type: String, require: true },

	    //criando a associação de referência entre a checklist e a task, abaixo o código diz que a checklist pode possuir uma   task, pelo fato de poder possuir mais de uma task ela é passada entre [ ] como se formasse um array de tasks, diferente do que vimos na associação feita lá no model task, já que cada task sempre vai ter apenas uma checklist associdada a ela,
	    tasks: [
		    {
			    type: mongoose.Schema.Types.ObjectId,
			    ref: "Task",
		    },
	    ],
    });
    // mongoose.model() tem a função de gerar um model, Checklist é o nome desse model e checklistSchema seria o modelo de estrutura criado para ele e é atraves desse schema  que o mongoose.model() cria o model para uso, 
    module.exports = mongoose.model('Checklist', checklistSchema)

*/