class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        let ans = Array(temp.length).fill(0)
        for(let i = 0; i < temp.length; i++){
            let te = 0;
            for(let j = i + 1; j < temp.length; j++){
                console.log(temp[i], temp[j])
                if(temp[i] < temp[j]){
                    te++;
                    ans[i] = te;
                    break;
                }
                te++;
            }
        }
        return ans;
    }
}
