class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i = 0 ; i < matrix.length ; i++){
            for(let j = 0; j <= matrix.length; j++){
                console.log(matrix[i][j])
                console.log(target)
                if(target === matrix[i][j]){
                    return true;
                }
            }
        }
        return false;
    }
}
