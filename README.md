### Yet another starter pack with mithril + redux

This is for development only. I try to be as unopinionated as possible, so included batteries are:

* Webpack
* Babel 6
* Mithril
* Redux
* Lodash

### To start

* `npm install`
* `npm run start`
* Head to [http://127.0.0.1:3000](http://127.0.0.1:3000)

### Write a module

Modules are basically Mithril components, and they are called _modules_ for less typing. Each module should have a collection of `actions` and `reducers`. Maybe based on your case, you will need a global `store`, while in mine, each module have a separate `store`. Please examine `hello` for reference.
