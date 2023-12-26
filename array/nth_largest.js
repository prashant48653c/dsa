// node nth_largest


//[3,45,6,8,2,1,88]

let arr = [3, 45, 6, 8, 2, 1, 88]

let num = 0
let nth = 3

function getNum(arr, l1, l2,nth,num) {
 if(num <=nth){
    for (var i = 0; i < arr.length; i++) {
if(arr[i] !=l1){
    if (l1 > arr[i]) {
        let temp = l1

        l1 = arr[i]
        l2 = temp
        console.log("the smallest is " + l1 + " and second smallest is " + l2)
    } else if (arr[i] < l2 && arr[i] !=l2 ) {
        l2 = arr[i]
    }
   
}
}
num=num+1

  getNum(arr,l1,l2,nth,num)     
 }

 
}
let l2=1111
let l1=4444


getNum(arr, l1, l2,nth,num)
