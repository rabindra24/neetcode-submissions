class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let x = new Map()
        let y = new Map()

        if (s.length !== t.length) return false

        for (let i = 0; i < s.length; i++) {
            if (x.has(s[i])) {
                x.set(s[i] , x.get(s[i]) + 1)
            }
            else {
                x.set(s[i] , 0)
            }
             if (y.has(t[i])) {
                y.set(t[i], y.get(t[i]) + 1)
            }
            else {
                y.set(t[i] , 0)
            }
        }

        for (let j = 0 ; j< s.length; j++){
           if ( x.get(s[j]) !== y.get(s[j])){
            return false
           }
        }
        console.log(x, y)
        return true
    }
}
