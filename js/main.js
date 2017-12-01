//First section generates a random number between 0 and 100.

console.log(Math.floor(Math.random() * 100) + 1);

/* More Advanced Generator

Takes user input for range: min and max

Generates a number between min and max

*/
function getRandomNumber(lower, upper) {
  
// Test to make sure lower and upper are numbers
  if (isNaN(lower) || isNaN(upper)) {
      throw new Error('One of the inputed values is not a number');
  }
  
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
