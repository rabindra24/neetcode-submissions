class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row =  Array.from({ length: 9 }, () => new Set())
        let col =  Array.from({ length: 9 }, () => new Set())
        let boxs =  Array.from({ length: 9 }, () => new Set())

        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                const value = board[x][y]
                if (value === '.') continue
                const box = Math.floor(x / 3) * 3 + Math.floor(y / 3);
                if (row[x].has(value) || boxs[box].has(value) || col[y].has(value)) {
                    return false;
                }
                row[x].add(value);
                col[y].add(value);
                boxs[box].add(value);
            }
        }
        return true;
    }
}
