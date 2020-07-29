'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./LightenDarkenColor-93e75230.js');
var check = require('./check-b50c1607.js');

function _templateObject5() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  &:checked {\n    + ", " {\n      ", " {\n        background: ", ";\n        &:after {\n          transform: scale(1);\n        }\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  width: 24px;\n  height: 24px;\n  background: ", ";\n  margin-right: 16px;\n  border-radius: 4px;\n  position: relative;\n  transition: 0.2s;\n  flex-shrink: 0;\n  &:after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 12px;\n    height: 12px;\n    transform: scale(0) rotate(45deg);\n    transform-origin: center;\n    transition: 0.2s;\n    background-image: url(\"", "\");\n    background-position: center;\n    background-repeat: no-repeat;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  padding: 16px;\n  align-items: flex-start;\n  transition: 0.2s;\n  cursor: pointer;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Outer = styled__default.div(_templateObject());
var Text = styled__default.div(_templateObject2());
var Container = styled__default.label(_templateObject3(), function (props) {
  return props.theme.shade[0];
});
var Checkmark = styled__default.span(_templateObject4(), function (props) {
  return props.theme.shade[80];
}, check.Check);
var Input = styled__default.input(_templateObject5(), Container, Checkmark, function (props) {
  return props.theme.tertiary;
});
function InlineCheck(props) {
  return /*#__PURE__*/React__default.createElement(Outer, null, /*#__PURE__*/React__default.createElement(Input, {
    type: "checkbox",
    id: props.id,
    name: props.name,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick,
    checked: props.checked
  }), /*#__PURE__*/React__default.createElement(Container, {
    htmlFor: props.id
  }, /*#__PURE__*/React__default.createElement(Checkmark, null), /*#__PURE__*/React__default.createElement(Text, null, props.children)));
}

exports.default = InlineCheck;
