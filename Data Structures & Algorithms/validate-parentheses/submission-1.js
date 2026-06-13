class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []

        for (let i = 0; i < s.length; i++) {
            let top = stack.length -1;
            if (s[i] === ')' && stack[top] === '(') {
                stack.pop()
            } else if (s[i] === ']' && stack[top] === '[') {
                stack.pop()
            } else if (s[i] === '}' && stack[top] === '{') {
                stack.pop()
            }else{
                stack.push(s[i])
            }
        }
        console.log(stack)
        if(stack.length > 0) return false
        return true
    }
}
