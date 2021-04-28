/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let preIndex = 0;
    let map = new Map()
    for(let right = 0; right < s.length; right++) {
        if(map.has(s[right]) && map.get(s[right]) > preIndex) {
            preIndex = map.get(s[right]) + 1
        }
        maxLength = Math.max(maxLength, right - preIndex + 1);
        map.set(s[right], right)
    }
    
    return maxLength
};
