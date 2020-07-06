'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4edf0050.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./LightenDarkenColor-93e75230.js');

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  p {\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  padding: 12px 16px;\n  color: ", ";\n  background: ", ";\n  border-radius: ", "\n    ", "\n    ", " 0;\n  display: inline-block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default.div(_templateObject(), function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.primary + 20;
}, function (props) {
  return props.theme.radius.large;
}, function (props) {
  return props.theme.radius.large;
}, function (props) {
  return props.theme.radius.large;
});
var Content = styled__default.div(_templateObject2());
function Bubble(props) {
  return /*#__PURE__*/React__default.createElement(Container, null, /*#__PURE__*/React__default.createElement(Content, null, props.children));
}

exports.default = Bubble;
