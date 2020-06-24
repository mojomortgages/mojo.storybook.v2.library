'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);

function _templateObject4() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n  &:checked {\n    + ", " {\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n      color: ", ";\n      font-weight: 500;\n      ", " {\n        background: ", ";\n        box-shadow: 0 0 0 2px ", ";\n        &:after {\n          transform: scale(1);\n        }\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  width: 24px;\n  height: 24px;\n  background: ", ";\n  box-shadow: 0 0 0 1px ", ";\n  margin-right: 16px;\n  border-radius: 100%;\n  position: relative;\n  transition: 0.2s;\n  flex-shrink: 0;\n  &:after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ", ";\n    transform: scale(0);\n    transform-origin: center;\n    transition: 0.2s;\n  }\n"]);

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
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-size: 14px;\n"]);

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
}, function (props) {
  return props.theme.shade[100];
});
var Input = styled__default.input(_templateObject4(), Container, function (props) {
  return props.theme.tertiary;
}, function (props) {
  return props.theme.tertiary;
}, function (props) {
  return props.theme.shade[100];
}, Checkmark, function (props) {
  return props.theme.tertiary;
}, function (props) {
  return props.theme.shade[100];
});
function RadioButton(props) {
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Input, {
    type: "radio",
    id: props.id,
    name: props.name,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick
  }), /*#__PURE__*/React__default.createElement(Container, {
    htmlFor: props.id
  }, /*#__PURE__*/React__default.createElement(Checkmark, null), /*#__PURE__*/React__default.createElement(Text, null, props.children)));
}

exports.default = RadioButton;
