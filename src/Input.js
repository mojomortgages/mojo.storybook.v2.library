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
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  display: block;\n  border: none;\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  padding: 12px ", " 12px 16px;\n  font-size: 16px;\n  color: ", ";\n  box-sizing: border-box;\n  outline: none;\n  &:empty {\n    + ", " {\n      left: 0;\n    }\n  }\n  &:focus,\n  &:not(:placeholder-shown) {\n    + ", " {\n      left: ", ";\n      transform: scale(0.8);\n      /* The 0.5 is to fix a bug with overflow */\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  background: ", ";\n  position: relative;\n  border-radius: ", ";\n  &:focus-within {\n    border: 1px solid ", ";\n    box-shadow: 0 0 4px ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: absolute;\n  display: block;\n  transition: 0.4s;\n  padding-left: 16px;\n  padding-right: 16px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  line-height: 44px;\n  pointer-events: none;\n  user-select: none;\n  color: ", ";\n  z-index: 1;\n  box-sizing: border-box;\n  transform-origin: right center;\n"]);

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
}, function (props) {
  return props.theme.cta;
});
var InnerInput = styled__default.input(_templateObject3(), function (props) {
  return props.labelOffset * 0.8 + 16 + "px";
}, function (props) {
  return props.disabled ? props.theme.shade[40] : props.theme.shade[0];
}, Label, Label, function (props) {
  return props.inputOffset - props.labelOffset - 1 + "px";
});
var animation = styled.keyframes(_templateObject4());
var Loader = styled__default.div(_templateObject5(), function (props) {
  return props.theme.shade[60];
}, animation, function (props) {
  return props.isLoading ? "block" : "none";
});
function Input(props) {
  var _useState = React.useState(0),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      inputWidth = _useState2[0],
      setInputWidth = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _rollupPluginBabelHelpers._slicedToArray(_useState3, 2),
      labelWidth = _useState4[0],
      setLabelWidth = _useState4[1];

  var inputRef = React.useRef(null);
  var labelRef = React.useRef(null);
  React.useEffect(function () {
    setInputWidth(inputRef.current.clientWidth);
    setLabelWidth(labelRef.current.clientWidth);
  });
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
    placeholder: " "
  }, props, {
    inputOffset: inputWidth,
    labelOffset: labelWidth,
    ref: inputRef
  })), /*#__PURE__*/React__default.createElement(Label, {
    ref: labelRef,
    inputOffset: inputWidth,
    labelOffset: labelWidth,
    "for": props.id,
    disabled: props.disabled
  }, props.label));
}
Input.PropTypes = {
  placeholder: index.PropTypes.string
};

exports.default = Input;
