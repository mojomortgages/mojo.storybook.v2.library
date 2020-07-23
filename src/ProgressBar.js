'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: ", "%;\n  background: ", ";\n  border-radius: 4px;\n  color: ", ";\n  transition: width 0.8s cubic-bezier(0.1, 0.9, 0.9, 0.1);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  width: 100%;\n  height: 4px;\n  background: ", ";\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n  &:before {\n  }\n"]);

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
function ProgressBar(props) {
  return /*#__PURE__*/React__default.createElement(Bar, null, /*#__PURE__*/React__default.createElement(Meter, {
    progress: props.progress
  }));
}

exports.default = ProgressBar;
