var Vivus = require('vivus');
var query = require('by/query');
var style = require('dom-style');
var domready = require('domready');

require('./style.css');

domready(function () {
  new Vivus('mu', { type: 'oneByOne', duration: 200 }, function () {
    style(query('path'), 'fill', 'white');
    style(document.body, 'background-color', 'black');
  });
});
