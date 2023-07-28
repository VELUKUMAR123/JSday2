//Assignment 1:  Write a JavaScript function that takes a number as a parameter and prints whether it's positive,negative, or zero.
function Checknumber(numbers)
{
    if(numbers ==0)
    {
        console.log("The number is Zero");
    }
    if(numbers <0)
    {
        console.log("The number is negative");
    }
    if(numbers >0)
    {
        console.log("The number is positive");
    }
}
Checknumber(0)
Checknumber(-4)
Checknumber(567)


//Assignment 2:Write a JavaScript function that takes a positive integer as a parameter and calculates itsfactorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.

function findfactorial(number) {
    if (number < 0) {
        console.log("Please give some positive numbers");
        return; // Return early if the number is negative
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial* i;
    }

    console.log(factorial); // Display the factorial after the loop is done
    return factorial; // Return the factorial value
}

findfactorial(-1);
findfactorial(5);
findfactorial(6);

//Assignment 3: Write a JavaScript function that takes two numbers as parameters and returns the larger one.
function Checknumber(a,b)
{
    if(a<b)
    {
        console.log("b is bigger");
    }
    if(a>b)
    {
        console.log("a is bigger");
    }
    if(a==b)
    {
        console.log("a and b is equal");
    }
    
}
Checknumber(2,2)
Checknumber(2,4)
Checknumber(4,2)

//Assignment 4:
//Write a JavaScript function that takes a string as a parameter and determines whether it's a
//palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters
//that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
function isPalindrome(str) {
    
    const modifiedStr = str.replace(/[^\w]/g, "").toLowerCase();

    // Initialize two pointers, one from the start and one from the end of the string
    let left = 0;
    let right = modifiedStr.length - 1;

    // Compare characters at both pointers until they meet in the middle
    while (left < right) {
        if (modifiedStr[left] !== modifiedStr[right]) {
            return false; // If characters don't match, it's not a palindrome
        }
        left++;
        right--;
    }

    return true; // If all characters match, it's a palindrome
}
console.log(isPalindrome("radar"));
console.log(isPalindrome("A man in a pool"));

//Assignment 5:
//Write a JavaScript function that takes a positive integer as a parameter and prints all the prime
//numbers less than or equal to that integer. A prime number is a natural number greater than 1
//that is not a product of two smaller natural numbers.

function Isprime(num)
{
    if(num<2)
    {
        console.log("Cannot find prime numberts less than two");
    }
    for(let i=2;i< Math.sqrt(num);i++)
    {
        if(num % i==0)
        return false;

    }
    return true;
}
function prime(numbers)
{
    for(i=2;i<numbers;i++)
    {
        if(Isprime(i))
        {
            console.log("The prime numbers are",i);
        }
    }
}
prime(10)

//Assignment 6:
//Write a JavaScript function that simulates a simple calculator. The function should take two
//numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.

function simplecalc(num1,num2,operator)

{
    switch(operator)
    {
        case '+':
            
            return num1+num2;
            
        
            case '-':
                
                return num1-num2;
                 
            
        case '*':
            
            return num1*num2;
            
        
            case '/':
                
                    if(num2 === 0)
                    {
                        console.log("error");
                    }
                return num1/num2;
                
                default:
                   return"Error:Invalid operatiion";          
 

    }
}
console.log(simplecalc(10,5,'+'))
console.log(simplecalc(10,5,'-'))
console.log(simplecalc(10,5,'*'))
console.log(simplecalc(10,5,'/'))

//Assignment 7:
//Write a JavaScript function that takes a string as a parameter and counts the number of vowels
//(a, e, i, o, u) in the string.
function countVowels(str) {
    // Convert the input string to lowercase
    const lCStr = str.toLowerCase();
     let count = 0;

    // Iterate through each character of the string
    for (let i = 0; i<lCStr.length; i++) {
       
        if (lCStr[i] === 'a' || lCStr[i] === 'e' || lCStr[i] === 'i' || lCStr[i] === 'o' || lCStr[i] === 'u')
         {
            count++; 
        }
    }

    return count;
}
console.log("The vowels count is",countVowels("Hello"));
console.log(countVowels("JavaScript")); 
console.log(countVowels("Coding is fun"));

//Assignment 8:
//Write a JavaScript function that takes a positive integer as a parameter and checks if it's a
//perfect number. A perfect number is a positive integer that is equal to the sum of its proper
// divisors, excluding itself.
function isPerfectNumber(num) {
    if (num <= 0) {
        return false; 
    }

    let sum = 0;

    // Iterate through all numbers from 1 up to num (excluding num itself)
    for (let i = 1; i < num; i++) {
        if (num % i == 0) 
        {
            sum = sum + i; // Add the divisor to the sum if it divides num without a remainder
        }
    }

    // Check if the sum of divisors is equal to num (perfect number condition)
    return sum == num;
}
console.log("The perfect numbers are",isPerfectNumber(6)); // Output: true (6 = 1 + 2 + 3)
console.log(isPerfectNumber(28));  
console.log(isPerfectNumber(12)); 

//Assignment 9:
//Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series
//up to that number. The Fibonacci series is a sequence of numbers in which each number is the
//sum of the two preceding ones.
function Fibonacci(num)
{
    let num1 = 0;
    let num2 = 1;
    console.log(num1);
    console.log(num2);
    let nextNum = num1 + num2;
    while (nextNum <= num) {
        console.log(nextNum);
        num1 = num2;
        num2 = nextNum;
        nextNum = num1 + num2;
    }
}

Fibonacci(20);



    

//Assignment 10:
//Write a JavaScript function that takes a positive integer as a parameter and prints its//
//multiplication table up to 10.

function MultiplicationTable(num) {
    if (num <= 0) {
        console.log("give only positive numbers.");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const result = num * i;
        console.log(`${num} x ${i} = ${result}`);
    }
}
MultiplicationTable(5);










   

