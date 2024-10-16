//Resolução da aula

import { Component } from "./Component.js";

export class Input extends Component{
	constructor(parent, options){
		super('input', parent, options)
	}
}




//Minha Resolução
/*
	const Component = require("./Component");

	class InputComponents extends Component {
	constructor( dom, ele, inputType, placeholder ) {
		super( dom,ele);

		this.inputType = this.build.setAttribute("type", inputType);

        this.placeholder = this.build.setAttribute("placeholder", placeholder);
        
	}
	}



	module.exports = InputComponents;

*/

