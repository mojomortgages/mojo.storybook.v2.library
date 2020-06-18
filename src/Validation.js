'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);

function _templateObject5() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n      color: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  margin: 0;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n      background: ", ";\n      &:before,\n      &:after {\n        content: \"\";\n        width: 2px;\n        height: 9px;\n        position: absolute;\n        top: 0;\n        right: 0;\n        left: 0;\n        bottom: 0;\n        margin: auto;\n        background: ", ";\n      }\n      &:before {\n        transform: rotate(45deg);\n      }\n      &:after {\n        transform: rotate(-45deg);\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: relative;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 16px auto;\n  grid-gap: 8px;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default.div(_templateObject());
var Icon = styled__default.div(_templateObject2(), function (props) {
  return props.status == "error" && styled.css(_templateObject3(), function (props) {
    return props.theme.error;
  }, function (props) {
    return props.theme.shade[100];
  });
});
var Text = styled__default.p(_templateObject4(), function (props) {
  return props.status == "error" && styled.css(_templateObject5(), function (props) {
    return props.theme.error;
  });
});
function Validation(props) {
  return /*#__PURE__*/React__default.createElement(Container, null, /*#__PURE__*/React__default.createElement(Icon, {
    status: props.status
  }), /*#__PURE__*/React__default.createElement(Text, {
    status: props.status
  }, props.children));
}

exports.default = Validation;
