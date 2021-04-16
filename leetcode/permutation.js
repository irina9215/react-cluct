/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
    let result = [];
    let path = ''
    function backTracking(str, path) {
        if(path.length === str.length) {
            result.push(path)
            return
        }
        for (let index = 0; index < str.length; index++) {
            //排除不合法的选项
            if (path.indexOf(str[index]) > -1) {
                continue
            }
            // console.log(S, path, str)
            // 做选择
            path = path + str[index]
            backTracking(str, path)
            path = path.slice(0, path.length-1)
        }
    }
    backTracking(S, path)
    return result
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let path = [];
    function backTracking(N, P) {
        if(P.length === N.length) {
            result.push(P)
        }
        for (let index = 0; index < N.length; index++) {
            // console.log(P)
            if (P.indexOf(N[index]) > -1) {
                continue
            }
            // 做选择
            P.push(N[index])
            backTracking(N, P)
            P.pop()
        }
    }
    backTracking(nums, path)
    return result
};
