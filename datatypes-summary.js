//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt (1)null mhnje empty pura khali  2)undefine mhnje variable decalre karun value nhi dyaych)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false because values same but variable declared is not same

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {     //({}me jo bhi hota hai vo object hi hota hai...)
    name: "Akshay",  //( key value pairs)
    age: 22,
}

const myFunction = function(){ //(function ko variable me store kiya ja skta hai.. aur is line me variable hai myFunction)
    console.log("Hello world");
}

console.log(typeof anotherId); //(ye datatype batata hai...)

// https://262.ecma-international.org/5.1/#sec-11.4.3

// null ka typeof dekhoge to object ata hai...


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non-primitive)

// stack me copy hota hai aur hme output deta hai... (stack me jo bhi chnage krte hai vo as a copy hoke change hota hai...)
// heap me hame reference diya jata hai... (heap me jo bhi change krte to vo original me hi change hota hai...)

//stack
let akshayPatil = "Vaishnavi"

let mau = akshayPatil
mau = "ranu"

console.log(akshayPatil);
console.log(mau);

//Heap
let userOne = {
    email: "akshay@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ranu@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
