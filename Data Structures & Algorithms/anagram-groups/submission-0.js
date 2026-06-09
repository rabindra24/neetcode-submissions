class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ana = new Map()
        for (let i = 0; i < strs.length; i++) {
            var ele = strs[i].split('').sort().join()
            if (ana.has(ele)) {
               ana.get(ele).push(strs[i])
            }
            else {
                ana.set(ele, [strs[i]])
            }
        }
        console.log(ana)

        let ans = [];
        for(let [key , value] of ana){
            ans.push(value)
        }
        console.log(ans)
        return ans;
    }
}
