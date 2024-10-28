const Installments = require("./Installments");

module.exports = class Loan {
	static #interestRate = 0.05;

	constructor(loanAmount, dateLoan, numbersOfLoanInstallments) {
		this.loanAmount = loanAmount;
		this.dateLoan = dateLoan;
		this.numbersOfLoanInstallments = numbersOfLoanInstallments;
		this.listInstallment = [];
		this.applyInterestRate();
		this.loanInstallments();
	}

	applyInterestRate() {
		const amountWithRate = (this.loanAmount +=
			this.loanAmount * Loan.#interestRate);
		return amountWithRate;
	}

	static get getInterestRate() {
		return Loan.#interestRate;
	}

	static set setInterestRate(percentageToRate) {
		return (Loan.#interestRate = percentageToRate / 100);
	}

	loanInstallments() {
		const amountWithRate = this.applyInterestRate();

		const amountInstallments =
			amountWithRate / this.numbersOfLoanInstallments;

		for (let i = 1; i <= this.numbersOfLoanInstallments; i++) {
			
			const Installment = new Installments(
				amountInstallments,
				i,
				false
			);

			this.listInstallment.push(Installment);
		}
	}

	 listInstallment() {
		return this.listInstallment;
	}
};

/*
const loan = new Loan(0.05, 10000, new Date(), 12);

console.log(loan);

const interestRate = Loan.interestRate;

console.log(interestRate); 
*/
