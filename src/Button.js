'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-f85ace62.js');
var React = _interopDefault(require('react'));

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
  return /*#__PURE__*/React.createElement(Container, {
    disabled: props.disabled,
    onClick: props.onClick
  }, props.children);
}

exports.default = Button;
