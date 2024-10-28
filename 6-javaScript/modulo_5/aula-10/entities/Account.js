const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");

module.exports = class Account {
	#balance = 0;
	#accountOwner = null;
	constructor() {
		this.#balance = 0;
		this.#accountOwner;
		this.allDeposits = [];
		this.allLoans = [];
		this.allTransfer = [];
	}

	accountOwner(user) {
		this.#accountOwner = user;
	}

	get checkBalance() {
		return this.#balance;
	}

	updateBalance(verification, amount) {
		if (verification) {
			this.#balance += amount;
		} else {
			this.#balance -= amount;
		}
	}

	static currentDate() {
		const currentDate = new Date();
		const day = currentDate.getDate();
		const month = currentDate.getMonth() + 1;
		const year = currentDate.getFullYear();
		const fullDate = `${day}/${month}/${year}`;

		return fullDate;
	}

	newDeposit(depositAmount) {
		const depositDate = Account.currentDate();
		const deposit = new Deposit(depositAmount, depositDate);
		this.allDeposits.push(deposit);
		this.updateBalance(true, depositAmount);
	}

	newLoan(loanAmount, loanInstallments) {
		const loanDate = Account.currentDate();

		const loan = new Loan(loanAmount, loanDate, loanInstallments);
		this.allLoans.push(loan);
		this.updateBalance(true, loanAmount);
	}

	newTransfer(fromUser, forUser, amountTransfer) {
		const dateTransfer = Account.currentDate();
		const transfer = new Transfer(
			fromUser,
			forUser,
			amountTransfer,
			dateTransfer
		);

		this.allTransfer.push(transfer);

		if (fromUser === this.#accountOwner) {
			this.updateBalance(false, amountTransfer);
			forUser.account.updateBalance(true, amountTransfer);
		} else if (forUser === this.#accountOwner) {
			this.updateBalance(true, amountTransfer);
		} else {
			console.log(console.error("a transferencia falhou!"));
		}
	}
};
