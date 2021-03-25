/**
 * @param {string} s
 * @return {string}
 * 给你一个字符串 s，找到 s 中最长的回文子串。
示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

 */
// 解法一： 暴力法
 var longestPalindrome = function(s) {
     let leftIndex= 0;
     let rightIndex= 0;
     let maxLenth = 0
    for (let index = 0; index < s.length; index++) {
        for (let j = 1; j < s.length; j++) {
            console.log('out', leftIndex, rightIndex, maxLenth, isPalindrome(index, j), (j - index + 1) > maxLenth)
            if (isPalindrome(index, j) && (j - index + 1) > maxLenth) {
                maxLenth = j - index + 1
                leftIndex = index;
                rightIndex= j
            }
        }
        
    }
    function isPalindrome(left, right) {
        while(left <= right){
            if(s[left] === s[right]) {
                left++;
                right--;
            } else {
                return false
            }
        }
        return true
    }
    return s.slice(leftIndex, rightIndex + 1)
};
// "babad"
// dp       0   1   2   3   4   5   6
//    i         dp[i+1, j] = dp[i, j] && s[i+1] === s[j]  
// j   0    true

// j   1        true

// j   2            true

// j   3                true
// 状态转移方程 也就是 dp[i, j] = dp[i-1, j] && s[i] === s[j]
// 边界条件 length == 1 => true or (length == 2 && s[i] == s[j]) => true
var longestPalindrome = function (s) {
    let n = s.length;
    if (n === 1) {
        return s
    }
    let result = '';
    // 状态表
    let DP = Array.from(new Array(n), () => new Array(n).fill(false))
    for (let l = 0; l < n; ++l) { // l 为对角线， 边界值
        for (let i = 0; i < n - 1; ++i) {
            let j = i + l;
            if (l === 0) {
                DP[i][j] = true

            }else if (l === 1) {
                DP[i][j] = (s[i] === s[j])
            } else {
                DP[i][j] = DP[i + 1][j - 1] && (s[i] === s[j])
            }
            if (DP[i][j] && l + 1 > result.length) {
                result = s.substr(i, l + 1)
            }
        }
        
    }
console.log(DP)
    return result
}
