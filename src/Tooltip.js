'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-7e6b80a7.js');
var React = require('react');
var React__default = _interopDefault(React);

function _templateObject7() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  grid-area: icon;\n  width: 24px;\n  height: 24px;\n  background: red;\n  @media (min-width: ", ") {\n    display: none;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n      @media (max-width: ", ") {\n        display: none;\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  grid-area: hidden;\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n      @media (max-width: ", ") {\n        display: none;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  display: none;\n  grid-area: title;\n  @media (max-width: ", ") {\n    display: block;\n  }\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n      @media (max-width: ", ") {\n        grid-template-areas:\n          \"hidden icon\"\n          \"hidden notused\";\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  padding: 24px;\n  color: ", ";\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: grid;\n  grid-auto-flow: dense;\n  grid-template-columns: auto 24px;\n  grid-gap: 8px;\n  @media (min-width: ", ") {\n    grid-template-areas: \"hidden hidden\";\n  }\n  @media (max-width: ", ") {\n    grid-template-areas: \"title icon\";\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default.div(_templateObject(), function (props) {
  return props.theme.shade[100];
}, function (props) {
  return props.theme.shade[80];
}, function (props) {
  return props.theme.radius.large;
}, function (props) {
  return props.theme.shade[0];
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.isVisible == true && styled.css(_templateObject2(), function (props) {
    return props.theme.breakpoints.md;
  });
});
var Title = styled__default.div(_templateObject3(), function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.isVisible == true && styled.css(_templateObject4(), function (props) {
    return props.theme.breakpoints.md;
  });
});
var Hidden = styled__default.div(_templateObject5(), function (props) {
  return props.isVisible == false && styled.css(_templateObject6(), function (props) {
    return props.theme.breakpoints.md;
  });
});
var Icon = styled__default.div(_templateObject7(), function (props) {
  return props.theme.breakpoints.md;
});
function Tooltip(props) {
  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      Visibility = _useState2[0],
      setVisibility = _useState2[1];

  return /*#__PURE__*/React__default.createElement(Container, {
    isVisible: Visibility
  }, /*#__PURE__*/React__default.createElement(Title, {
    isVisible: Visibility
  }, props.title), /*#__PURE__*/React__default.createElement(Icon, {
    isVisible: Visibility,
    onClick: function onClick() {
      return setVisibility(!Visibility);
    }
  }), /*#__PURE__*/React__default.createElement(Hidden, {
    isVisible: Visibility
  }, props.children));
}

exports.default = Tooltip;
