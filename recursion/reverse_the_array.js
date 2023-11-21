//reverse the element of array in same array using recursion
// node reverse_the_array
// the solution uses tail recursion 

function reverse(arr,i,o){    
    if(i >=0){    
        let temp=arr[i]
             
        reverse(arr,i-1,o+1)   
        arr[o]=temp  
      } 
}

let arr=[1,2,343,676,909,3,4,5,6]
reverse(arr,arr.length-1 ,0)
console.log(arr)