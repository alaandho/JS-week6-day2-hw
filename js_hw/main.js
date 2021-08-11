//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};
console.log(person3.pizza)
console.log(person3.tacos)
console.log(person3.burgers)
console.log(person3.ice_cream)
console.log(person3.shakes)




//=======Exercise #2=========//
/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
// Create our Person Prototype/Class
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo = () => {
        return `Name: ${this.name} \n Age: ${this.age}`
    }
    addAge = () => {
        return this.age +=1
    }
};

let dave = new Human('Dave', 30);
console.log(dave.printInfo())
console.log(dave.addAge())

let moose = new Human('Moose', 4);
console.log(moose.printInfo())
console.log(moose.addAge())
console.log(moose.addAge())
console.log(moose.addAge())




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"

// if length > 10
console.log("Big word")

//if length str < 10
console.log("Small number")

*/ 

let myString = "Create a Promised based function";
let myCount = myString.length;

let myPromise = new Promise((resolve, reject) => {
    if (myCount > 10) {
        resolve("Big word")}
    else {
        reject("Small Number")
    }
})
console.log(myPromise)

myPromise.then( (message) => { //return from resolution
    console.log(message)
})
.catch( (message) => {
    console.log(message)
})




//codewars 1: Reversed Strings
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
function solution(str){
    return str.split('').reverse().join('')
};


//codewars 2: Remove First and Last Character
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
function removeChar(str){
    return str.slice(1, -1)
};