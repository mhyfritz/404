var Vivus = require('vivus');
var query = require('by/query');
var style = require('dom-style');
var newElement = require('new-element');
var append = require('insert/append');
var domready = require('domready');
require('./style.css');

domready(function () {
  new Vivus('mu', { type: 'oneByOne', duration: 200 }, function () {
    style(query('path'), 'fill', 'white');
    style(document.body, 'background-color', 'black');
    var div = newElement('<div>{text}</div>', { text: '404' });
    append(document.body, div);
  });
});
