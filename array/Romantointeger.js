
let values={
    I  :   1,
    V   :    5,
    X  :    10,
    L   :  50,
    C   :  100,
    D    :  500,
    M    :  1000
    }
    function romanToInt(roman,p){
    
    for(let i=0; i< roman.length; i++){
      let result=0
      let big=roman[i+1] //v
      let small=roman[i]
      
      
        if(values[big] > values[small] && big ) {
      
        result += (values[big]) - values[small]
    i++;
      
    }else {
     result += values[small]
    }
    
    }
    
    return result
    }
    
    let s="III"
    let result=0
    let Output=romanToInt(s,0)
    console.log(Output)