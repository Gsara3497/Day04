//IIFE-Immediately Invoked Function Expression
//1.(a)print odd numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i]);
        }
    }
})(arr);

//output: 1 3 5 7 9

//1.(b)Convert all the strings to title caps in a string array
(function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
    })("welcome to all")

    //output:Welcome To All

    //1.(c)sum of all numbers in an array
    let numbers = [1, 2, 3, 4, 5,6,7,8,9,10];

let sum = (function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
})(numbers);

console.log(sum); 

//output:55


//1.(d)Return all prime numbers in an array
(function (){
    var primeNum = [7, 16, 9, 3]
    
    primeNum = primeNum.filter(function(number) {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(primeNum);
    })()

    //output:[ 7, 3 ]
    
  //1.(e)Return all palindromes in an array
  
  let arr1=["madam","wow","level","world"]
  let palin= (function(arr1) {

    let c = [];
    
    for (let i = 0; i < arr1.length; i++) {
    
    let strarr1 = arr1[i]
    
    let revstr = strarr1.split("").reverse().join("");
    
    if (strarr1== revstr) {
    
    c.push(strarr1);
    
    }
    
    }
    
    console.log(c);
    
    })(arr1);

    //output:[ 'madam', 'wow', 'level' ]

    //1.(f)mediam of two sorted array of same size
    ( function() {
        let arr1 = [1, 12, 15, 26, 38,24];
        let arr2 = [2, 13, 17, 30, 45, 47];
        
          let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
        
          const half = c.length / 2 | 0;
          
        if (c.length % 2) {
        console.log(c[half]);
        } else {
          
        console.log((c[half] + c[half - 1]) / 2);
        }
        
        })()

        //output:20.5

        //1.(g)Remove  duplicates frome an array
        
        let input = [1,2, 3 ,4 , 1, 3, 2, 2];
       (function() {
           let ans=[];
        ans = input.filter((a,b)=> input.indexOf(a) == b)
        console.log(ans);
       })();
 //output: [ 1, 2, 3, 4 ]
       
       //1.(h) Rotate an array by k times
       let arr2= [1, 2, 3, 4, 5];
       let k = 2;
       (function() {
        let rotateArray = function(ar2r, k) {
            let n = arr2.length;
            let rotatedArray = [];
            for (let i = 0; i < n; i++) {
                let newIndex = (i + k) % n;
                rotatedArray[newIndex] = arr2[i];
            }
            return rotatedArray;
        };
         console.log(rotateArray(arr2, k)); 
    })();
    
        // Output: [4, 5, 1, 2, 3]


    
