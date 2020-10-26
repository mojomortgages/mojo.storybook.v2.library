'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  p {\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  padding: 24px 32px 24px 32px;\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default.div(_templateObject(), function (props) {
  return props.theme.shade[80];
}, function (props) {
  return props.theme.radius.large;
}, function (props) {
  return props.theme.shade[0];
});
var Content = styled__default.div(_templateObject2());
function Tooltip(props) {
  return /*#__PURE__*/React__default.createElement(Container, null, /*#__PURE__*/React__default.createElement(Content, null, props.children));
}

exports.default = Tooltip;
