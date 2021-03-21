 var MyStack = function (params) {
     this.queue = []; // 初始化
 }
 MyStack.prototype.push = function (x) {
    this.queue.push(x)
    return this.queue
 }
 MyStack.prototype.pop = function () {
     return this.queue.pop()
 }
 MyStack.prototype.top = function () {
     if (this.queue.length === 0) {
         return null
     }
     return this.queue.shift()
 }
 MyStack.prototype.empty = function () {
     return this.queue.length === 0;
 }
