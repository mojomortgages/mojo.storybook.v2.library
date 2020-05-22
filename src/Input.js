'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styledBase_esm = require('./styled-base.esm-a8dfde3a.js');
var React = require('react');
var React__default = _interopDefault(React);

var Container = styledBase_esm._styled("div", {
  target: "etg488a0",
  label: "Container"
})("border:1px solid #cad1dd;background:", function (props) {
  return props.disabled ? props.theme.shade[80] : props.theme.shade[100];
}, ";position:relative;border-radius:", function (props) {
  return props.theme.radius["default"];
}, ";&:focus-within{border:1px solid ", function (props) {
  return props.theme.cta;
}, ";box-shadow:0 0 4px ", function (props) {
  return props.theme.cta;
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUc0QiIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FkMWRkO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5kaXNhYmxlZCA/IHByb3BzLnRoZW1lLnNoYWRlWzgwXSA6IHByb3BzLnRoZW1lLnNoYWRlWzEwMF19O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yYWRpdXMuZGVmYXVsdH07XG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY3RhfTtcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jdGF9O1xuICB9XG5gO1xuY29uc3QgSW5uZXJJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNoYWRlWzBdfTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9PlxuICAgICAgPElubmVySW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD17cHJvcHMuaWR9XG4gICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdfQ== */"));

var InnerInput = styledBase_esm._styled("input", {
  target: "etg488a1",
  label: "InnerInput"
})("display:block;border:none;background:transparent;width:100%;height:100%;padding:12px 16px;font-size:16px;color:", function (props) {
  return props.theme.shade[0];
}, ";box-sizing:border-box;outline:none;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWMrQiIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FkMWRkO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5kaXNhYmxlZCA/IHByb3BzLnRoZW1lLnNoYWRlWzgwXSA6IHByb3BzLnRoZW1lLnNoYWRlWzEwMF19O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yYWRpdXMuZGVmYXVsdH07XG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY3RhfTtcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jdGF9O1xuICB9XG5gO1xuY29uc3QgSW5uZXJJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNoYWRlWzBdfTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9PlxuICAgICAgPElubmVySW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD17cHJvcHMuaWR9XG4gICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdfQ== */"));

function Input(props) {
  return /*#__PURE__*/React__default.createElement(Container, {
    disabled: props.disabled
  }, /*#__PURE__*/React__default.createElement(InnerInput, {
    type: "text",
    id: props.id,
    disabled: props.disabled,
    placeholder: props.placeholder
  }));
}

exports.default = Input;
