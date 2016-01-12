import m from 'mithril'
import { changeMessage } from 'modules/hello/actions'

const c = {}
c.controller = function ({store}) {
  this.saySomething = e => {
    e.preventDefault()
    store.dispatch(changeMessage(`Maybe ${Math.random()}`))
  }
}

c.view = function (ctrl, {store}) {
  return m('button', {onclick: ctrl.saySomething}, 'Some randomness?')
}

export default c
