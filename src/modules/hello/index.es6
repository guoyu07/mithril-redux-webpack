import m from 'mithril'
import makeStore from 'reduxer'
import { changeMessage } from 'modules/hello/actions'
import * as reducers from 'modules/hello/reducers'
import SayComponent from 'modules/hello/say'

const c = {}
c.controller = function () {
  this.store = makeStore(reducers)
  this.store.dispatch(changeMessage('Hello my world'))
}

c.view = function ({store}) {
  const state = store.getState()
  const params = {store}

  console.log(state)

  return m('div', [
    m('h1', state.message),
    m.component(SayComponent, params)
  ])
}

export default c
