/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
    let result = [];
    let path = [];
    function backTrackinga(N, Path) {
        // console.log(N, P)
        console.log('----- result',result, Path,'----')
        if(Path.length === N.length) {
             console.log('****** before push', result, '*******')
            result.push(Path);
            console.log('******', result, '*******')
            return;
        }
        
        for (let index = 0; index < N.length; index++) {
            if (Path.indexOf(N[index]) > -1) {
                continue;
            }
            // 做选择
            Path.push(N[index])
            backTrackinga(N, Path)
            Path.pop()
        }
        
    }
    backTrackinga(nums, path)
    return result
};
