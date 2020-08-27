//Iteration #1: Find the maximum
function maxOfTwoNumbers(value1, value2){
  return  value1 > value2 ?  value1 :  value2;
};
console.log("Iteration 1: result => " + maxOfTwoNumbers(4,15));

//Iteration #2: Find the longest word
const words = [ 'mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(word){
    let longestWord = "";
    for(let i=0; i < word.length; i++){
         if ( word[i].length > longestWord.length ) {
            longestWord = word[i];
         }
    }
    return longestWord;
};
console.log("Iteration 2: result => " + findLongestWord(words));

//Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers){
    var calcNum = 0;
    for (let i = 0; i < numbers.length; i++) {
        calcNum += numbers[i];       
    }
    return calcNum;
};
console.log("Iteration 3: result => " + sumNumbers(numbers));

//Bonus - Iteration #3.1: A generic sum() function
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(numbers){
    var calcNum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(typeof numbers[i] === "string"){
            calcNum += numbers[i].length;
        } else if(typeof numbers[i] === "boolean"){
            calcNum += Number(numbers[i]);
        }
        else {
            calcNum += numbers[i];
        }           
    }
    return calcNum;
};
console.log("Iteration 3.1: result => " + sum(mixedArr));

//Iteration #4: Calculate the average
    //Level 1: Array of numbers
const numbers4 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num){
    let denom = num.length;
    let numerator = sumNumbers(num);
  
    return numerator / denom;
};
console.log("Iteration 4 - 1: result => " + averageNumbers(numbers4));

    //Level 2: Array of strings
const words4 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(word){
    let denom = word.length;
    let numerator = 0;

    for(var i = 0; i < word[i].length; i++){
        numerator += word[i].length;        
    }
    return numerator / denom;
};
console.log("Iteration 4 - 2: result => " + averageWordLength(words4));

//Bonus - Iteration #4.1: A generic avg() function
function avg(arr){
    let denom = arr.length;
    let numerator = sum(arr);
    
    return numerator / denom;
};
console.log("Iteration 4.1: result => " + avg(mixedArr));

//Iteration #5: Unique arrays
const words5 = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];

function uniquifyArray(words){
    let newWords = [];
    for(var i=0; i < words.length; i++){
        if (newWords.indexOf(words[i]) < 0){
            newWords.push(words[i]);
        }
    }
    return newWords;
};
console.log("Iteration 5: result => " + uniquifyArray(words5));

//Iteration #6: Find elements
const words6 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word){
    for(var i=0; i < arr.length; i++){
       if(arr[i] == word){
           return true;
       } 
    }
    return false;
};
console.log("Iteration 6: result => " + doesWordExist(words6, "eating"));

//Iteration #6: Find elements
const words7 = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
];

function howManyTimes(arr, word){
    let numOfTime = 0;
    for(var i=0; i < arr.length; i++){
        if(arr[i] == word){
            numOfTime++;
       } 
    }
    return numOfTime;
};
console.log("Iteration 7: result => " + howManyTimes(words7, "matter"));
