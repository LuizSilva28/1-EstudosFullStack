const users = [
	{ name: "Luiz", email: "luiz@gmail.com" },
	{ name: "Juliana", email: "juliana@gmail.com" },
	{ name: "Douglas", email: "douglas@gmail.com" },
	{ name: "Carlos", email: "Carlos@gmail.com" },
];


const searchResult = users.filter(checkEmail);

function checkEmail(user) {
    const userEmail = "douglas@gmail.com";
	return user?.email === userEmail;
}

console.log(searchResult);
