class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ''
        for (let x of strs) {
            str += `${x.length}#` + x 
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans = [];
        for(let i = 0; i < str.length; ){
            var j = i;
            while(str[j] !== '#'){
                j++;
            }
            let len = Number(str.slice(i, j))
            
            ans.push(str.slice(j + 1, j + len + 1))

            i = j + len + 1;

            
        }
        return ans
    }
}
