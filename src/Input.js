'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-58a12fd4.js');

function _templateObject5() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: ", ";\n  width: 32px;\n  height: 32px;\n  margin: auto;\n  border-radius: 50%;\n  transform-origin: center;\n  animation: ", " 1s infinite alternate;\n  user-select: none;\n  pointer-events: none;\n  display: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n    transform: scale(0)\n  }\n\n  100 {\n    opacity: 1;\n    transform: scale(1)\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  display: block;\n  border: none;\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  padding: 12px ", " 12px 16px;\n  font-size: 16px;\n  color: ", ";\n  box-sizing: border-box;\n  outline: none;\n  &:empty {\n    + ", " {\n      width: 0;\n    }\n  }\n  &:focus,\n  &:not(:placeholder-shown) {\n    + ", " {\n      width: 100%;\n      p {\n        transform-origin: right;\n        transform: scale(0.8);\n      }\n      /* The 0.5 is to fix a bug with overflow */\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  background: ", ";\n  position: relative;\n  border-radius: ", ";\n  padding: 1px;\n  &:focus-within {\n    padding: 0;\n    border: 2px solid ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  display: block;\n  transition: 0.4s;\n  padding-left: 16px;\n  padding-right: 16px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  line-height: 44px;\n  pointer-events: none;\n  user-select: none;\n  color: ", ";\n  z-index: 1;\n  white-space: nowrap;\n  text-align: right;\n  p {\n    display: inline-block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Label = styled__default.label(_templateObject(), function (props) {
  return props.theme.shade[20];
});
var Container = styled__default.div(_templateObject2(), function (props) {
  return props.theme.shade[60];
}, function (props) {
  return props.disabled ? props.theme.shade[80] : props.theme.shade[100];
}, function (props) {
  return props.theme.radius["default"];
}, function (props) {
  return props.theme.cta;
});
var InnerInput = styled__default.input(_templateObject3(), function (props) {
  return props.labelOffset * 0.9 + 32 + "px";
}, function (props) {
  return props.disabled ? props.theme.shade[40] : props.theme.shade[0];
}, Label, Label);
var animation = styled.keyframes(_templateObject4());
var Loader = styled__default.div(_templateObject5(), function (props) {
  return props.theme.shade[60];
}, animation, function (props) {
  return props.isLoading ? "block" : "none";
});
function Input(props) {
  var _React$useState = React__default.useState({
    labelWidth: 0
  }),
      _React$useState2 = _rollupPluginBabelHelpers._slicedToArray(_React$useState, 2),
      dimensions = _React$useState2[0],
      setDimensions = _React$useState2[1];

  var labelRef = React.useRef(null);
  React.useEffect(function () {
    setDimensions({
      labelWidth: labelRef.current.clientWidth
    });
  }, []);
  return /*#__PURE__*/React__default.createElement(Container, {
    disabled: props.disabled
  }, /*#__PURE__*/React__default.createElement(Loader, {
    isLoading: props.isLoading
  }), /*#__PURE__*/React__default.createElement(InnerInput, _rollupPluginBabelHelpers._extends({
    type: "text",
    id: props.id,
    disabled: props.disabled,
    value: props.value,
    onChange: props.onChange,
    onClick: props.onClick,
    placeholder: " ",
    autoComplete: "off",
    labelOffset: dimensions.labelWidth
  }, props)), /*#__PURE__*/React__default.createElement(Label, {
    htmlFor: props.id,
    disabled: props.disabled
  }, /*#__PURE__*/React__default.createElement("p", {
    ref: labelRef
  }, props.label)));
}
Input.propTypes = {
  placeholder: index.PropTypes.string
};

exports.default = Input;
