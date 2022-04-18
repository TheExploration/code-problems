/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
           this.matrix = matrix;
        for(let i = 0; i < this.matrix.length; i++) {
            for(let j = 0; j < this.matrix[0].length; j++) {
                let sum = 0;
                if(j > 0) sum += this.matrix[i][j - 1];
                if(i >0) sum += this.matrix[i - 1][j];
                sum += this.matrix[i][j];
                if(i >0 && j > 0) sum -= matrix[i-1][j-1];
                this.matrix[i][j] = sum;
            }
        }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
 
        let sum = this.matrix[row2][col2];
        if(col1 > 0) sum -= this.matrix[row2][col1 - 1];
        if(row1 > 0) sum -= this.matrix[row1 - 1][col2];
        if(row1 > 0 && col1 > 0) sum += this.matrix[row1 - 1][col1 -1];

        return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */