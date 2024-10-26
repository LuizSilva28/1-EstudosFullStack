const Account = require("./entities/Account");
const Deposit = require("./entities/Deposit");
const Loan = require("./entities/Loan");
const User = require("./entities/User");

module.exports = class App {
	static #userList = [];

	static createNewUser(userName, email) {
		const exists = App.searchByUser(email);
		if (exists === false) {
			const user = new User(userName, email, account);
			const account = new Account(user);
		} else if (exists === true) {
			console.log(
				"Este email já está sendo utilizado por outro usuário!"
			);
		}
	}

	static searchByUser(email) {
		const searchResult = this.#userList.filter((user) => {
			return user?.email == email;
		});

		return searchResult;
		/*
            const searchResult = users.filter(checkEmail);
            function checkEmail(user) {
                const userEmail = "douglas@gmail.com";
	            return user?.email === userEmail;
            }
            console.log(searchResult);
        */
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

	static loanRate( percentageToRate) {
        /*const user = App.searchByUser(email);
        user.newLoan(loanAmount, loanInstallments);*/
        
		const newRate = new Loan();
		newRate.setInterestRate(percentageToRate);
	}
};
