'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./index-58a12fd4.js');
var Input = require('./Input.js');

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  padding: 16px;\n  cursor: pointer;\n  max-height: 240px;\n  border-top: 1px solid ", ";\n  :hover {\n    background: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 4px;\n  overflow: auto;\n  border: 1px solid ", ";\n  :empty {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var List = styled__default.div(_templateObject(), function (props) {
  return props.theme.shade[100];
}, function (props) {
  return props.theme.shade[60];
});
var ListItem = styled__default.div(_templateObject2(), function (props) {
  return props.theme.shade[60];
}, function (props) {
  return props.theme.shade[80];
});
function ComboBox(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onInputChanged = _ref.onInputChanged,
      comboSelections = _ref.comboSelections,
      onSelectionMade = _ref.onSelectionMade,
      isLoading = _ref.isLoading,
      disabled = _ref.disabled;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Input.default, {
    value: value,
    onChange: onInputChanged,
    label: label,
    isLoading: isLoading,
    disabled: disabled
  }), /*#__PURE__*/React__default.createElement(List, null, comboSelections && comboSelections.map(function (selection) {
    return /*#__PURE__*/React__default.createElement(ListItem, {
      key: selection.text,
      onClick: function onClick() {
        return onSelectionMade(selection);
      }
    }, selection.text);
  })));
}

exports.default = ComboBox;
