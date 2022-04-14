
/*

//Codewars JS 8kyu

multiply = (a, b)=> a * b;

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(num){
   return num % 2 === 0 ? 'even' : 'odd'
}

evenOrOdd(20)

//refactored with arrow function




const evenOrOdd = n => (n % 2 === 0) ? 'even' : 'odd'

//Very simple, given an integer or a floating-point number, find its opposite.

function oppositeNumber(num){
    return num * (-1)
}

oppositeNumber(10)

//refactored with arrow function

const oppositeNumber= num =>num *(-1)




//We need a function that can transform a number into a string.

numToString(num){
    return num.toString();
}

numToString(10)

//refactored with arrow function

const numToString = num => num.toString()



//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

yesOrNo(bool){
    return bool ? 'yes' : 'no'
}

yesOrNo(true)

//refactored with arrow function

const yesOrNo = bool => bool ? 'Yes' : 'no'


//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'
//'word'   =>  'drow'

reverseStr(str){
    return str.split('').reverse().join('')
}

reverseStr('world')

//refactored wtih arrow function

const reverseStr = str => str.split('').reverse().join('')


//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.

function positiveSum (arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
  }




  function positiveSum(arr){

    //the filter method is creating a new arr that's made up of nums that are not neg (aka greater than 0)
    //the reduce method is summing the arr numbers together with the acc and c starting at 0
      return arr.filter(x => x > 0 ).reduce((a,c)=> a + c, 0);
  }

  //refactored using the arrow function and terinary operator
  const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
//declaring the var that will hold the function using const; we use the reduce method to start the summing, coupled wiht
//the terinary operator inside the reduce method staing if n aka c is greater than 0 sum it together otherwise sum  : all of this starting at 0
  const positiveSum = (arr) => arr.reduce((sum, n)=> n > 0 ? sum + num : sum, 0)


  //In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//you can make a number negative by putting - in front of num 
//remember you can tell if a num is negative by saying greater than 0

function makeNegative(num) {
    return num < 0 ? num : -num;
  }


  function makeNegative(num){
      return num < 0 ? num: -num 
  }

//refactored with the arrow function
//use const to create a variable called makeNegative
// num is the parameter; if num is less than 0 return num else return negative num
  const makeNegative= num => num < 0 ? num: -num 



//  Write a function called repeatStr which repeats the given string string exactly n times.

//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"



function repeatStr(n, s){
    //s is the str we're passing in
    //n is the amt of times the str will repeat
    //the repeat() method repeats the str passed in
    return s.repeat(n)
}

repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//refactored with arrow function
//declar var called repeatStr which holds our function
//the paras n & s go in ( ) since there's 2 paras arrows saying return our string repeated n number of times

const repeatStr= (n, s)=> s.repeat(n)


//It's pretty straightforward. Your goal is to create a
// function that removes the first and last characters of 
//a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

removeFirstLast(str){
    //method to removes characters from str 
    //slice() is starting at the first index of the str and starting the slice going all the way to the last index of the str 
    //thing of slice as taking a slice of cake with edges for that slice starting at the first and last index you declare
    return str.slice(1, -1)
}

removeFirstLast(str)


//refactored with arrow function

const removeFirstLast = str => str.slice(-1, 1)



Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.


const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = arr.reduce((a, b) => Math.min(a, b))
console.log(min)


//we can use reduce to grab every element of the arr and iterate
//through the arr, it'll take ea arr and we can apply Math.min(a,b)
//to get the min num out of the arr

const min= arr.reduce((a,b)=> Math.min(a,b))

//returning the smallest num in an arr is also a good use case for .sort()

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }


  return arg.sort((a,b)=> a-b)[0]



  //Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//we are passing in an arr
//we need to square every num in the arr so we could use map to create a new arr
//in map we square every num
//then we use reduce to add all the nums togeter
//map creates a new array, in this example below we use map to create a new arr by declaring a var = with the old array name.map
//inside the map method we are doing Math.sqrt which squares every number of the new arr


/*   NOT suure if this works need to test it
function numsSquared(arr){
let newArr= arr.map(Math.sqrt)
newArr = newArr.reduce((acc, c)=> acc + c, 0)
}


numsSquared(arr)


const numsSquared = arr => Math.sqrt(arr).reduce((acc, c)=> acc + c, 0)

//we use reduce to sum all the nums together we then do b * b inside the reduce after the sum to get the square

const squareSum = nums => nums.reduce((acc, c)=> a + b * b, 0)



//Simple, remove the spaces from the string, then return the resultant string.

function removeSpace(str){
    return str.trim()
}

removeSpace('  white spaces   ')

//refactored with arrow function

const removeSpace = str => str.trim()

/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined  



//take in an array
//return num of trues in the array

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

//solution using forEach method

  function countSheeps(arrayOfSheep) {
    var count = 0;
    
    arrayOfSheep.forEach( function (sheep) {
      if (sheep)
        count++;
    });
    
/*

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F



function abreviateName(name){
    return(
        name
        //split the name into two words by using the method .split(" ") we put a space inbetween " " to split on the words themselves so we get 2 words back
        .split(" ") //our name is now split ex "John" "Henry"

        //we then need to use map ( ) to create an array of the string so we can target the index of each item, in this case we're targeting the first letter which is at index 0
        //we're using the variable part to represent the array name
        //we're using an arrow function to return the new arr called part which returns the item at index 0 and performs toUpperCase( ) on it to uppercase the letter
        .map((part) => part.[0].toUpperCase())

        //we now need to join the arr back together with a . inbetween and turn it back into a string so we're using .join(".")
        .join(".")
    );
}



//rewritten with arrow function 
  const abbrevName = name => name.split(" ").map((part)=>part[0].toUpperCase()).join(".")




//Make a function that will return a greeting statement 
//that uses an input; your program should return, "Hello, <name> how are you doing today?".


//return greeting template literal `hello ${name} how are you doing today

function returnGreeting(name){
    return `Hello, ${name} how are you doing today?`
}


returnGreeting('james')

//refactored with arrow function
const returnGreeting = name => `Hello ${name} how are you today?`



/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" (in COBOL "found the needle at position 6")


//
function findNeedle(haystack){

    return 'found the needle at position ' + haystack.findIndex((s) => s == 'needle');
}



//Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

//Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.


function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
     if(name === 'Santa Claus' && password ==='Ho Ho Ho!'){
        return true
    }else{
        return false
    }
};


//codewars other answers
function Sleigh() {
    this.name = "Santa Claus";
    this.password = "Ho Ho Ho!";
  }
  
  Sleigh.prototype.authenticate = function(name, password) {
    return this.name == name && this.password == password;
  };



  /*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

//we take the input and turn it into an array : let array = String(n)
//we take the array and split it on each input 
//we use a while loop to iterate through the array using .length - 1 to iterate through the entire array 
//set the while loop == to 0 so we can target all the 0s 
//we then do .pop() to pop all the zeros off the array
//we then return the array, wrap it in Number to ensure its returning a Number value and use .join('') to join the values back together back into a number instead of an array


  function noBoringZeros(n){
      let array= String(n).split('')
      while (array[array.length-1]== 0){
          array.pop()
      }
      return Number(array.join(''))
  }


  //Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5



function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0){
      return true
    }else{
      return false
    }
  }


  //Refactored wtih terinary operator
  function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
  }


 // Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

  var summation = function (num) {
    let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

//rewritten with arrow function

const summation = n => n * (n + 1) / 2;
 


Write a function that takes an array of words and smashes 
them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, 
but you should add spaces between each word. Be careful, there 
shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'  


let arr= ['hello', 'world', 'this', 'is', 'great']

//break the array into individual words with .split(" ") make sure there's a space in the para to target the entire word
// join the words back together to make a sentence out of the individual elements using .join(" ") again make sure to include a space
//make sure there's no spaces at the beginning or end by using .trim()


function sentenceSmash(arr){
   

sentenceSmash(['hello', 'world', 'this', 'is', 'great'])




Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'





function personalizedGreeting(name, owner){
  if(name === owner){
    return 'Hello boss'
  }else{
    return 'Hello guest'
  }
}



Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"


function areYouPlayingBanjo(name){
  if(name.startsWith('R') || name.startsWith('r')){
    return (name + "plays banjo")
  }else{
    return 
  }
}

 Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]


step 1// go through each number in the array using map() to create a new array
step 2// multiply each number by -1
step 3 // return the new array
*/

function invert(array){
  return array.map(num =>{
    return num * 1
  })
}

//rewritten with arrow function
const invert = array => array.map(num => -num);

