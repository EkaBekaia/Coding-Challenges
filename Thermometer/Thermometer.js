// Problem #1
// We work for company who makes smart home thermometers. 
// Our task is to calculate temperature amplitude based on temp. array
// of one day. Sometimes there ight be temperature error. 

const temperatures =[3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// 1) Understand the problem
// What is tempreture amplitude? Answer: difference between higher and lowes temp
// How to compute max and min temp?
// What's a sensor error ? What to do with it? ignore it

// 2) Breaking into sub-problems
// how to ingonre errors?
// find the max value
// find the min value
// calculate the amplitude and return it

const calcTempAmplitude = function (temps) {
    let max = temps [0];
    let min = temps [0];
    for (let i=0; i<temps.length; i++) {
        if (typeof temps [i] !=='number') continue;
        if (temps[i] > max) max= temps [i];
        if (temps[i] < min) min= temps [i];
    }
console.log (max, min);
return max-min;
};

const amplitude= calcTempAmplitude (temperatures);
console.log (amplitude);

// Problem 2 
// Now we need to use data from 2 arrays

// 1. Understand the problem
// Do we need to create same fucntionality twice? Answer: no , we can simply 
//merge two arrays

// 2. Breakdown into sub-problems
// How to merge two arrays?


const calcTempAmplitudeNew = function (t1, t2) {
       const temps = t1.concat(t2);
       console.log (temps);


    let max = temps [0];
    let min = temps [0];
    for (let i=0; i<temps.length; i++) {
        if (typeof temps [i] !=='number') continue;
        if (temps[i] > max) max= temps [i];
        if (temps[i] < min) min= temps [i];
    }
console.log (max, min);
return max-min;
};

const amplitudeNew= calcTempAmplitudeNew ([23,2,19,6,40,22,26],[32,45,27,24,2,23,5]);
console.log (amplitudeNew);



