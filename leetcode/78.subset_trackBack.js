var subsets = function (array) {
    let result = []
    let tb = function (index, list) {
        result.push(list.slice()); 
        for (let i = index; i < array.length; i++) {
            list.push(array[i]);
            tb(i+1, list);
            list.pop();
        }
    }
    tb(0, [])
    return result
}
