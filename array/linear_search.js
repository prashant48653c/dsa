// node linear_search.js

let arr=[3,4,5,6,7]
function findElem(arr,target){
for(var i=0;i<arr.length;i++){
    if(arr[i]==target){
        console.log("element is present at ", i)
        break
    }
}
}
 
findElem(arr,5)
 

