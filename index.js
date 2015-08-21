var Vivus = require('vivus');
var byTag = require('by/tag');
var style = require('dom-style');
var newElement = require('new-element');
var append = require('insert/append');
require('./style.css');

new Vivus('mu', { type: 'oneByOne', duration: 200 }, function () {
  style(byTag('path')[0], 'fill', 'white');
  style(document.body, 'background-color', 'black');
  var div = newElement('<div>{text}</div>', { text: '404' });
  append(document.body, div);
});
