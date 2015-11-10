const Vivus = require('vivus');
const query = require('by/query');
const style = require('dom-style');
const domready = require('domready');

require('./style.css');

domready(() => {
  new Vivus('mu', { type: 'oneByOne', duration: 200 }, () => {
    style(query('path'), 'fill', 'white');
    style(document.body, 'background-color', 'black');
  });
});
