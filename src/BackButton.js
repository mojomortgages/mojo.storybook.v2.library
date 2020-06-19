'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);

const img = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M21.018 12.4347C21.2023 12.4252 21.3473 12.2741 21.3493 12.0896C21.3513 11.9052 21.2095 11.751 21.0255 11.7375L10.5516 10.9705C9.96889 10.9278 9.47258 11.3891 9.47258 11.9734C9.47258 12.5492 9.95514 13.0074 10.5302 12.9777L21.018 12.4347Z' fill='%2361676E' stroke='%2361676E' stroke-width='0.698631' stroke-linejoin='round'/%3e%3cpath d='M4.29138 11.3838L10.3246 6.55726C10.9966 6.01967 11.9672 6.64249 11.7585 7.47736L10.6608 11.8678C10.6251 12.011 10.6251 12.1608 10.6608 12.3039L11.7585 16.6944C11.9672 17.5293 10.9966 18.1521 10.3246 17.6145L4.29138 12.7879C3.84148 12.428 3.84148 11.7438 4.29138 11.3838Z' fill='%2361676E'/%3e%3c/svg%3e";

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: relative;\n  background: transparent;\n  border: none;\n  font-size: 1rem;\n  outline: none;\n  padding-left: 32px;\n  color: ", ";\n  text-align: left;\n  cursor: pointer;\n  &:hover {\n    ", " {\n      transform: translate(-4px, 0);\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  width: 24px;\n  height: 24px;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  transition: 0.2s;\n  opacity: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ArrowImg = styled__default.div(_templateObject(), "'" + img + "'", function (props) {
  return props.disabled ? "0.5" : "1";
});
var Container = styled__default.button(_templateObject2(), function (props) {
  return props.theme.shade[0];
}, ArrowImg);
function BackButton(props) {
  return /*#__PURE__*/React__default.createElement(Container, {
    disabled: props.disabled,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick
  }, /*#__PURE__*/React__default.createElement(ArrowImg, {
    disabled: props.disabled
  }), props.children);
}

exports.default = BackButton;
