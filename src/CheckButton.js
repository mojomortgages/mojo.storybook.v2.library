'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4edf0050.js');
var React = require('react');
var React__default = _interopDefault(React);
var LightenDarkenColor = require('./LightenDarkenColor-93e75230.js');
var check = require('./check-b50c1607.js');

function _templateObject4() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  &:focus {\n    + ", " {\n      background: ", ";\n    }\n  }\n  &:checked {\n    + ", " {\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n      color: ", ";\n      font-weight: 500;\n      ", " {\n        background: ", ";\n        box-shadow: 0 0 0 2px ", ";\n        &:after {\n          transform: scale(1);\n        }\n      }\n    }\n    &:focus {\n      + ", " {\n        background: ", ";\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  width: 24px;\n  height: 24px;\n  background: ", ";\n  box-shadow: 0 0 0 1px ", ";\n  margin-right: 16px;\n  border-radius: 4px;\n  position: relative;\n  transition: 0.2s;\n  flex-shrink: 0;\n  &:after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 12px;\n    height: 12px;\n    transform: scale(0) rotate(45deg);\n    transform-origin: center;\n    transition: 0.2s;\n    background-image: url(", ");\n    background-position: center;\n    background-repeat: no-repeat;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  padding: 16px;\n  background: ", ";\n  box-shadow: 0 0 0 1px ", ";\n  border-radius: ", ";\n  align-items: center;\n  transition: 0.2s;\n  cursor: pointer;\n  color: ", ";\n  &:hover {\n    background: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-size: 0.8em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Text = styled__default.div(_templateObject());
var Container = styled__default.label(_templateObject2(), function (props) {
  return props.theme.shade[100];
}, function (props) {
  return props.theme.shade[60];
}, function (props) {
  return props.theme.radius["default"];
}, function (props) {
  return props.theme.shade[10];
}, function (props) {
  return props.theme.shade[80];
});
var Checkmark = styled__default.span(_templateObject3(), function (props) {
  return props.theme.shade[80];
}, function (props) {
  return props.theme.shade[60];
}, check.Check);
var Input = styled__default.input(_templateObject4(), Container, function (props) {
  return props.theme.shade[70];
}, Container, function (props) {
  return props.theme.tertiary;
}, function (props) {
  return props.theme.tertiary;
}, function (props) {
  return props.theme.shade[100];
}, Checkmark, function (props) {
  return props.theme.tertiary;
}, function (props) {
  return props.theme.shade[100];
}, Container, function (props) {
  return LightenDarkenColor.LightenDarkenColor(props.theme.tertiary, 20);
});
function CheckButton(props) {
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Input, {
    type: "checkbox",
    id: props.id,
    name: props.name,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick
  }), /*#__PURE__*/React__default.createElement(Container, {
    htmlFor: props.id
  }, /*#__PURE__*/React__default.createElement(Checkmark, null), /*#__PURE__*/React__default.createElement(Text, null, props.children)));
}

exports.default = CheckButton;
