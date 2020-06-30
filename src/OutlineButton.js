'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);
var LightenDarkenColor = require('./LightenDarkenColor-93e75230.js');

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  border: ", "\n    2px solid;\n  padding: 16px 24px;\n  border-radius: ", ";\n  font-size: 1rem;\n  color: ", ";\n  background: transparent;\n  cursor: pointer;\n  &:hover {\n    color: ", ";\n    border: ", "\n      2px solid;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default.button(_templateObject(), function (props) {
  return props.disabled ? props.theme.cta + "80" : props.color ? props.color : props.theme.cta;
}, function (props) {
  return props.theme.radius["default"];
}, function (props) {
  return props.disabled ? props.theme.cta + "80" : props.color ? props.color : props.theme.cta;
}, function (props) {
  return props.disabled ? props.theme.cta + "80" : props.color ? LightenDarkenColor.LightenDarkenColor(props.color, 25) : LightenDarkenColor.LightenDarkenColor(props.theme.cta);
}, function (props) {
  return props.disabled ? props.theme.cta + "80" : props.color ? LightenDarkenColor.LightenDarkenColor(props.color, 25) : LightenDarkenColor.LightenDarkenColor(props.theme.cta);
});
function Button(props) {
  return /*#__PURE__*/React__default.createElement(Container, {
    disabled: props.disabled,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick,
    color: props.color
  }, props.children);
}

exports.default = Button;
