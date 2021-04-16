var debounce = function (fn, delay) {
    let timeout = null;
    return function () {
        const context = this;
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            fn.apply(context, arguments)
        }, delay)
    }
}
var text = function (params) {
    console.log(params)
}
debounce(text,0)('1')
debounce(text,1000)('2')
debounce(text, 3000)('3')

var throttle = function (fn, duration) {
    let wait = false
    return function () {
        let context = this;
        if(!wait) {
            fn.apply(context, arguments);
            wait = true;
            setTimeout(() => {
                wait = false
            }, duration)
        }
    }
}
throttle(text,0)('1')
throttle(text,1000)('2')
throttle(text, 3000)('3')
var removeDuplicated = function(arr) {
    return [... new Set(arr)]
}
var flat = function(arr) {
    return arr.reduce((acr, cur) => {
        if (cur instanceof Array) {
            return [...acr, ...flat(cur)]
        } else {
            return [...acr, cur]
        }
    }, [])
}