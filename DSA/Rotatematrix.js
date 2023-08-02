// * @param {number[][]} matrix
// * @return {void} Do not return anything, modify matrix in-place instead.
// */
var rotate = function (matrix) {
    console.log(matrix);
    for (let r = 0; r < matrix.length; r++) {
      for (let c = r; c < matrix[0].length; c++) {
        [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
      }
    }
    for (let j of matrix) {
      j.reverse();
    }
  };
  
  let rotate = (mat) => {
    for (let r = 0; i < mat.length; r++) {
      for (let c = r; c < mat[0].length; c++) {
        [mat[r][c], mat[c][r]] = [mat[c][r], mat[r][c]];
      }
    }
    for (let boom of mat) {
      boom.reverse();
    }
  };
  