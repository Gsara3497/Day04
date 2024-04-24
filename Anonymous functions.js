//1.(a) Print odd number in an array in Anonymous 
//Anonymous function
let arr = [1,2,3,4,5,6,7,8,9,10,]

let odds = arr.filter(n => n%2)

console.log(odds)

//output: [ 1, 3, 5, 7, 9 ]

//1.(b)Convert all the strings to title caps in a string array
let str = function () {
    let arr = "This is anonymous function"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str()     //output: This Is Anonymous Function

  //1.(c)sum of all numbers in an array
  let numbers = [1, 2, 3, 4, 5];

let sum = (function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
})(numbers);

console.log(sum)  //output: 15

//1.(d)Return all prime numbers in an array

  let prime = function (arr) {
    return arr.filter(function(n){
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    });
  };
  console.log(prime([5,6,7,8,9,10]));  //output:[5,7]

  //1.(e)e. Return all the palindromes in an array

let array =["madam","hollo","wow","level","world"] 

let palin = function(array) {

let c = [];

for (let i = 0; i < array.length; i++) {

let strarray = array[i]

//Using reverse() method to reverse the string

let revstr = strarray.split("").reverse().join("");

//comparing the 2 strings and adding the string to array using push if condition satisfies

if (strarray == revstr) {

c.push(strarray);

}

}

console.log(c);

}

palin(array);  //output:[ 'madam', 'wow', 'level' ]



//1.(f)mediam of two sorted array of same size
let median = function(a, b) {

    let c = [...a, ...b].sort((a, b) => a - b);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
    return c[half];
  } else {
    
    return (c[half] + c[half - 1]) / 2;
  }
  }
  let arr1 = [1, 12, 15, 26, 38,24];
  let arr2 = [2, 13, 17, 30, 45, 47];
  console.log(median(arr1, arr2));  //output: 20.5

  //1.(g)Remove  duplicates frome an array
  let ar = [1, 2, 2, 3, 4, 4, 5];
  let removeDuplicates = function(ar) {
    let uniqueArray = [];
    ar.forEach(function(item) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    });
    return uniqueArray;
};

console.log(removeDuplicates(ar)); //output:[ 1, 2, 3, 4, 5 ]


//1.(h) Rotate an array by k times

let array1=[0,1,2,3,4,5,6,7,8,9]
let k=3;

let a = function(array1,k) {
   for(let i=0; i<k; i++)
   {
      array1.push(array1[0]);
      array1.shift();
   }
 return array1;
}
console.log(a(array1,k));  //output: [ 3, 4, 5, 6, 7, 8, 9, 0, 1, 2]
  

