// Resolução da Aula

export class Component {
	#element = null;

	constructor(tag, parent, options) {
		this.tag = tag;
		this.parent = parent;
		this.options = options;
		this.build();
	}
	getElement() {
		return this.#element;
	}
	build() {
		this.#element = document.createElement(this.tag);
		Object.assign(this.#element, this.options);
		return this;
	}
	render() {
		if (this.parent instanceof Component) {
			this.parent.getElement().append(this.#element);
		} else {
			document.querySelector(this.parent).append(this.#element);
		}
	}
}

// Minha resolução
/*
	class Component {
	#dom;
	constructor(dom, ele) {
		this.#dom = dom;
		this.build = document.createElement(ele);
	}
	getDom() {
		return this.#dom;
	}

	build(ele) {
		return this.build(ele);
	}
	render(nameEle) {
		return this.#dom.appendChild(nameEle);
	}
	}
	module.exports = Component;
*/
