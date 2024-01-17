const accountID = 144553
let accountEmail = "indra@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

//accountID = 2  //not allowed

accountEmail = "ias@gmail.com"
accountPassword = "1212121"
accountCity = "Pune"

console.log(accountID);

/*
prefer not to use "var"
because of issues in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])