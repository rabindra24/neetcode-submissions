class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let noduplicate = new Set(nums);
        let long = 0;
        for(let i = 0; i < nums.length; i++){
            let temp = 1;
            let j =0;
            while(noduplicate.has(nums[i] - temp)){
                temp++;
            }
            if(temp > long){
                long = temp;
            }
        }

        return long;
    }
}
