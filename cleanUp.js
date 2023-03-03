// // // Each example below has at least one opportunity for improvement.

// // // YOUR TASK:
// //   // Modify the code to make that improvement(s)
// //   // write a JS comment to explain what you changed, and why
// //   // make sure the code you submit WORKS - you can run this entire file 
// //     // using `node cleanUp.js` or copy and paste into a replit


// // EX 1:
function askForName(){
   return("Hello, what is your name?"); 
}
console.log(askForName());

// // Cleaned up the spacing and added a return statement to output the question "Hello, what is your name?" when the function is called in the console.log. 
// Removed console.log from the function code block.

// // // EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
 }
console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));


// // Adjusted a few spacing issues. 
// Added console.logs to call the function


// // EX 3:
function makeFreshPesto(){
  var pestoDirections = [
    "Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper",
    "Pulse basil and pine nuts",
    "Add garlic and cheeses",
    "Slowly pour in oil",
    "Season"
  ]
  for (var i = 0; i < pestoDirections.length; i ++) {
    console.log(pestoDirections[i])
  }
}

makeFreshPesto();

// Removed unneccessary console.logs for each step and added a for statement. 
// Added a string array.


//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;

  return avg;
}
console.log(average(23, 72))

// Added a console.log to call the function average. 
// Fixed spacing issues.