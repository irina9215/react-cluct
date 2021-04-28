var isValid = function(s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    let ss = s.split('')
    for (let ch of ss) {
        if (pairs.has(ch)) {
            if (stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            } else {
                stk.pop();
            }

        }
        else {
            stk.push(ch);
        }
    }
    return !stk.length;
};
