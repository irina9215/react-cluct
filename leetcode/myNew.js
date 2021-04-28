var myNew = function (fn, ...args) {
    const obj = Object.create(fn.prototype);
    const res = fn.apply(ob, args)
    return res instanceof Object ? res : obj
}
