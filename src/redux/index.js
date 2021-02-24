
export function createStore (reducer) {
  let state = {}
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe }
}

export function combineReducers (reducers) {
  // 在createStore里调用dispatch时第一次调用这个返回的函数
  return function (state, action) {
    let nextState = {}
    Object.keys(reducers).forEach(key => {
      const prevStateForKey = state[key]
      const nextStateForKey = reducers[key](prevStateForKey, action)
      nextState[key] = nextStateForKey
    })

    return nextState
  }
}