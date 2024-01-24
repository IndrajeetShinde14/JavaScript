const myArr = [0, 1, 2, 3, 4]
const myHeros = ["Iron-Man", "Spiderman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[3]);


// Array Methos

// myArr.push(6)          // adds an element in last position
// myArr.push(7)          // adds an element in last position
// myArr.pop()            // removes an element from last position

// myArr.unshift(5)       // adds an elememt in 0th place
// myArr.shift()          // removes an element from 0th place


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()      // join() converts array into string when you print newArr


// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



// Slice and Splice    // when splice is used it changes array while slice doesn't

console.log("A", myArr);


const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)

console.log(myn2);

console.log("C", myArr);