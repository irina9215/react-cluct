/**
 * 49. 字母异位词分组
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

 * @param {string[]} strs
 * @return {string[][]}
 */
// 排序法
var groupAnagrams = function(strs) {
    
    let map = new Map();
    for (let index = 0; index < strs.length; index++) {
        let element = strs[index]
        let arr = Array.from(element);
        arr.sort();
        let key = arr.toString();
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(element);
        map.set(key, list)
    }
    return Array.from(map.values())
};
// 计数法
