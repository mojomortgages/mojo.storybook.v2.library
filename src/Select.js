'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4edf0050.js');
var React = require('react');
var React__default = _interopDefault(React);

var img = "data:image/svg+xml,%3csvg width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.8489 11.5361L11.3817 5.86201C11.7965 5.1959 11.3175 4.33346 10.5328 4.33346L3.46717 4.33346C2.6825 4.33346 2.20353 5.1959 2.61827 5.86201L6.1511 11.5361C6.54248 12.1647 7.45752 12.1647 7.8489 11.5361Z' fill='%2361676E'/%3e%3c/svg%3e";

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  color: ", ";\n  padding: 12px 16px;\n  font-size: 1rem;\n  border-radius: ", ";\n  box-sizing: border-box;\n  display: block;\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  padding: 12px 16px;\n  font-size: 16px;\n  box-sizing: border-box;\n  outline: none;\n  background-color: ", ";\n  background-image: url(\"", "\");\n  background-position: right 20px top calc(50% - 2px);\n  background-repeat: no-repeat;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  text-indent: 1px;\n  text-overflow: \"\";\n  &:focus {\n    border: 1px solid ", ";\n    box-shadow: 0 0 4px ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Select = styled__default.select(_templateObject(), function (props) {
  return props.theme.shade[60];
}, function (props) {
  return props.theme.shade[0];
}, function (props) {
  return props.theme.radius["default"];
}, function (props) {
  return props.disabled ? props.theme.shade[80] : props.theme.shade[100];
}, img, function (props) {
  return props.theme.cta;
}, function (props) {
  return props.theme.cta;
});
function SelectInput(props) {
  return /*#__PURE__*/React__default.createElement(Select, _rollupPluginBabelHelpers._extends({
    id: props.id,
    disabled: props.disabled,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick
  }, props), props.children);
}

exports.default = SelectInput;
