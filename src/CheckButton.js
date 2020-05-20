"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var _rollupPluginBabelHelpers=require("./_rollupPluginBabelHelpers-f85ace62.js"),React=_interopDefault(require("react")),styled=_interopDefault(require("@emotion/styled"));function _templateObject4(){var e=_rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n  &:checked {\n    + "," {\n      box-shadow: 0 0 0 2px ",";\n      "," {\n        border: 2px solid ",";\n        &:after {\n          transform: scale(1);\n        }\n      }\n    }\n  }\n"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  width: 24px;\n  height: 24px;\n  background: ",";\n  border: 2px solid ",';\n  margin-right: 16px;\n  border-radius: 100%;\n  position: relative;\n  &:after {\n    content: "";\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background: ',";\n    transform: scale(0);\n    transform-origin: center;\n    transition: 0.4s;\n  }\n"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_rollupPluginBabelHelpers._taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  padding: 16px;\n  background: ",";\n  box-shadow: 0 0 0 1px ",";\n  border-radius: ",";\n  align-items: center;\n  transition: background 0.2s, box-shadow 0.4s;\n  cursor: pointer;\n  color: ",";\n  &:hover {\n    background: ",";\n  }\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_rollupPluginBabelHelpers._taggedTemplateLiteral(['\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n']);return _templateObject=function(){return e},e}var Text=styled.div(_templateObject()),Container=styled.label(_templateObject2(),function(e){return e.theme.shade[100]},function(e){return e.theme.shade[60]},function(e){return e.theme.radius.default},function(e){return e.theme.shade[10]},function(e){return e.theme.shade[80]}),Checkmark=styled.span(_templateObject3(),function(e){return e.theme.shade[80]},function(e){return e.theme.shade[60]},function(e){return e.theme.primary}),Input=styled.input(_templateObject4(),Container,function(e){return e.theme.primary},Checkmark,function(e){return e.theme.primary});function Button(e){return React.createElement(React.Fragment,null,React.createElement(Input,{type:"radio",id:e.id,name:e.name,value:e.value}),React.createElement(Container,{htmlFor:e.id},React.createElement(Checkmark,null),React.createElement(Text,null,e.children)))}exports.default=Button;
