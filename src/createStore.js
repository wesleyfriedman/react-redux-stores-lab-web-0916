export default function createStore(reducer) {
  let state = []
  let subscribers = []

  function getState() {
    return state
  }

  function subscribe(callback) {
    subscribers.push(callback)
  }

  function dispatch(action) {
    state = reducer(state, action)
    subscribers.forEach(subscriber => subscriber())
  }

  return {getState: getState, dispatch: dispatch, subscribe: subscribe}
}
