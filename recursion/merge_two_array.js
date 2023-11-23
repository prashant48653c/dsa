// node merge_two_array.js
// not complete yet

// result = [1,1,2,3,4,4]
let newarr = []
var mergeTwoLists = function (list1, list2, i, j) {
    if(newarr.length < list1.length + list2.length){
        if(i>=0){
            newarr.push(list1[i])  
       }
        if(j>=0){
           newarr.push(list2[j])
       }
       mergeTwoLists(list1,list2,i-1,j-1)
    } 
    
 


    
};

function sortArr(newarr,x){
    if(newarr[x] >= newarr[x+1]){
        let temp=newarr[x]
newarr[x]=newarr[x+1]
newarr[x+1]=temp
    }
}
let list1 =
    [1, 2, 4]
let list2 =
    [1, 3, 7,4,2]
let i = list1.length - 1
let j = list2.length - 1
 let p=newarr.length -1


mergeTwoLists(list1, list2, i, j)
sortArr(newarr,0)
console.log(newarr)