//EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([9, 20, 23, 56, 21, 9]));