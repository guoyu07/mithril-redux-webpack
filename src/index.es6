import m from 'mithril'
import HelloComponent from 'modules/hello'

m.route(document.body, '/', {
  '/': m.component(HelloComponent)
})
