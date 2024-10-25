module.exports = class Transfer {
	constructor(fromUser, forUser, amountTransfer, dateTransfer) {
		this.fromUser = fromUser;
		this.forUser = forUser;
		this.amountTransfer = amountTransfer;
		this.dateTransfer = dateTransfer;
	}
};
