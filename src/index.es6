import m from 'mithril'

let c = {}
c.controller = function (args) {

}

c.view = function (ctrl, args) {
	return m('h1', 'Hello World')
}

m.mount(document.body, m.component(c))