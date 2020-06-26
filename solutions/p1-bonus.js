// Problem 1: Solution with Reduce Iterator
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 // Reduce function goes here instead of the ???
 let sumT= numbers.reduce(sum,0);

 function sum(total,num)
 {
     return total+num;
 }
console.log('sum = ' + sumT);
