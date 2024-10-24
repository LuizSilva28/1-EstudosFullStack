module.exports = class Account {
	#balance;
	constructor(balance, allDeposits, allLoans, allTransfer) {
		this.#balance = balance;
		this.allDeposits = allDeposits;
		this.allLoans = allLoans;
		this.allTransfer = allTransfer;
	}

	get checkBalance() {
		return this.#balance;
	}
};
