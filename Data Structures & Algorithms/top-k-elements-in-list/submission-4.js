class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const topK = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (topK.has(nums[i])) {
                topK.set(nums[i], topK.get(nums[i]) + 1)
            }
            else {
                topK.set(nums[i], 1)
            }
        }
        let ans = []
        for (let [key, value] of topK) {
            ans.push({ key, value })
        }
        let newsort =(ans.sort((a, b) => b.value - a.value))
        let newans = []

        for (let x of newsort) {
            console.log(x.key)
            newans.push(x.key)
        }

        console.log(newans)

        return newans.slice(0, k);
    }
}
