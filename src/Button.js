'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4edf0050.js');
var React = require('react');
var React__default = _interopDefault(React);

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  background: ", ";\n  padding: 8px 16px;\n  border-radius: ", ";\n  border: none;\n  font-size: 1rem;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default.button(_templateObject(), function (props) {
  return props.disabled ? props.theme.cta + "80" : props.theme.cta;
}, function (props) {
  return props.theme.radius["default"];
}, function (props) {
  return props.theme.shade[100];
});
function Button(props) {
  return /*#__PURE__*/React__default.createElement(Container, {
    disabled: props.disabled,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick
  }, props.children);
}

exports.default = Button;
