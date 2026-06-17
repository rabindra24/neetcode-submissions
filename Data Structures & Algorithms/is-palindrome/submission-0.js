class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let x = s.replaceAll(" ",'')
        let remove = x.replaceAll(/[^a-zA-Z0-9]/g,'')
        let left = 0;
        let right = remove.length - 1;
        let lower = remove.toLowerCase()
        console.log(remove)
        for(let i = 0 ; i < (remove.length/2); i++){
            if(lower[left] !== lower[right]){
                return false
            }
            right--;
            left++;
        }
        return true
    }
}
