

var newarr = [];
var twoSum = function (cur, nums, target) {

    if (nums.length >= cur) {

        for (let i = cur + 1; i < nums.length; i++) {
            if (nums[i] + nums[cur] == target) {
                newarr.push(cur, i);
                break;
            }
        }
        twoSum(cur + 1, nums, target);
    }
    return newarr;

};

var nums = [3, 2, 4];
var target = 6;

twoSum(0, nums, target);