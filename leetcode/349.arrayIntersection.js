// 给定两个数组， 编写一个函数来计算他们的交集， 返回的数组中元素不重复
// 349. 两个数组的交集
// let nums1 = [4,9,4,5], nums2 = [9,4,9,8,4]
// 利用键值对方法
var arrayIntersection = function (array1, array2) {
    let setTar = new Set(array1);
    let res = []
    array2.forEach(element => {
        if (setTar.has(element) && res.indexOf(element) === -1) {
            res.push(element)
        }
    });
    return res
}
