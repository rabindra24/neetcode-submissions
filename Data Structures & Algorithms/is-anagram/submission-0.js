class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let x = s.split('').sort().join('')
        let y = t.split('').sort().join('')
        console.log(x, y)
        if(x === y) return true

        return false
    }
}
