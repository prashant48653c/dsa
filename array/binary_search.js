// node binary_search.js

//  REQUIREMENT ----- In binary search the array must be sorted in either descending or ascending order

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

let arr=[2,3,4,5,6,9]
let target=2;
let start=0
let end=arr.length

while(start <= end){
    
    let mid=Math.floor((start+end)/2)
    if(arr[mid] === target){
        console.log("Found at index", mid);
        break;
    }
    else if(arr[mid] > target){
        end=mid;
    }
    else if(arr[mid] < target){
        start=mid;
    }

}

 