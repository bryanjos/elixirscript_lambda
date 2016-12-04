require('babel-polyfill');
const App = require('./dist/app/Elixir.App');
exports.handler = App.default.handler;