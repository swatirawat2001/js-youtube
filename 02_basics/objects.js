//singleton

//there are two primary ways to create objects
//object literals
//object constructor

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Swati Rawat",
    "full name": "swati rawat",
    [mySym] : "mykey1",
    age : 24,
    location: "Dehradun",
    email: "rawatswati356@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

//  console.log(JsUser.email)
//  console.log(JsUser["email"])
//  console.log(JsUser[mySym])

 //change the value
 JsUser.email = "swatirawat456@gmail.com"
 //freeze
 //JsUser.email ="swatimicrosoft.com"
 //console.log(JsUser);

 //function add kese krte hain

 JsUser.greeting = function(){
    console.log("Hello JS user");

 }

 JsUser.greetingTwo = function(){
    console.log(`Hello JS useer, ${this.name}`)
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
 


