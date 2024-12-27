// Problem #1
// Given an array of forcasted maximum temperature, the thermometer displays the string with this temperatures
// Example : [17, 21, 23] will print "... 17 C in 1 days...21 C in 2 days...23 C in 3 days..."

// Create a function 'printforecast' which takes in an array arr and logs the string like above to the console

// TEST DATA 1: [17,21,23]
// TEST DATA 2: [12, 5, -5, 0, 4]


// 1) Understand the problem
// Array is transpered to string separated by ...
// Where numbers 1, 2, 3 are coming from? Answer: this is coming from arrray index +1

// 2) Breaking into sub-problems
// Transport array to string
// Transporm element to string with Celsius
// String needs to contain day number (index+1)
// Add ... between elements, at start and end of strings 

const printForecast = function (arr) {
    const dot ="...";
    let outcome = dot;
    for (let i=0; i<arr.length; i++) {
        outcome +=     `${arr[i]}°C in ${i+1} days ${dot}  `;
          }
        return outcome;
};
let arr1 = [17,21,23];
let arr2= [12, 5, -5, 0, 4];
console.log(printForecast(arr1));
console.log(printForecast(arr2));



