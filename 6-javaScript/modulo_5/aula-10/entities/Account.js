const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");

class Account {
	#balance = 0;
	constructor() {
		this.#balance;
		this.allDeposits = [];
		this.allLoans = [];
		this.allTransfer = [];
	}

	get checkBalance() {
		return this.#balance;
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
		this.#balance += depositAmount;
	}

	newLoan(loanAmount, loanInstallments) {
		const loanDate = Account.currentDate();

		const loan = new Loan(loanAmount, loanDate, loanInstallments);
		this.allLoans.push(loan);
		this.#balance += loanAmount;
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

		if (forUser) {
			this.#balance += amountTransfer;
		} else if (fromUser) {
			this.#balance -= amountTransfer;
		} else {
			console.log(console.error("a transferencia falhou!"));
		}
	}
}

const luiz = new Account();
console.log(luiz);

luiz.newDeposit(3);

luiz.newLoan(10, 2);

const checkBalance = luiz.checkBalance;
console.log(checkBalance);
console.log(luiz);
