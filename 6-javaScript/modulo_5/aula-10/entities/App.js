const Account = require("./Account");
const Deposit = require("./Deposit");
const Loan = require("./Loan");
const User = require("./User");

module.exports  = class App {
	static #userList = [];

	static exibirLisaDeUsuario() {
		return this.#userList;
	}

	static createNewUser(userName, email) {
		const exists = App.searchByUser(email);
		
		//console.log(exists[0]?.email);
		if (exists[0]?.email !== email) {
			const account = new Account();
			const user = new User(userName, email, account);
			account.accountOwner(user);
			App.#userList.push(user);

			return user;
		} else if (exists[0]?.email == email) {
			console.log(
				`O email ${email} já está sendo utilizado por outro usuário!`
			);
		}
	}

	static searchByUser(email) {
		const searchResult = this.#userList.filter((user) => {
			return user.email == email;
		});

		return searchResult;
		
	}

	static deposit(email, amount) {
		const user = App.searchByUser(email);
		user.account.newDeposit(amount);
	}

	static transfer(email, forUser, amount) {
		const user = App.searchByUser(email);
		user.account.newTransfer(user, forUser, amount);
	}

	static loan(email, loanAmount, loanInstallments) {
		const user = App.searchByUser(email);
		user.account.newLoan(loanAmount, loanInstallments);
	}

	static loanRate(percentageToRate) {
		/*const user = App.searchByUser(email);
        user.newLoan(loanAmount, loanInstallments);*/

		const newRate = new Loan();
		newRate.setInterestRate(percentageToRate);
	}
}

