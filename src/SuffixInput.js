"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var _rollupPluginBabelHelpers=require("./_rollupPluginBabelHelpers-f85ace62.js"),React=_interopDefault(require("react")),styled=_interopDefault(require("@emotion/styled"));function _templateObject3(){var e=_rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  display: block;\n  border: none;\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  padding: 12px 16px;\n  font-size: 16px;\n  color: ",";\n  box-sizing: border-box;\n  outline: none;\n"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  border-left: 2px solid ",";\n  padding: 0 24px;\n  display: flex;\n  align-items: center;\n  color: ",";\n  font-family: sans-serif;\n  margin: 8px 0;\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  border: 1px solid #cad1dd;\n  background: ",";\n  position: relative;\n  border-radius: ",";\n  display: grid;\n  grid-template-columns: 1fr auto;\n  &:focus-within {\n    border: 1px solid ",";\n    box-shadow: 0 0 4px ",";\n  }\n"]);return _templateObject=function(){return e},e}var Container=styled.div(_templateObject(),function(e){return e.disabled?e.theme.shade[80]:e.theme.shade[100]},function(e){return e.theme.radius.default},function(e){return e.theme.cta},function(e){return e.theme.cta}),Suffix=styled.label(_templateObject2(),function(e){return e.theme.shade[70]},function(e){return e.theme.shade[20]}),InnerInput=styled.input(_templateObject3(),function(e){return e.theme.shade[0]});function Input(e){return React.createElement(Container,{disabled:e.disabled},React.createElement(InnerInput,{type:"text",id:e.id,disabled:e.disabled,placeholder:e.placeholder}),React.createElement(Suffix,{for:e.id},e.suffix))}exports.default=Input;