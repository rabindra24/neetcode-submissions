class Solution {
    evalRPN(tokens) {
        let stack = []
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === '+') {
                let ele1 = stack.pop()
                let ele2 = stack.pop()
                console.log(stack)
                stack.push(ele2 + ele1)
            } else if (tokens[i] === '-') {
                let ele1 = stack.pop()
                let ele2 = stack.pop()
                stack.push(ele2 - ele1)
            } else if (tokens[i] === '*') {
                let ele1 = stack.pop()
                let ele2 = stack.pop()
                stack.push(ele2 * ele1)
            } else if (tokens[i] === '/') {
                let ele1 = stack.pop()
                let ele2 = stack.pop()
                stack.push(Math.trunc(ele2 / ele1))
            } else {
                console.log(stack)
                stack.push(Number(tokens[i]))
            }
        }
        return stack[0]
    }
}
