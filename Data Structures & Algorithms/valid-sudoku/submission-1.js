class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let cs = Array.from({length : 9},()=> new Set());
        let rs = Array.from({length : 9},()=> new Set());
        let boxs = Array.from({length : 9},()=> new Set());

        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++){
                const value = board[r][c];

                if(value === '.') continue

                let box = Math.floor(r/3) * 3 + Math.floor(c/3)
                if(cs[c].has(value) || rs[r].has(value) || boxs[box].has(value) ){
                    return false
                }
                cs[c].add(value)
                rs[r].add(value)
                boxs[box].add(value)
            }
        }
        return true
    }
}
