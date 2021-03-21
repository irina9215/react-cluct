// 给你一个数组 prices ，其中 prices[i] 是商店里第 i 件商品的价格。

// 商店里正在进行促销活动，如果你要买第 i 件商品，那么你可以得到与 prices[j] 相等的折扣，其中 j 是满足 j > i 且 prices[j] <= prices[i] 的 最小下标 ，如果没有满足条件的 j ，你将没有任何折扣。

// 请你返回一个数组，数组中第 i 个元素是折扣后你购买商品 i 最终需要支付的价格。
// [8,4,6,2,3] > [4,2,4,2,3]
 // 方法一： 暴力法
 // 方法二： 单调栈法
 // stack 存 依次递增数组的index值
 var finalPrices = function(prices) {
    let stack = []
    for (let index = 0; index < prices.length; index++) {
        const element = prices[index];
        if (stack.length && prices[index] < prices[stack[stack.length-1]]) {
            while(stack.length && prices[index] < prices[stack[stack.length-1]]) {
                let tempIndex = s[length - 1]
                prices[tempIndex] = prices[tempIndex] - prices[index]
                stack.pop()
            }
        }
        stack.push(index)
    }
    return prices
};
