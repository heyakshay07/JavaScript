const accountId = 144553
let accountEmail = "akshay@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed because of const doesn't change


accountEmail = "ap@ap.com"
accountPassword = "21212121"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])