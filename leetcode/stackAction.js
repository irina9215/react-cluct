

var sortedAction = function(s) {
    let action = [];
    let stack = [];
    let result = [];
    
    for(let i = 0; i < s.length; i++) {
      let curInS = s[i];
      if(!stack) {
        stack.push(curInS)
        action.push('a')
    }
    // compare 
    let ele = stack[stack.length-1]
    if ( ele > curInS) {
        stack.pop()
        action.push('b')
    } else {
        stack.push(curInS)
        action.push('a')
    }
      
    }
    console.log(result)
    return action
  }