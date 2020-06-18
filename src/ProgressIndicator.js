'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);
var check = require('./check-d69a2232.js');

function _templateObject5() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 12px;\n  height: 12px;\n  transform: scale(0) rotate(45deg);\n  transform-origin: center;\n  transition: 0.2s;\n  background-image: url(", ");\n  background-position: center;\n  background-repeat: no-repeat;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n        border: 5px solid ", ";\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n        border: 5px solid ", ";\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n        background: ", ";\n        ", " {\n          opacity: 1;\n          transform: scale(1);\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  width: 18px;\n  height: 18px;\n  border-radius: 18px;\n  position: relative;\n  transition: 0.2s;\n  box-sizing: border-box;\n    ", "\n    ", "\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default.div(_templateObject(), function (props) {
  return props.status == "complete" && styled.css(_templateObject2(), function (props) {
    return props.theme.primary;
  }, Indicator);
}, function (props) {
  return props.status == "active" && styled.css(_templateObject3(), function (props) {
    return props.theme.primary;
  });
}, function (props) {
  return props.status == "incomplete" && styled.css(_templateObject4(), function (props) {
    return props.theme.shade[70];
  });
});
var Indicator = styled__default.div(_templateObject5(), check.Check);
function ProgressIndicator(props) {
  return /*#__PURE__*/React__default.createElement(Container, {
    status: props.status
  }, /*#__PURE__*/React__default.createElement(Indicator, {
    status: props.status
  }));
}

exports.default = ProgressIndicator;
