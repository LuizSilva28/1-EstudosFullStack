//Resolução da aula

import { Component } from "./Component";

export class Label extends Component{
	constructor(text, parent, options){
		super('label', parent, Object.assign({}, options, { textContent : text}))

	}
}



//Minha Resolução
/*
	const Component = require("./Component");

	class LabelComponets extends Component {
	constructor(textLabel, dom, build) {
		super(dom, build);
		this.textLabel = this.build.innerText(textLabel);
	}
	}

	module.exports = LabelComponets;
*/