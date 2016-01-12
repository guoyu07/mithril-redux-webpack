import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const middlewarify = applyMiddleware(thunk)(createStore)

export default function (reducers) {
  return middlewarify(combineReducers(reducers))
}
