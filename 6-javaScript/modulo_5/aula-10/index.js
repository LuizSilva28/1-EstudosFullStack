const App = require("./entities/App");





const luiz = App.createNewUser("luiz", "luiz@gmail.com");
const juliana = App.createNewUser("juliana", "juliana@gmail.com");

//Manipulação da conta Luiz
luiz.account.newDeposit(400);
luiz.account.newTransfer(luiz, juliana, 100);
luiz.account.newLoan(1000, 5);

console.table(luiz);
console.log(`saldo de ${luiz.userName}: `, luiz.account.checkBalance);

const luizAccount = luiz.account;

const luizAllLoans = luizAccount.allLoans[0];

console.table(luizAllLoans.listInstallment);

//Manipulação da conta Juliana
juliana.account.newDeposit(1500);
juliana.account.newTransfer(juliana, luiz, 600);

console.table(juliana);

const julianaBalance = juliana.account.checkBalance;
console.log(`saldo de ${juliana.userName}`, julianaBalance);

const carlos = App.createNewUser("carlos", "luiz@gmail.com");
console.table(carlos);

console.log(`saldo de ${luiz.userName}: `, luiz.account.checkBalance);
console.log(`saldo de ${juliana.userName}`, julianaBalance);

