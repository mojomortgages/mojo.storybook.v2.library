'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4edf0050.js');
var React = require('react');
var React__default = _interopDefault(React);

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  grid-area: hidden;\n  p {\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  padding: 24px;\n  color: ", ";\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: grid;\n  grid-auto-flow: dense;\n  grid-template-columns: auto 18px;\n  grid-gap: 8px;\n  @media (min-width: ", ") {\n    grid-template-areas: \"hidden hidden\";\n  }\n  @media (max-width: ", ") {\n    grid-template-areas: \"title icon\";\n  }\n"]);

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
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.md;
});
var Content = styled__default.div(_templateObject2());
function Tooltip(props) {
  return /*#__PURE__*/React__default.createElement(Container, null, /*#__PURE__*/React__default.createElement(Content, null, props.children));
}

exports.default = Tooltip;
