//variable are containers for data
//var | Let | Const
//var -> global | re-assign | kahin bhi access krlo

//Let- local -> re-assign | access sirf khud k block k ander

//Const -> Local | not re-assign | access only in their block

const accountId = 13456
let emailId = "swatirawat12@gmail.com"
var accountPassword = "23455"
accountCity = "Dehradun"
let accountstate;

//accountId = 2
//console.log(accountId) //error because const will be always constant, we can not change the value if it is in const

emailId = "swatirawat@45"
accountPassword = "4567"
accountCity = "Dehli"

//console.log(emailId)
/*
 note ->   prefer not to use var,
    because of issue in block scope and functional scope.
*/

console.table([accountId, emailId, accountPassword, accountCity, accountstate])



