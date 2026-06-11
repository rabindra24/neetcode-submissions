class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = []
        for(var i = 0; i < nums.length ; i++){
            let cal = 1;
            for(var j = 0; j < nums.length; j++){
                if(i !== j){
                    cal *= nums[j]
                }
            }
            arr.push(cal)
        }
        return arr;
    }
}
