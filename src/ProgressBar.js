'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-f85ace62.js');
var React = _interopDefault(require('react'));

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: ", "%;\n  background: ", ";\n  border-radius: 24px;\n  text-align: right;\n  padding-right: 16px;\n  color: ", ";\n  font-family: sans-serif;\n  line-height: 24px;\n  transition: 0.8s ease-in-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  width: 100%;\n  height: 24px;\n  background: ", ";\n  border-radius: 24px;\n  overflow: hidden;\n  position: relative;\n  &:before {\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Bar = styled__default.div(_templateObject(), function (props) {
  return props.theme.shade[90];
});
var Meter = styled__default.div(_templateObject2(), function (props) {
  return props.progress;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.shade[100];
});
function Button(props) {
  return /*#__PURE__*/React.createElement(Bar, null, /*#__PURE__*/React.createElement(Meter, {
    progress: props.progress
  }, props.progress, "%"));
}

exports.default = Button;
