<<<<<<< HEAD
//We are building time tracking application for freelancers
//We need function that receives daily work hours for a certain
//week and returns :
//1. Total hours worked
//2. Average daily hours
//3. The day with the most hours worked
//4. Number of days worked
// Whether the week was full time (worked 35 hours or more)

//TEST DATA :  [7.5, 8, 6.5, 0, 8.5, 4, 0]

// 1. UNDERSTAND THE PROBLEM
// Do I need separate functions for each formula??????
// Do I need string to sumerize the data????????
// How to calculate total hours worked? Answer: SUM data for week
// How to calc. Average daily hours? Answer : divide sum of worked hours on number of days
// --The day with the most hours worked? should it be the weekday? like Monday, Tuesday etc? Answer: create function wit Max 
// -- number of days worked? Answer: length of array
// -- was full time? - sum of week hours compare t 35 with if function

// 2. Breaking into sub-problems

const weekWorkHours= [7.5, 8, 6.5, 0, 8.5, 4, 0];

const freelancersData= function (weekWorkHours) {

    let totalHoursWorked= 0;
    for (i=0; i<weekWorkHours.length; i++) {
        totalHoursWorked += weekWorkHours[i];
    }
 return totalHoursWorked

 }

const totalHoursWorked= freelancersData(weekWorkHours);
const averageDailyHours = totalHoursWorked/weekWorkHours.length;

let dayMaxHours= 0;
weekWorkHours.forEach(hour => {
    if (hour > dayMaxHours) {
        dayMaxHours = hour; 
    }
});

const fullTime= function (totalHoursWorked) {
return totalHoursWorked>35? "fulltime" : "Parttime";
};

let fulltimes= fullTime(totalHoursWorked);
let numbersDaysWorked= weekWorkHours.length;
console.log (totalHoursWorked,averageDailyHours, dayMaxHours, numbersDaysWorked, fulltimes);

=======
//We are building time tracking application for freelancers
//We need function that receives daily work hours for a certain
//week and returns :
//1. Total hours worked
//2. Average daily hours
//3. The day with the most hours worked
//4. Number of days worked
// Whether the week was full time (worked 35 hours or more)

//TEST DATA :  [7.5, 8, 6.5, 0, 8.5, 4, 0]

// 1. UNDERSTAND THE PROBLEM
// Do I need separate functions for each formula??????
// Do I need string to sumerize the data????????
// How to calculate total hours worked? Answer: SUM data for week
// How to calc. Average daily hours? Answer : divide sum of worked hours on number of days
// --The day with the most hours worked? should it be the weekday? like Monday, Tuesday etc? Answer: create function wit Max 
// -- number of days worked? Answer: length of array
// -- was full time? - sum of week hours compare t 35 with if function

// 2. Breaking into sub-problems

const weekWorkHours= [7.5, 8, 6.5, 0, 8.5, 4, 0];

const freelancersData= function (weekWorkHours) {

    let totalHoursWorked= 0;
    for (i=0; i<weekWorkHours.length; i++) {
        totalHoursWorked += weekWorkHours[i];
    }
 return totalHoursWorked

 }

const totalHoursWorked= freelancersData(weekWorkHours);
const averageDailyHours = totalHoursWorked/weekWorkHours.length;

let dayMaxHours= 0;
weekWorkHours.forEach(hour => {
    if (hour > dayMaxHours) {
        dayMaxHours = hour; 
    }
});

const fullTime= function (totalHoursWorked) {
return totalHoursWorked>35? "fulltime" : "Parttime";
};

let fulltimes= fullTime(totalHoursWorked);
let numbersDaysWorked= weekWorkHours.length;
console.log (totalHoursWorked,averageDailyHours, dayMaxHours, numbersDaysWorked, fulltimes);

>>>>>>> 21b659615258c96489479e44adaec01be9342d39
