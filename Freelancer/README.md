<<<<<<< HEAD
# Time Tracking Application for Freelancers

This project is a simple JavaScript program designed to analyze weekly work hours for freelancers. It calculates key metrics to provide insights into their work patterns and help them understand their productivity.

# Features
The application takes an array of daily work hours for a week (7 days) and returns the following:
Total Hours Worked: The sum of all hours worked during the week.
Average Daily Hours: The average number of hours worked per day.
Day with the Most Hours Worked: The day with the maximum number of hours worked.
Number of Days Worked: The total number of days when work hours were recorded.
Full-Time or Part-Time Week: Whether the total hours worked meet or exceed 35 hours (full-time), or fall below it (part-time).

Test Data
Sample input:
[7.5, 8, 6.5, 0, 8.5, 4, 0]


# Solution

const weekWorkHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const freelancersData = function (weekWorkHours) {
  let totalHoursWorked = 0;
  for (let i = 0; i < weekWorkHours.length; i++) {
    totalHoursWorked += weekWorkHours[i];
  }
  return totalHoursWorked;
};

const totalHoursWorked = freelancersData(weekWorkHours);
const averageDailyHours = totalHoursWorked / weekWorkHours.length;

let dayMaxHours = 0;
weekWorkHours.forEach(hour => {
  if (hour > dayMaxHours) {
    dayMaxHours = hour;
  }
});

const fullTime = function (totalHoursWorked) {
  return totalHoursWorked >= 35 ? "Full-time" : "Part-time";
};

let workStatus = fullTime(totalHoursWorked);
let numberOfDaysWorked = weekWorkHours.filter(day => day > 0).length;

console.log(totalHoursWorked, averageDailyHours, dayMaxHours, numberOfDaysWorked, workStatus);


=======
# Time Tracking Application for Freelancers

This project is a simple JavaScript program designed to analyze weekly work hours for freelancers. It calculates key metrics to provide insights into their work patterns and help them understand their productivity.

# Features
The application takes an array of daily work hours for a week (7 days) and returns the following:
Total Hours Worked: The sum of all hours worked during the week.
Average Daily Hours: The average number of hours worked per day.
Day with the Most Hours Worked: The day with the maximum number of hours worked.
Number of Days Worked: The total number of days when work hours were recorded.
Full-Time or Part-Time Week: Whether the total hours worked meet or exceed 35 hours (full-time), or fall below it (part-time).

Test Data
Sample input:
[7.5, 8, 6.5, 0, 8.5, 4, 0]


# Solution

const weekWorkHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const freelancersData = function (weekWorkHours) {
  let totalHoursWorked = 0;
  for (let i = 0; i < weekWorkHours.length; i++) {
    totalHoursWorked += weekWorkHours[i];
  }
  return totalHoursWorked;
};

const totalHoursWorked = freelancersData(weekWorkHours);
const averageDailyHours = totalHoursWorked / weekWorkHours.length;

let dayMaxHours = 0;
weekWorkHours.forEach(hour => {
  if (hour > dayMaxHours) {
    dayMaxHours = hour;
  }
});

const fullTime = function (totalHoursWorked) {
  return totalHoursWorked >= 35 ? "Full-time" : "Part-time";
};

let workStatus = fullTime(totalHoursWorked);
let numberOfDaysWorked = weekWorkHours.filter(day => day > 0).length;

console.log(totalHoursWorked, averageDailyHours, dayMaxHours, numberOfDaysWorked, workStatus);


>>>>>>> 21b659615258c96489479e44adaec01be9342d39
