/** @format */

// CARROSSEL VERTICAL

let projects = [
	{ name: "ITEM 1", imagePath: "", description: "DESCRIÇÃO 1" },
	{ name: "ITEM 2", imagePath: "", description: "DESCRIÇÃO 2" },
	{ name: "ITEM 3", imagePath: "", description: "DESCRIÇÃO 3" },
	{ name: "ITEM 4", imagePath: "", description: "DESCRIÇÃO 4" },
	{ name: "ITEM 5", imagePath: "", description: "DESCRIÇÃO 5" },
	{ name: "ITEM 6", imagePath: "", description: "DESCRIÇÃO 6" },
	{ name: "ITEM 7", imagePath: "", description: "DESCRIÇÃO 7" },
	{ name: "ITEM 8", imagePath: "", description: "DESCRIÇÃO 8" },
	{ name: "ITEM 9", imagePath: "", description: "DESCRIÇÃO 9" },
	{ name: "ITEM 10", imagePath: "", description: "DESCRIÇÃO 10" },
	{ name: "ITEM 11", imagePath: "", description: "DESCRIÇÃO 11" },
	{ name: "ITEM 12", imagePath: "", description: "DESCRIÇÃO 12" },
	{ name: "ITEM 13", imagePath: "", description: "DESCRIÇÃO 13" },
	{ name: "ITEM 14", imagePath: "", description: "DESCRIÇÃO 14" },
	{ name: "ITEM 15", imagePath: "", description: "DESCRIÇÃO 15" },
	{ name: "ITEM 16", imagePath: "", description: "DESCRIÇÃO 16" },
];

const carouselContainer = document.querySelector(".carousel-container");
const carousel = document.querySelector(".carousel");

let mapAngle = [
	50,
	18,
	9,
	0,
	-9,
	-18,
	-50,
]


class Carousel3DVertical {
	constructor(elementCarousel, carouselContainer, arrayObjects) {
		this.elementCarousel = elementCarousel;
		this.carouselContainer = carouselContainer;
		this.arrayObjects = arrayObjects;

		this.blockRotateX = 3;
		this.currentRotateX = [];

		this.init();
	}

	init() {
		if (!this.elementCarousel || !this.carouselContainer) {
			console.error(
				"Elementos estruturais do carrossel não foram encontrados!",
			);
			return;
		}
		this.render();
	}

	createButton(container, direction) {
		const button = document.createElement("button");
		button.classList.add(
			"btn",
			direction === "top" ? "btn-top" : "btn-bottom",
		);
		button.innerText = `${direction}`

		button.addEventListener("click", () => this.toRollCarousel(direction));
		container.appendChild(button);
	}

	updateDOM() {
		const cards = this.elementCarousel.children;
		Array.from(cards).forEach((card, index) => {
			card.style.transform = `rotateX(${mapAngle[this.currentRotateX[index]]}deg) translateZ(800px)`;
		});
	}

	toRollCarousel(direction) {
		const cardsLength = this.arrayObjects.length;

		if (direction === "bottom") {
			if (this.currentRotateX[0] >= this.blockRotateX) return;

			const menorValor = Math.min(...this.currentRotateX);
			let lastToBeMoved = this.currentRotateX.findLastIndex((ele) => ele == menorValor);

			this.currentRotateX.forEach((ele, index) => {
				this.currentRotateX[index] =
					ele + 1 <= mapAngle.length - 1 && index >= lastToBeMoved?
						ele + 1
					:	ele;
			})
		} else if (direction === "top") {
			if (this.currentRotateX[cardsLength - 1] <= this.blockRotateX)
				return;

			const maiorValor = Math.max(...this.currentRotateX);
			let lastToBeMoved = this.currentRotateX.indexOf(maiorValor);

			this.currentRotateX.forEach((ele, index) => {
				this.currentRotateX[index] =
						ele - 1 >= 0 && index <= lastToBeMoved? ele - 1 : ele;
			});
		}


		this.updateDOM();
	}

	createCard(object, index) {

		let indexItial = index <= mapAngle.length-1 ? index : mapAngle.length-1

		this.currentRotateX[index] = indexItial;

		const card = document.createElement("div");
		card.classList.add("face", `carousel-item-${index + 1}`);


		card.style.transform = `rotateX(${mapAngle[this.currentRotateX[index]]}deg) translateZ(800px)`;

		return card;
	}

	render() {
		this.elementCarousel.innerHTML = "";

		this.createButton(this.carouselContainer, "top");
		this.createButton(this.carouselContainer, "bottom");

		const fragment = document.createDocumentFragment();

		this.arrayObjects.forEach((object, index) => {
			const cardElement = this.createCard(object, index);
			fragment.appendChild(cardElement);
		});

		this.elementCarousel.appendChild(fragment);
	}
}

if (carousel && carouselContainer) {
	new Carousel3DVertical(
		carousel,
		carouselContainer,
		projects,
	);
}
