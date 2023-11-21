//put reverse array in a new array using recursion

let newarr=[]
function reverse(arr,index){
 
 if(index>=0){
   newarr.push(arr[index])
   reverse(arr,index-1)
 } 
 
 
}

let arr=[1,2,3,4,5]
let i=arr.length -1
reverse(arr,i)
console.log(newarr)