class User {
	constructor(fullname, email, password) {
		this.fullname = fullname;
		this.email = email;
		this.password = password;
		this.login = false;
	}
	logar(email, password) {
		if ((this.email === email) & (this.password === password)) {
			User.login === true;
			console.log("logado com sucesso!");
		} else {
			User.login === false;
			console.log("falha ao logar!");
		}
	}
}

const user1 = new User("Luiz Henrique", "luiz@email.com", 1234);

console.log(user1);
console.log(user1.logar("luiz@email.com", 1234));
console.log(user1);

console.log("\n.\n.\n.\n");

// segunda class

class Product {
	constructor(name, description, price) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.inStock = 0;
	}
	addToStock(inStock) {
		this.inStock += inStock;
	}
	calculateDiscount(discount) {
		return (this.price * (100 - discount)) / 100;
	}
}

console.log(Product);

const product1 = new Product(
	"cera",
	"produto automotivo para acabamento de pintura",
	30
);

console.log(product1);

product1.addToStock(7);

console.log(product1);
const priceWithDiscaount = product1.calculateDiscount(15);
console.log(priceWithDiscaount);
