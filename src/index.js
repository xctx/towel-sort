// You should implement your task here.

module.exports = function towelSort(matrix) {

    let result = [];

    if (!Array.isArray(matrix) || !matrix.length) {
        return result;
    }

    let direction = true;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result.push((direction) ? matrix[i][j] : matrix[i][matrix[i].length - j - 1]);
        }
        direction = !direction;
    }
    return result;
}