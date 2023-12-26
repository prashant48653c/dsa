
function twoSum(cur,nums, target,newarr) {

    if(nums.length >= cur){
       
    for(let i=cur+1; i<nums.length;i++){
    if(nums[i]+nums[cur] === target){
      newarr=[cur,i]
    break;
    }
    }
      twoSum(cur+1,nums,target) 
    }
      return newarr
     
    };
    
    
    
    var cur=0
    let nums=[3,2,4]
    var target=6
     let newarr=[];
    let result=twoSum(cur,nums,target,newarr);
    console.log(result)
    