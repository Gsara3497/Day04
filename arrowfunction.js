// Print odd numbers in an array
const printOddNumbers = (arr) => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  }
  
  // Convert all the strings to title caps in a string array
 
  const convertToTitleCaps = (arr) => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  }
  
  
  // Sum of all numbers in an array
  const sumOfNumbers = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // Return all the prime numbers in an array
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  const getPrimeNumbers = (arr) => {
    return arr.filter(num => isPrime(num));
  }
  
  // Return all the palindromes in an array
  const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  const getPalindromes = (arr) => {
    return arr.filter(str => isPalindrome(str));
  }
  
  // Example usage
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let strings = ["hello", " wow","world", "level","madam"];
  
  console.log("Odd Numbers:");
  printOddNumbers(numbers);
  
  console.log("Title Caps:");
  console.log(convertToTitleCaps(strings));
  
  console.log("Sum of Numbers:", sumOfNumbers(numbers));
  
  console.log("Prime Numbers:");
  console.log(getPrimeNumbers(numbers));
  
  console.log("Palindromes:");
  console.log(getPalindromes(strings));
  
  //output:
  //Running] node "e:\dev\FSD1\js\arrowfunction.js"
//Odd Numbers: 1 3 5 7 9
//Title Caps:
//[ 'Hello', ' wow', 'World', 'Level', 'Madam' ]
//Sum of Numbers: 55
//Prime Numbers:
//[ 2, 3, 5, 7 ]
//Palindromes:
//[ 'level', 'madam' ]

