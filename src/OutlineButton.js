'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styledBase_esm = require('./styled-base.esm-a8dfde3a.js');
var React = require('react');
var React__default = _interopDefault(React);

var Container = styledBase_esm._styled("button", {
  target: "ets36n00",
  label: "Container"
})("border:", function (props) {
  return props.disabled ? props.theme.cta + "80" : props.theme.cta;
}, " 2px solid;padding:8px 16px;border-radius:", function (props) {
  return props.theme.radius["default"];
}, ";font-size:1rem;color:", function (props) {
  return props.disabled ? props.theme.cta + "80" : props.theme.cta;
}, ";background:transparent;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk91dGxpbmVCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRytCIiwiZmlsZSI6Ik91dGxpbmVCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiAkeyhwcm9wcykgPT5cbiAgICAgIHByb3BzLmRpc2FibGVkID8gcHJvcHMudGhlbWUuY3RhICsgXCI4MFwiIDogcHJvcHMudGhlbWUuY3RhfVxuICAgIDJweCBzb2xpZDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yYWRpdXMuZGVmYXVsdH07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmRpc2FibGVkID8gcHJvcHMudGhlbWUuY3RhICsgXCI4MFwiIDogcHJvcHMudGhlbWUuY3RhfTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0gb25DbGljaz17cHJvcHMub25DbGlja30+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXX0= */"));

function Button(props) {
  return /*#__PURE__*/React__default.createElement(Container, {
    disabled: props.disabled,
    onClick: props.onClick
  }, props.children);
}

exports.default = Button;
