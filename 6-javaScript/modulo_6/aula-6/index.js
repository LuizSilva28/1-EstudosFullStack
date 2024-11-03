//const form = document.getElementById("form");

const bnt = document.querySelector("#bnt-1");
console.log(bnt);
const listUser = [];
const user = {
	name: name,
	email: email,
	password: password, 
};

bnt.addEventListener("click", function (ev) {
	ev.preventDefault();
	const nameInput = document.querySelector("#name").value;
	const emailInput = document.getElementById("email").value;
	const userPassword = document.getElementById("password").value;
	try {
		console.log(`email: ${emailInput}`);
		console.log(`senha: ${userPassword}`);
		ValidateEmail(emailInput);
		ValidatePassword(userPassword);
	} catch (error) {
		console.log("O formato da senha/email está incorreta");
		console.log(error);
	}
});

function ValidateEmail(email) {
	console.log(email);
	const emailChecked = email.match(/..{2,}@\w{2,}\.\w{2,}/g);

	const validEmail = `${emailChecked}`;
	if (validEmail === email) {
		console.log(`O ${email} é valido!`);
		return validEmail;
	} else if (validEmail !== email) {
		console.log(`O ${email} é invalido!`);
	}
}

function ValidatePassword(myPassword) {
	const password = myPassword.replace(/[\s]/);
	const size = password.match(/.{8,}/)[0];
	const numbers = password.match(/\d{1,}/g)[0];
	const lowerCaseCharacters = password.match(/[a-z]/g)[0];
	const uppercaseCharacters = password.match(/[A-Z]/g)[0];
	const specialCharacters = password.match(/\W{1,}/g)[0];
	if (
		size &&
		numbers &&
		lowerCaseCharacters &&
		uppercaseCharacters &&
		specialCharacters
	) {
		console.log(`A senha ${password} é valida!`);
		return password;
	} else if (validEmail !== email) {
		console.log(`A senha ${password} é invalida!`);
	}
}
