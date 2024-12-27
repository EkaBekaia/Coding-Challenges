# Smart Home Thermometer - Weather Forecast Generator

# Problem: Generate a Weather Forecast
We are tasked with generating a weather forecast string based on an array of temperatures for the next few days. Each temperature corresponds to the forecast for a specific day. We need to format the forecast into a readable string that shows each day's temperature along with its corresponding day number (index + 1). The string should be separated by "..." at the start, between each element, and at the end.

# Problem Description
Given an array of temperatures recorded for the next few days, create a string where each element of the array is formatted as "X°C in Y days", where X is the temperature, and Y is the day number (index + 1). The forecast should include "..." between each element and at the start and end of the string- "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

// TEST DATA 1: [17,21,23]
// TEST DATA 2: [12,5,-5,0,4]


# Solution

const printForecast = function (arr) {
    const dot = "...";
    let outcome = dot;
    
    for (let i = 0; i < arr.length; i++) {
        outcome += `${arr[i]}°C in ${i + 1} days ${dot}  `;
    }
    
    return outcome;
};

let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

console.log(printForecast(arr1));  // Output: "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."
console.log(printForecast(arr2));  // Output: "... 12°C in 1 days ... 5°C in 2 days ... -5°C in 3 days ... 0°C in 4 days ... 4°C in 5 days ..."



