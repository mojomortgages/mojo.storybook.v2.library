'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4edf0050.js');
var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-58a12fd4.js');
var reactNumberFormat_es = require('./react-number-format.es-086060ff.js');

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  display: block;\n  border: none;\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  padding: 12px 16px;\n  font-size: 16px;\n  color: ", ";\n  box-sizing: border-box;\n  outline: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  border: 1px solid #cad1dd;\n  background: ", ";\n  position: relative;\n  border-radius: ", ";\n  &:focus-within {\n    border: 1px solid ", ";\n    box-shadow: 0 0 4px ", ";\n  }\n"]);

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
var InnerInput = styled__default(reactNumberFormat_es.NumberFormat)(_templateObject2(), function (props) {
  return props.theme.shade[0];
});
function Input(props) {
  return /*#__PURE__*/React__default.createElement(Container, {
    disabled: props.disabled
  }, /*#__PURE__*/React__default.createElement(InnerInput, _rollupPluginBabelHelpers._extends({
    type: "text",
    id: props.id,
    disabled: props.disabled,
    placeholder: props.placeholder,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick
  }, props)));
}
Input.PropTypes = {
  placeholder: index.PropTypes.string
};

exports.default = Input;