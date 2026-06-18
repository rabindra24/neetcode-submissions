class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxPrice = 0;

        for(let i = 0; i < prices.length; i++){
            minPrice = Math.min(minPrice , prices[i])
            maxPrice = Math.max(maxPrice ,  prices[i] - minPrice)
        }

        return maxPrice;
    }
}
