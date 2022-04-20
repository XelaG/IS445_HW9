const { Account } = require("./accounting");

const myAccount = new Account('Alex');
myAccount.credit(150);
console.log(myAccount.describe());