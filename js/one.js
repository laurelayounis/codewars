

//Codewars JS 8kyu

multiply = (a, b)=> a * b;

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(num){
   return num % 2 === 0 ? 'even' : 'odd'
}

evenOrOdd(20)

//refactored with arrow function




const evenOrOdd = n => (n % 2 === 0) ? 'even' : 'odd'