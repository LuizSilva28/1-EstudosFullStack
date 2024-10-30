function PhoneNumber(phoneNumberString) {
	const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "");
	this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
    this.ddd = fixedString.match(/((?<=\()\d+(?=\)))/)[0];
    this.number = fixedString.match(/(?<=\)).+/)[0]//após [0].replace(/-/g, "") isso para excluir os - traços do numero de telefone
}

console.log(new PhoneNumber("+55 (22) 9 9823-4576"));
console.log(new PhoneNumber("+1 (66) 9 aa233-457-8960"));
