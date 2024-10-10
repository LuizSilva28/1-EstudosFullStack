const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
	name: { type: String, required: true },
	done: { type: Boolean, default: false },

	checklist: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Checklist",
		required: true,
	},
});

module.exports = mongoose.model("Task", taskSchema);


/*
const Checklist = require('./src/models/checklist');       
undefined
> const Task = require('./src/models/task');
undefined
> let checklist = new Checklist({});
undefined
> checklist.save().then(res => console.log(res)).cath (e => console.log(e))

Checklist.create({name: 'criar um novo código'}).then(res => console.log(res)).catch(err => console.log(err))

*/


/*  EXPLICANDO O CÓDIGO 


    //criando uma estrutura de dados com o schema para o projeto
    const taskSchema = mongoose.Schema({
	    name: { type: String, require: true },
	    done: { type: boolean, default: false },

	    //criando a associação de referência entre a task e o checklist, abaixo o código diz que a task sempre vai estar associada a um objectId de uma checklist
	    checklist: {

		    //o type especifica que a checklist para a associação a ser feita será do tipo id
		    type: mongoose.Schema.Types.ObjectId,

         //fazendo uma referencia ao nome do meu model que ja existe
            ref: 'Checklist',
    
            required: true
	    },
    });

    // mongoose.model() tem a função de gerar um model, task é o nome desse model e taskSchema seria o modelo de estrutura criado para ele e é atraves desse schema  que o mongoose.model() cria o model para uso,
    module.exports = mongoose.model("task", taskSchema);

*/
