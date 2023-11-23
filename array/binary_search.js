// node binary_search.js

//  REQUIREMENT ----- In binary search the array must be sorted in either descending or ascending order

let arr=[3,4,5,6,7,8,9]
 
let target=1;
let start=0
let end=arr.length -1  
let mid=undefined
 
while(start <=(end)){   
    mid=Math.floor((start+end) /2)  
    if(arr[mid]<target){              
        start=mid+1
           
        
    }else if(arr[mid]===target){   
        console.log("element found at index", mid)
      break
      
    }else if(arr[mid]>target){
        end=mid -1
        
    } 
   
 
}
console.log("Program finished",mid)
 