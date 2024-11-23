const name = "Akshay" // name variable hai "Akshay" variable ki value use hum string bolte hai kuy ki vo double codes me hai""...
const repoCount = 50

// console.log(name + repoCount + " Value"); //outdeted code mtlb ye code se output ayega pr ye accha nahi hai

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// backtic ko use krna ye accha syntax hota hai...

const gameName = new String('Akshay-ap-com')

// console.log(gameName[0]);// output A
// console.log(gameName.__proto__);


// console.log(gameName.length);//
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //output s
console.log(gameName.indexOf('s')); //output 2

const newString = gameName.substring(0, 4) //output Aksh
console.log(newString); 

const anotherString = gameName.slice(-8, 4) //output hskA
console.log(anotherString);

const newStringOne = "   Akshay    "
console.log(newStringOne); //output    Akshay starting spases and ending spaceses are also included
console.log(newStringOne.trim()); //output Akshay space trim ho jata hai...

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));