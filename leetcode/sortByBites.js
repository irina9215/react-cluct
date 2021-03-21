// 给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。

// 如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。

// 请你返回排序后的数组。
// 输入：arr = [0,1,2,3,4,5,6,7,8]
// 输出：[0,1,2,4,8,3,5,6,7]
// 求a中1的个数
// let res = 0
// while(a) {
//    a = a & (a - 1)
//    res++
// }
function getBites(a) {
    let res = 0
    while(a) {
        a = a & (a - 1)
     res++
     }
    return res
    }
var sortByBits = function(arr) {
    arr.sort((a,b) => {
        const temp = a - b
        const tempA = getBites(a)
        const tempB = getBites(b)
        return tempA - tempB === 0 ? temp : tempA - tempB
    })
};
