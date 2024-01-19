const name = "Indar"
const repoCount = 2

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("indar-as")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('d'));


const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-7, 4)
console.log(anotherString);


const newStringOne = "   indra   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ias%20work.com"
console.log(url.replace('%20', '-'));


console.log(gameName.includes('shinde'));
console.log(gameName.split('-'));