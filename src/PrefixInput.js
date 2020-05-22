'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-f85ace62.js');
var React = _interopDefault(require('react'));

function _templateObject3() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  display: block;\n  border: none;\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  padding: 12px 16px;\n  font-size: 16px;\n  color: ", ";\n  box-sizing: border-box;\n  outline: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  border-right: 2px solid ", ";\n  padding: 0 24px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  font-family: sans-serif;\n  margin: 8px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  border: 1px solid #cad1dd;\n  background: ", ";\n  position: relative;\n  border-radius: ", ";\n  display: grid;\n  grid-template-columns: auto 1fr;\n  &:focus-within {\n    border: 1px solid ", ";\n    box-shadow: 0 0 4px ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default.div(_templateObject(), function (props) {
  return props.disabled ? props.theme.shade[80] : props.theme.shade[100];
}, function (props) {
  return props.theme.radius["default"];
}, function (props) {
  return props.theme.cta;
}, function (props) {
  return props.theme.cta;
});
var Prefix = styled__default.label(_templateObject2(), function (props) {
  return props.theme.shade[70];
}, function (props) {
  return props.theme.shade[20];
});
var InnerInput = styled__default.input(_templateObject3(), function (props) {
  return props.theme.shade[0];
});
function Input(props) {
  return /*#__PURE__*/React.createElement(Container, {
    disabled: props.disabled
  }, /*#__PURE__*/React.createElement(Prefix, {
    "for": props.id
  }, props.prefix), /*#__PURE__*/React.createElement(InnerInput, {
    type: "text",
    id: props.id,
    disabled: props.disabled,
    placeholder: props.placeholder,
    onChange: props.onChange,
    onClick: props.onClick
  }));
}

exports.default = Input;
