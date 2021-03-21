// hashSet 使用某种转换函数，映射存储
var MyHashSet = function () {
    this._base = 769;
    this.hashSet = new Array(this._base).fill(0).map(() => new Array())
}
MyHashSet.prototype.add = function (params) {
    let _index = this.hashCal
    let _arr = this.hashSet[_index];
    // 检查是否存过这个值
    for (let index = 0; index < _arr.length; index++) {
        const element = _arr[index];
        if (element === params) {
            return false
        }
    }
    _arr.push(params)
    return true
}
MyHashSet.prototype.remove = function (params) {
    let _index = this.hashCal
    let _arr = this.hashSet[_index];
    for (let index = 0; index < _arr.length; index++) {
        if (_arr[index] === params) {
            _arr.splice(index, 1)
            return true
        }
    }
    return false
}
MyHashSet.prototype.contains = function (params) {
    let _index = this.hashCal
    let _arr = this.hashSet[_index];
    for (let index = 0; index < _arr.length; index++) {
        if (_arr[index] === params) {
            return true
        }
    }
    return false
}
MyHashSet.prototype.hashCal = function (params) {
    return params % this._base
}
