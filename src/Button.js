'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);
var LightenDarkenColor = require('./LightenDarkenColor-93e75230.js');

function getContrast(hexcolor) {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === "#") {
    hexcolor = hexcolor.slice(1);
  } // If a three-character hexcode, make six-character


  if (hexcolor.length === 3) {
    hexcolor = hexcolor.split("").map(function (hex) {
      return hex + hex;
    }).join("");
  } // Convert to RGB value


  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16); // Get YIQ ratio

  var yiq = (r * 299 + g * 587 + b * 114) / 1000; // Check contrast

  return yiq >= 128 ? "black" : "white";
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  background: ", ";\n  padding: 16px 24px;\n  border-radius: ", ";\n  border: none;\n  font-size: 1rem;\n  color: ", ";\n  transition: background 0.2s;\n  cursor: pointer;\n  &:hover {\n    background: ", ";\n  }\n"]);

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
  return props.color ? getContrast(props.color) : getContrast(props.theme.primary);
}, function (props) {
  return props.disabled ? props.theme.cta + "80" : props.color ? LightenDarkenColor.LightenDarkenColor(props.color, 25) : LightenDarkenColor.LightenDarkenColor(props.theme.cta, 25);
});
function Button(props) {
  return /*#__PURE__*/React__default.createElement(Container, {
    id: props.id,
    disabled: props.disabled,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick,
    color: props.color,
    text: props.text
  }, props.children);
}

exports.default = Button;
