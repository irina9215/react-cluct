// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

//  

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// 方法一： 迭代法： 对于每一个当前数组元素， 将已有子集复制一一份然后添加上子集， 直到数组循环结束
// [] - 复制[],添加上[1] -> 得到[[], [1]]
// [[], [1] - 复制 [[], [1]] 添加上 [2] - 得到 [[],[1],[2],[1,2]]
// [[],[1],[2],[1,2]] - 复制 [[],[1],[2],[1,2]] 添加上[3] - [[],[1],[2],[1,2], [3],[1,3],[2,3],[1,2,3]]
var subSets = function (arr) { 
    let result = [[]];
    for (let index = 0; index < arr.length; index++) {
        // const element = arr[index];
        let copy = [];
        for (let j = 0; j < result.length; j++) {
            // const element = array[j];
            copy.push([...result[j], arr[index]])
        }
        result.push(...copy)
    }
    return result
}

// 回溯算法： 因为有数组有三个元素， 当k = 1，子集内元素为k-n， 有三中结果依次入结果队列；
// 当k = 2, 子集内元素为2, 选择当前元素，当k-n, 元素入队列
var subSetsTrackBack = function (numns) { 
    let result = [[]];
    const divide = (arr, index) => {
        if (index >= numns.length) {
            return
        }
        const temp = [...arr, numns[index]];
        result.push(temp);
        divide(temp, index + 1)
        divide(arr, index + 1)
    };
    divide([], 0)
    return result
}
