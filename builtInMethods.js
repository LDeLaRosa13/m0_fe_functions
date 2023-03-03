// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The includes() method is called on the string "Hello World"
// Argument includes "Hello"
// The return value is true
"Hello World".includes("Hello");

// The endsWith() method is called on the string "Hello World"
// Argument includes "Hello" 
// The return value is false
"Hello World".endsWith("Hello");

// The endWith() method is called on the string "Hello World"
// argument includes "rld"
// The return value is true
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.
var dog = "cute"
var cat = "adorable"
// .startsWith method will determine if variables assigned to strings are true or false. 
// Return value will be either true or false.
console.log(dog.startsWith ("c"));
// .toUpperCase method will make the string entirely uppercase.
console.log(cat.toUpperCase());

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.
var shoeSizes = [6, 8, 9, 11, 14];
// .pop() method removes the last element and returns the value without it
    shoeSizes.pop()
    console.log(shoeSizes)

var friends = ["Chase", "Anthony", "Stephen", "Jen", "Polly"]
// .shift() method removes the element in index position [0].
// return value is made up of the remaining index positions.
    friends.shift(0)
    console.log(friends)    
    