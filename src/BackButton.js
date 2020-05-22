'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styledBase_esm = require('./styled-base.esm-a8dfde3a.js');
var React = require('react');
var React__default = _interopDefault(React);

var BackArrow = "<svg width=\"24\" height=\"8\" viewBox=\"0 0 24 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.2605 7.8409L0.143458 4.38409C-0.0478183 4.17196 -0.0478183 3.82804 0.143458 3.61591L3.2605 0.159094C3.45178 -0.0530334 3.7619 -0.0530333 3.95318 0.159094C4.14446 0.371221 4.14446 0.715148 3.95318 0.927275L1.67227 3.45681L24 3.45681L24 4.54319L1.67227 4.54318L3.95318 7.07272C4.14445 7.28485 4.14445 7.62878 3.95318 7.8409C3.7619 8.05303 3.45178 8.05303 3.2605 7.8409Z\" fill=\"#16181A\"/>\n</svg>";

var ArrowImg = styledBase_esm._styled("div", {
  target: "e1dw2baa0",
  label: "ArrowImg"
})("width:24px;height:8px;background-color:", function (props) {
  return props.theme.cta;
}, ";-webkit-mask:url(", BackArrow, ") no-repeat center;mask:url(", BackArrow, ") no-repeat center;position:absolute;left:0;top:0;bottom:0;margin:auto;transition:0.2s;opacity:", function (props) {
  return props.disabled ? "0.5" : "1";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhY2tCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSzJCIiwiZmlsZSI6IkJhY2tCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuaW1wb3J0IEJhY2tBcnJvdyBmcm9tIFwiLi4vLi4vaW1hZ2VzL3V0aWxpdHkvYmFjay1hcnJvdy5zdmdcIjtcblxuY29uc3QgQXJyb3dJbWcgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jdGF9O1xuICAtd2Via2l0LW1hc2s6IHVybCgke0JhY2tBcnJvd30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIG1hc2s6IHVybCgke0JhY2tBcnJvd30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgb3BhY2l0eTogJHsocHJvcHMpID0+IChwcm9wcy5kaXNhYmxlZCA/IGAwLjVgIDogYDFgKX07XG5gO1xuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmRpc2FibGVkID8gcHJvcHMudGhlbWUuY3RhICsgXCI4MFwiIDogcHJvcHMudGhlbWUuY3RhfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIHtcbiAgICAke0Fycm93SW1nfSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAwKTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cbiAgICAgIDxBcnJvd0ltZyBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IC8+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXX0= */"));

var Container = styledBase_esm._styled("button", {
  target: "e1dw2baa1",
  label: "Container"
})("position:relative;background:transparent;border:none;font-size:1rem;outline:none;padding-left:32px;color:", function (props) {
  return props.disabled ? props.theme.cta + "80" : props.theme.cta;
}, ";cursor:pointer;&:hover{", ArrowImg, "{transform:translate(-4px,0);}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhY2tCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUIrQiIsImZpbGUiOiJCYWNrQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmltcG9ydCBCYWNrQXJyb3cgZnJvbSBcIi4uLy4uL2ltYWdlcy91dGlsaXR5L2JhY2stYXJyb3cuc3ZnXCI7XG5cbmNvbnN0IEFycm93SW1nID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY3RhfTtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJHtCYWNrQXJyb3d9KSBuby1yZXBlYXQgY2VudGVyO1xuICBtYXNrOiB1cmwoJHtCYWNrQXJyb3d9KSBuby1yZXBlYXQgY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMuZGlzYWJsZWQgPyBgMC41YCA6IGAxYCl9O1xuYDtcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIGNvbG9yOiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5kaXNhYmxlZCA/IHByb3BzLnRoZW1lLmN0YSArIFwiODBcIiA6IHByb3BzLnRoZW1lLmN0YX07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgJHtBcnJvd0ltZ30ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgMCk7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0gb25DbGljaz17cHJvcHMub25DbGlja30+XG4gICAgICA8QXJyb3dJbWcgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfSAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl19 */"));

function Button(props) {
  return /*#__PURE__*/React__default.createElement(Container, {
    disabled: props.disabled,
    onClick: props.onClick
  }, /*#__PURE__*/React__default.createElement(ArrowImg, {
    disabled: props.disabled
  }), props.children);
}

exports.default = Button;
