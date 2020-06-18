'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('styled-components');
require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./index-58a12fd4.js');
var Input = require('./Input.js');

function ComboBox(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      onInputChanged = _ref.onInputChanged,
      comboSelections = _ref.comboSelections,
      onSelectionMade = _ref.onSelectionMade;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Input.default, {
    value: value,
    onChange: onInputChanged,
    placeholder: placeholder
  }), /*#__PURE__*/React__default.createElement("ul", null, comboSelections && comboSelections.map(function (selection) {
    return /*#__PURE__*/React__default.createElement("li", {
      key: selection.text,
      onClick: function onClick() {
        return onSelectionMade(selection);
      }
    }, selection.text);
  })));
}

exports.default = ComboBox;
