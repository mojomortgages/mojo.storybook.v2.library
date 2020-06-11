'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4edf0050.js');
var React = require('react');
var React__default = _interopDefault(React);

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  padding: 24px;\n  color: ", ";\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default.div(_templateObject(), function (props) {
  return props.theme.shade[100];
}, function (props) {
  return props.theme.shade[80];
}, function (props) {
  return props.theme.radius.large;
}, function (props) {
  return props.theme.shade[0];
});
function Tooltip(props) {
  return /*#__PURE__*/React__default.createElement(Container, null, props.children);
}

exports.default = Tooltip;
