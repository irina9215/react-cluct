/**
 * 22. 括号生成
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    if(n === 1 ) {
        result.push('()')
        return result
    }
    
    const backTracking = (n, result, left, right, str) => {
        if (right > left) {
            return
        }
        if (right == left && left === n ) {
            result.push(str)
        }
        if (left < n) {
            backTracking(n, result, left + 1, right, str + '(')
        }
        if (right < left) {
            backTracking(n, result, left, right + 1 , str + ')')
        }
    }
    backTracking(n, result, 0, 0, '')
    return result
};
