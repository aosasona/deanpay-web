import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (c7b9e3d)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const enabledGestures={"DdEwI0wBN":{"hover":true}};const cycleOrder=["DdEwI0wBN"];const variantClassNames={"DdEwI0wBN":"framer-v-zqap0d"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style:externalStyle={},className,width,height,layoutId,variant:outerVariant="DdEwI0wBN",title:rmmKBVL3v="Fund Account",year:ZHCM0C7ER="2022-16-03 00:12",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"DdEwI0wBN",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const variantProps=React.useMemo(()=>({"DdEwI0wBN-hover":{"DdEwI0wBN":{"data-border":true,"background":null},"rf3BX17cH":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Fund Account</span><br></span></span>","fonts":["GF;Poppins-500"]},"i0kIILpBE":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>2022-16-03 00:12</span><br></span></span>","fonts":["GF;Poppins-300"]}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-5tbMU",classNames),style:{"display":"contents","pointerEvents":pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:"auto"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"DdEwI0wBN",className:cx("framer-zqap0d",className),style:{"borderBottomLeftRadius":16,"borderBottomRightRadius":16,"borderTopRightRadius":16,"borderTopLeftRadius":16,"backgroundColor":"rgb(27, 116, 251)",...style},"data-framer-name":"Variant 1",transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("DdEwI0wBN"),variants:{"DdEwI0wBN-hover":{"backgroundColor":"transparent","--border-bottom-width":"2px","--border-top-width":"2px","--border-right-width":"2px","--border-left-width":"2px","--border-style":"solid","--border-color":"rgb(27, 116, 251)"}},children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Poppins\", serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"15px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Poppins-500"],layoutId:"rf3BX17cH",className:"framer-3eacov",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Fund Account</span><br></span></span>",text:rmmKBVL3v,transition:transition,layoutDependency:layoutDependency,...addVariantProps("rf3BX17cH"),variants:{"DdEwI0wBN-hover":{"--framer-text-color":"rgb(27, 116, 251)"}}}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Poppins\", serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"10px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Poppins-300"],layoutId:"i0kIILpBE",className:"framer-1k7yorf",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>2022-16-03 00:12</span><br></span></span>",text:ZHCM0C7ER,transition:transition,layoutDependency:layoutDependency,...addVariantProps("i0kIILpBE"),variants:{"DdEwI0wBN-hover":{"--framer-text-color":"rgb(66, 142, 255)"}}})]})})}));});const css=[".framer-5tbMU [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-5tbMU * { box-sizing: border-box; }",".framer-5tbMU .framer-zqap0d { position: relative; overflow: visible; width: 286px; height: 68px; }",".framer-5tbMU .framer-3eacov { position: absolute; width: auto; height: auto; left: 47px; top: 16px; flex: none; white-space: pre; }",".framer-5tbMU .framer-1k7yorf { position: absolute; width: auto; height: auto; left: 47px; top: 39px; flex: none; white-space: pre; }",".framer-5tbMU.framer-v-zqap0d .framer-zqap0d { cursor: pointer; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 68
 * @framerIntrinsicWidth 286
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "NUdjsuicc": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"rmmKBVL3v": "title", "ZHCM0C7ER": "year"}
 */ const FramerJ5Zb9Ie3y=withCSS(Component,css);export default FramerJ5Zb9Ie3y;FramerJ5Zb9Ie3y.displayName="Transaction";FramerJ5Zb9Ie3y.defaultProps={"width":286,"height":68};addPropertyControls(FramerJ5Zb9Ie3y,{"rmmKBVL3v":{"type":ControlType.String,"title":"Title","defaultValue":"Fund Account","displayTextArea":false},"ZHCM0C7ER":{"type":ControlType.String,"title":"Year","defaultValue":"2022-16-03 00:12","displayTextArea":false}});addFonts(FramerJ5Zb9Ie3y,[{"url":"https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf","family":"Poppins","style":"normal","weight":"500","moduleAsset":{"url":"https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf","localModuleIdentifier":"local-module:canvasComponent/J5Zb9Ie3y:default"}},{"url":"https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf","family":"Poppins","style":"normal","weight":"300","moduleAsset":{"url":"https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf","localModuleIdentifier":"local-module:canvasComponent/J5Zb9Ie3y:default"}}]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerJ5Zb9Ie3y","slots":[],"annotations":{"framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"NUdjsuicc\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerIntrinsicHeight":"68","framerIntrinsicWidth":"286","framerVariables":"{\"rmmKBVL3v\": \"title\", \"ZHCM0C7ER\": \"year\"}","framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./J5Zb9Ie3y.map