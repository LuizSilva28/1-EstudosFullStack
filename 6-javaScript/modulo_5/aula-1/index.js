/*
	const book = {
	title: "Eragon",
	pages: 468,
	published: true,
	inStock: 20,
	tags: ["fantasy", "adventure", "medieval"],
	author: {
		name: "Christopher Paolini",
	},
	addOnStock(quantity) {
		this.inStock += quantity;
	},
    
	};

	book.save = function() {
        // salva no banco de dados
    }

	console.log(book);
*/





function Book (title, pages, tags, author) {
	this.title = title;
	this.pages = pages;
	this.tags = tags;
	this.author = author;
	this.published = false;
	this.inStock = 0;
	this.addOnStock = function (quantity) {
		this.inStock += quantity;
	};
	this.save = function () {
		//salva no banco de dados
	};
}

const author = { name: "Christopher Paulini"}
const tags = ["fantasy", "adventure", "medieval"];


const eragon = new Book("Eragon", 469, tags, author);
console.log(eragon);

const eldest = new Book("Eldest", 644, tags, author);

console.log(eldest);