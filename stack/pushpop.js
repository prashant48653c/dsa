// node pushpop

let newarr=[]  //stack
function push(x){
newarr[newarr.length]=x
}
function pop(){
    if(newarr.length > 0){
        newarr.length=newarr.length -1

    }else{
        console.log("cant pop anymore")
    }
}
function display(){
    console.log(newarr)
}
 
pop()
pop()
 
 
 


