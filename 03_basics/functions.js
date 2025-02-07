function myName(){
    console.log("S")
    console.log("W")
    console.log("A")
    console.log("T")
    console.log("I")

}
//myName();


// function addTwoNumber(nums1, nums2){
//     console.log(nums1 + nums2)
// }
// //addTwoNumber();

// const result = addTwoNumber(6,7);
// console.log("result : ", result);

function addTwoNumber(nums1, nums2){
    return nums1 + nums2
}
//addTwoNumber();

const result = addTwoNumber(6,7);
//console.log("result : ", result)



function loginUserMessage(username){
    //if(username === undefined){
    if(!username){
        console.log("Please enter the name")

    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("swati"));
//if i didn't pass the argument, we will get the undefined 

function calculatorCartPrice(...nums1){ //here is 3 dots are called rest not a spread
    return nums1

}
//console.log(calculatorCartPrice(200, 300, 400))


// const user = {
//     username : "swati",
//     prices : 199
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue([200, 400, 500, 100]))