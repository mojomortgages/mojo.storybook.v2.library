'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styledBase_esm = require('./styled-base.esm-a8dfde3a.js');
var React = require('react');
var React__default = _interopDefault(React);

var Container = styledBase_esm._styled("button", {
  target: "e2tzbjw0",
  label: "Container"
})("background:", function (props) {
  return props.disabled ? props.theme.cta + "80" : props.theme.cta;
}, ";padding:8px 16px;border-radius:", function (props) {
  return props.theme.radius["default"];
}, ";border:none;font-size:1rem;color:", function (props) {
  return props.theme.shade[100];
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHK0IiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmRpc2FibGVkID8gcHJvcHMudGhlbWUuY3RhICsgXCI4MFwiIDogcHJvcHMudGhlbWUuY3RhfTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yYWRpdXMuZGVmYXVsdH07XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNoYWRlWzEwMF19O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl19 */"));

function Button(props) {
  return /*#__PURE__*/React__default.createElement(Container, {
    disabled: props.disabled,
    onClick: props.onClick
  }, props.children);
}

exports.default = Button;
