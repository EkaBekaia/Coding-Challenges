# coding-challenges

Coding challanges for practice

# Smart Home Thermometer - Temperature Amplitude Calculator

## Problem #1: Calculate Temperature Amplitude

We work for a company that builds smart home thermometers. Our task is to calculate the temperature amplitude based on an array of temperatures for one day. Sometimes there might be sensor errors that we need to ignore.

### Problem Description

Given an array of temperatures recorded over one day, calculate the temperature amplitude (the difference between the highest and lowest temperatures). Ignore non-numeric values (sensor errors).

### Solution

```javascript
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
```
