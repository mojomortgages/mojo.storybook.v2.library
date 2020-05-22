'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-f85ace62.js');
var React = _interopDefault(require('react'));

var BackArrow = "<svg width=\"24\" height=\"8\" viewBox=\"0 0 24 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.2605 7.8409L0.143458 4.38409C-0.0478183 4.17196 -0.0478183 3.82804 0.143458 3.61591L3.2605 0.159094C3.45178 -0.0530334 3.7619 -0.0530333 3.95318 0.159094C4.14446 0.371221 4.14446 0.715148 3.95318 0.927275L1.67227 3.45681L24 3.45681L24 4.54319L1.67227 4.54318L3.95318 7.07272C4.14445 7.28485 4.14445 7.62878 3.95318 7.8409C3.7619 8.05303 3.45178 8.05303 3.2605 7.8409Z\" fill=\"#16181A\"/>\n</svg>";

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: relative;\n  background: transparent;\n  border: none;\n  font-size: 1rem;\n  outline: none;\n  padding-left: 32px;\n  color: ", ";\n  cursor: pointer;\n  &:hover {\n    ", " {\n      transform: translate(-4px, 0);\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  width: 24px;\n  height: 8px;\n  background-color: ", ";\n  -webkit-mask: url(", ") no-repeat center;\n  mask: url(", ") no-repeat center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  transition: 0.2s;\n  opacity: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ArrowImg = styled__default.div(_templateObject(), function (props) {
  return props.theme.cta;
}, BackArrow, BackArrow, function (props) {
  return props.disabled ? "0.5" : "1";
});
var Container = styled__default.button(_templateObject2(), function (props) {
  return props.disabled ? props.theme.cta + "80" : props.theme.cta;
}, ArrowImg);
function Button(props) {
  return /*#__PURE__*/React.createElement(Container, {
    disabled: props.disabled,
    onClick: props.onClick
  }, /*#__PURE__*/React.createElement(ArrowImg, {
    disabled: props.disabled
  }), props.children);
}

exports.default = Button;
