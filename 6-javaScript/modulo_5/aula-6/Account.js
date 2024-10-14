class Account {
	#password;
	#balance = 0;
	constructor(user) {
		this.email = user.email;
		this.#password = user.password;
		
	}
    getBalance(email, password){
        if(this.#authenticate(email, password)){
            return this.#balance
        } else{
            return null
        }
    }

    #authenticate(email, password){
        return this.email === email && this.#password === password;
    }
}

const user = {
	email: "john.doe@example.com",
	password: "password123",
};

const myAccount = new Account(user);

console.log(myAccount);

console.log(myAccount.getBalance("john.doe@example.com", "password123"));
