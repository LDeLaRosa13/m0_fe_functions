// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// // 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Welcome in!"
}
var welcome = greeting()
console.log(welcome);

// // // 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return "Hey there Anthony" 
}
var greet = customGreeting()
console.log(greet)
customGreeting();
    
// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName) {
    return "hi there lauren ann delarosa!"
}
var names = greetPerson()
console.log(names)


// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number) {
    return number * number
}
    var shape = square 
    console.log(square(28))


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(amount, item) {
    if (amount >= 4) {
    console.log(`${item} is stocked`);    
}   else if (amount >= 1) {
    console.log(`${item} is running low`); 
}   else  {
    console.log(`${item} is out of stock`);

}
}   



checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"