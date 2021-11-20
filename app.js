// QUESTION 1
let ages = [3,9,23,64,2,8,28,93];
// part a
console.log(ages[0] - ages[ages.length-1]);
// part b
ages.push(20);
console.log(ages[0] - ages[ages.length-1]);
// part c
var average = 0;
for(var i = 0; i < ages.length; i++) {
    average += ages[i];
}
var avg = average / ages.length;
console.log(avg);

// QUESTION 2
let names = ["Sam" , "Tommy", "Tim", "Sally", "Buck", "Bob"];
// part a
charsSum = 0;
let avarage =0;
names.forEach( (el) => {
charsSum = el.length;
avarage = charsSum/names.length;
console.log(avarage);
});
// part b
let concatName = "";
names.forEach((el) => {
    concatName += el + " ";
})
console.log(concatName);

// QUESTION 3
let arr = [3,3,2,43,2];
arr[arr.length-1];

// QUESTION 4
let arr = [3,3,2,43,2];
arr[0];

// QUESTION 5
let nameLengths = [];
for(let i=0; i<names.length; i++) {
    nameLengths[i] = names[i].length
}
let sum = 0;
for(let i=0; i<nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum);

// QUESTION 6
function foo(nameLengths) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += nameLengths[i];
    }
    console.log(result);
}
foo(nameLengths);

// QUESTION 7
function foo(word, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += word;
    }
    console.log(result);
}
foo("haseeb", 3);

// QUESTION 8
function foo(firstName, lastName) {
   let fullName = firstName + " " + lastName;
   return fullName;
}
foo("haseeb", "koofa");

// QUESTION 9
let arr = [3,3,2,43,2];
let element = 0;
function foo(arr) {
    for (let index = 0; index < arr.length; index++) {
        element += arr[index];
    }
    if(element > 100) {
        return true;
    } else {
        return false;
    }
}
function foo(arr);

// QUESTION 10 
let arr = [1,4,3,4];
let average = 0;
function foo(arr) {
    for (let index = 0; index < array.length; index++) {
        average = arr[index]/arr.length;   
    }
    return average;
}
function foo(arr);

// QUESTION 11
let arr1 = [1,4,3,4];
let arr2 = [1,43,3,4];
let average1 = 0;
let average2 = 0;
function foo(arr1,arr2) {
    for (let index = 0; index < array.length; index++) {
        average1 = arr1[index]/arr1.length;   
    }
    for (let index = 0; index < array.length; index++) {
        average2 = arr2[index]/arr2.length;   
    }
    if(average1 > average2) {
        return true
    } else {
        return false;
    }
}
function foo(arr1, arr2);


// QUESTION 12
let moneyInPocket = 23;
function willBuyDrink(arr1, arr2) {
    
    if(moneyInPocket > 10.05) {
        isHotOutside = true
    } else {
        isHotOutside =  false;
    }
    
}
willBuyDrink();

// QUESTION 13
function sq(num) { 
    num*num;
}
let number = 2;
function sq(number);
// EXPLANATION
// This function is basically do the square of the number of given 
// argument value.






