'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styledBase_esm = require('./styled-base.esm-a8dfde3a.js');
var React = require('react');
var React__default = _interopDefault(React);

var Bar = styledBase_esm._styled("div", {
  target: "enhd7y40",
  label: "Bar"
})("width:100%;height:24px;background:", function (props) {
  return props.theme.shade[90];
}, ";border-radius:24px;overflow:hidden;position:relative;&:before{}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyZXNzQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdzQiIsImZpbGUiOiJQcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBCYXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2hhZGVbOTBdfTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOmJlZm9yZSB7XG4gIH1cbmA7XG5jb25zdCBNZXRlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMucHJvZ3Jlc3N9JTtcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnByaW1hcnl9O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zaGFkZVsxMDBdfTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2UtaW4tb3V0O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEJhcj5cbiAgICAgIDxNZXRlciBwcm9ncmVzcz17cHJvcHMucHJvZ3Jlc3N9Pntwcm9wcy5wcm9ncmVzc30lPC9NZXRlcj5cbiAgICA8L0Jhcj5cbiAgKTtcbn1cbiJdfQ== */"));

var Meter = styledBase_esm._styled("div", {
  target: "enhd7y41",
  label: "Meter"
})("position:absolute;left:0;top:0;height:100%;width:", function (props) {
  return props.progress;
}, "%;background:", function (props) {
  return props.theme.primary;
}, ";border-radius:24px;text-align:right;padding-right:16px;color:", function (props) {
  return props.theme.shade[100];
}, ";font-family:sans-serif;line-height:24px;transition:0.8s ease-in-out;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyZXNzQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWF3QiIsImZpbGUiOiJQcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBCYXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2hhZGVbOTBdfTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOmJlZm9yZSB7XG4gIH1cbmA7XG5jb25zdCBNZXRlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMucHJvZ3Jlc3N9JTtcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnByaW1hcnl9O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zaGFkZVsxMDBdfTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2UtaW4tb3V0O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEJhcj5cbiAgICAgIDxNZXRlciBwcm9ncmVzcz17cHJvcHMucHJvZ3Jlc3N9Pntwcm9wcy5wcm9ncmVzc30lPC9NZXRlcj5cbiAgICA8L0Jhcj5cbiAgKTtcbn1cbiJdfQ== */"));

function Button(props) {
  return /*#__PURE__*/React__default.createElement(Bar, null, /*#__PURE__*/React__default.createElement(Meter, {
    progress: props.progress
  }, props.progress, "%"));
}

exports.default = Button;
