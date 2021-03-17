// 生命周期
let isMounted = true;
let workingProgressHook = null
const fiber = {
    stateNode: App,
    memerizedState: null, // 保存hook数据
}
function useState(initialState) {
    let hook;
    if (isMounted) {
        hook = {
            memerizedState: initialState,
            next: null,
            queue: {
                pending: null
            } // 保存状态的改变
        }
        if (!fiber.memerizedState) { // 第一次渲染
            fiber.memerizedState = hook
        } else { //
            workingProgressHook.next = hook
        }
        workingProgressHook = hook //
    } else {
        // update 时
        hook = workingProgressHook
        workingProgressHook = workingProgressHook.next
    }
    let baseState = hook.memerizedState;
    if (hook.queue.pending) { // 有状态更新
        let firstUpdate = hook.queue.pending.next
        do {
            const action = firstUpdate.action
            baseState = action(baseState)
            firstUpdate = firstUpdate.next
        } while(firstUpdate !== hook.queue.pending.next)
        hook.queue.pending = null
    }
    hook.memerizedState = baseState
    return [baseState, dispatchAction.bind(null, hook.queue)]
}
function dispatchAction(queue, action) {
    const update = { //代表一次更新
        action, // 双向链表
        next: null
    }
    if (queue.pending === null) { // 没有触发的更新，第一次更新
        update.next = update;
    } else {
        // u0 -> u0
        // 到
        // u0 -> u1 -> u0
        update.next = queue.pending.next
        queue.pending.next = update
    }
    queue.pending = update
    schedule()
}
function schedule() {
    workingProgressHook = fiber.memerizedState // 每一次schedule 都将当前hook 复位
    const app = fiber.stateNode()
    isMounted = false;
    return app
}

function App() {
    const [num, updateNum] = useState(0);
    const [num2, updateNum2] = useState(0);
    console.log('isMounted', isMounted)
    console.log('num', num)
    console.log('num2', num2)


    return {
        onClick() {
            updateNum(num => num + 1)
        },
        onFocus() {
            updateNum2(num => num + 1)
        }
    }
}

window.app = schedule();
app.onClick()