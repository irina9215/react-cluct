// 输入 s = 'abcdefg', k = 2, 输出 cdefgab

var revertLeftK = function (stringin, k) { // js string 方法,空间复杂度为o(n)
    let strLeft = stringin.slice(0,k);
    let strRight = stringin.slice(k);
    return strRight + strLeft
}
// 方法二， 空间复杂度为O(1)
// step1. 左子字符串逆序； step2. 右子字符串逆序；step3. 整体逆序
function revert(stringin, k) {
    let left = 0; 
    let right = stringin.length - 1;
    while(left < right) {
        let temp = stringin[left];
        stringin[left] = stringin[right];
        stringin[right] = temp;
        right--;
        left++;
    }
    stringin.revert(stringin.slice(0,k))
    stringin.revert(stringin.slice(k))
    stringin.revert(stringin)
    return stringin
}
