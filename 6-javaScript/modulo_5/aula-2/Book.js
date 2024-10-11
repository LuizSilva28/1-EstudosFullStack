class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
        this.published = false;
	}
    publish(){
        this.published = true;
    }

}

const eragon = new Book("Eragon", "Luiz");
const eldest = new Book("Eldest", "Henrique");

eragon.publish();

console.log(eragon);
console.log(eldest);

console.log(eragon instanceof Book)