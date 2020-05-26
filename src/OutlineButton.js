'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-000d8ab5.js');
var React = _interopDefault(require('react'));

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  border: ", "\n    2px solid;\n  padding: 8px 16px;\n  border-radius: ", ";\n  font-size: 1rem;\n  color: ", ";\n  background: transparent;\n"]);

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
  return props.disabled ? props.theme.cta + "80" : props.theme.cta;
});
function Button(props) {
  return /*#__PURE__*/React.createElement(Container, {
    disabled: props.disabled,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick
  }, props.children);
}

exports.default = Button;
