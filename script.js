// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10


const min = function (x, y) {
    if (x > y) {
        return y;
    } else {
        return x;
    }

}
console.log(min(0, 10)); // 0
console.log(min(0, -10)); // -10
console.log(min(18273817313, 1)); // 1

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

const calculateCircumference = function (radius) {
    const pi = 3.14;
    let circumference = 2 * pi * radius;
    return circumference;
}

console.log(calculateCircumference(5)); // 31.4
console.log(calculateCircumference(12)); // 75.36


// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0


const searchString = function (letter, string) {
    let count = 0;
    for (let n = 0; n < string.length; n++) {
        if (string[n] === letter) {
            count++
        }
    }
    return count;
}


console.log(searchString('e', "Kyle")); // 1
console.log(searchString("s", "mississippi")); // 4
console.log(searchString("l", "Allie"));
    

