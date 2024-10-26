module.exports = class Loan {
	static #interestRate = 0.05;

	constructor(loanAmount, dateLoan, loanInstallments) {
		this.loanAmount = loanAmount;
		this.dateLoan = dateLoan;
		this.loanInstallments = loanInstallments;
	}

	static get getInterestRate() {
		return Loan.#interestRate;
	}

	static set setInterestRate(percentageToRate) {
		return (Loan.#interestRate = percentageToRate / 100);
	}
}

/*
const loan = new Loan(0.05, 10000, new Date(), 12);

console.log(loan);

const interestRate = Loan.interestRate;

console.log(interestRate); 
*/
