"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5184,7918],{9176:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>O,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>C,toc:()=>_});var a=n(7462),r=n(7294),o=n(3905),l=n(6383),i=n(8007);var s=n(2300);const c=t=>{const{data:e,colors:{backgroundColor:n=CHART_BACKGROUND_COLOR,lineColor:a=LINE_LINE_COLOR,textColor:o=CHART_TEXT_COLOR,areaTopColor:l=AREA_TOP_COLOR,areaBottomColor:i=AREA_BOTTOM_COLOR}={}}=t,c=(0,r.useRef)();return(0,r.useEffect)((()=>{const t=()=>{r.applyOptions({width:c.current.clientWidth})},r=(0,s.C2)(c.current,{layout:{background:{type:s.Mr.Solid,color:n},textColor:o},width:c.current.clientWidth,height:300});r.timeScale().fitContent();return r.addAreaSeries({lineColor:a,topColor:l,bottomColor:i}).setData(e),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),r.remove()}}),[e,n,a,o,l,i]),r.createElement("div",{ref:c})},p=[{time:"2018-12-22",value:32.51},{time:"2018-12-23",value:31.11},{time:"2018-12-24",value:27.02},{time:"2018-12-25",value:27.32},{time:"2018-12-26",value:25.17},{time:"2018-12-27",value:28.89},{time:"2018-12-28",value:25.46},{time:"2018-12-29",value:23.92},{time:"2018-12-30",value:22.68},{time:"2018-12-31",value:22.67}];function u(t){return r.createElement(c,(0,a.Z)({},t,{data:p}))}var d=n(5804);const h={sidebar_label:"Simple example",hide_table_of_contents:!0},m="React - Simple example",C={unversionedId:"react/simple",id:"react/simple",title:"React - Simple example",description:"The following only describes a relatively simple example that only renders an area series that could be tweaked to render any other type of series.",source:"@site/tutorials/react/01-simple.mdx",sourceDirName:"react",slug:"/react/simple",permalink:"/lightweight-charts/tutorials/react/simple",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Simple example",hide_table_of_contents:!0},sidebar:"tutorialsSidebar",previous:{title:"Conclusion",permalink:"/lightweight-charts/tutorials/customization/conclusion"},next:{title:"Advanced example",permalink:"/lightweight-charts/tutorials/react/advanced"}},O={},_=[{value:"Preparing your project",id:"preparing-your-project",level:2},{value:"Creating a charting component",id:"creating-a-charting-component",level:2}],R={toc:_};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},R,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react---simple-example"},"React - Simple example"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The following only describes a relatively simple example that only renders an ",(0,o.kt)("a",{parentName:"p",href:"/docs/series-types#area"},"area series")," that could be tweaked to render any other type of ",(0,o.kt)("a",{parentName:"p",href:"/docs/series-types"},"series"),"."),(0,o.kt)("p",{parentName:"admonition"},"For a more complete scenario where you could wrap Lightweight Charts into a component having sub components, please consult this ",(0,o.kt)("a",{parentName:"p",href:"./advanced"},"example"),".")),(0,o.kt)("p",null,"On this page you will learn how to easily use Lightweight Charts with React."),(0,o.kt)("h2",{id:"preparing-your-project"},"Preparing your project"),(0,o.kt)("p",null,"For the example purpose we are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brandiqa/react-parcel-starter"},"Parcel starter kit")," but feel free to use any other tool or starter kit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"git clone git@github.com:brandiqa/react-parcel-starter.git lwc-react\ncd lwc-react\nnpm install\n")),(0,o.kt)("p",null,"To run your project simply"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm start\n")),(0,o.kt)("p",null,"This will create a web page accessible by default on ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:1234/"},"http://localhost:1234/"),"."),(0,o.kt)("h2",{id:"creating-a-charting-component"},"Creating a charting component"),(0,o.kt)("p",null,"The example ",(0,o.kt)("em",{parentName:"p"},"React component")," on this page may not fit your requirements completely. Creating a general purpose declarative wrapper for Lightweight Charts' imperative API is a challenge, but hopefully you can adapt this example to your use case."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For this example we are using props to set chart colors based on the current theme (light or dark). In your real code it might be a better idea to use a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#when-to-use-context"},"Context"),".")),(0,o.kt)(i.ZP,{replaceThemeConstants:!0,className:"language-jsx",mdxType:"CodeBlock"},"// delete-start\n/* Note: this file shouldn't be used directly because it has some constants which are set by\nthe docusaurus site to ensure that the chart looks great in both dark and light color themes.\nIf you want to use this example then please copy the code presented on the documentation site.\n[link](https://tradingview.github.io/lightweight-charts/tutorials/react/simple) */\n// delete-end\nimport { createChart, ColorType } from 'lightweight-charts';\nimport React, { useEffect, useRef } from 'react';\n\nexport const ChartComponent = props => {\n\tconst {\n\t\tdata,\n\t\tcolors: {\n\t\t\tbackgroundColor = CHART_BACKGROUND_COLOR,\n\t\t\tlineColor = LINE_LINE_COLOR,\n\t\t\ttextColor = CHART_TEXT_COLOR,\n\t\t\tareaTopColor = AREA_TOP_COLOR,\n\t\t\tareaBottomColor = AREA_BOTTOM_COLOR,\n\t\t} = {},\n\t} = props;\n\n\tconst chartContainerRef = useRef();\n\n\tuseEffect(\n\t\t() => {\n\t\t\tconst handleResize = () => {\n\t\t\t\tchart.applyOptions({ width: chartContainerRef.current.clientWidth });\n\t\t\t};\n\n\t\t\tconst chart = createChart(chartContainerRef.current, {\n\t\t\t\tlayout: {\n\t\t\t\t\tbackground: { type: ColorType.Solid, color: backgroundColor },\n\t\t\t\t\ttextColor,\n\t\t\t\t},\n\t\t\t\twidth: chartContainerRef.current.clientWidth,\n\t\t\t\theight: 300,\n\t\t\t});\n\t\t\tchart.timeScale().fitContent();\n\n\t\t\tconst newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });\n\t\t\tnewSeries.setData(data);\n\n\t\t\twindow.addEventListener('resize', handleResize);\n\n\t\t\treturn () => {\n\t\t\t\twindow.removeEventListener('resize', handleResize);\n\n\t\t\t\tchart.remove();\n\t\t\t};\n\t\t},\n\t\t[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]\n\t);\n\n\treturn (\n\t\t<div\n\t\t\tref={chartContainerRef}\n\t\t/>\n\t);\n};\n\nconst initialData = [\n\t{ time: '2018-12-22', value: 32.51 },\n\t{ time: '2018-12-23', value: 31.11 },\n\t{ time: '2018-12-24', value: 27.02 },\n\t{ time: '2018-12-25', value: 27.32 },\n\t{ time: '2018-12-26', value: 25.17 },\n\t{ time: '2018-12-27', value: 28.89 },\n\t{ time: '2018-12-28', value: 25.46 },\n\t{ time: '2018-12-29', value: 23.92 },\n\t{ time: '2018-12-30', value: 22.68 },\n\t{ time: '2018-12-31', value: 22.67 },\n];\n\nexport function App(props) {\n\treturn (\n\t\t<ChartComponent {...props} data={initialData}></ChartComponent>\n\t);\n}\n"),(0,o.kt)("p",null,"and you'll have a reusable component that could then be enhanced, tweaked to meet your needs, adding properties and even functionalities."),(0,o.kt)("p",null,"If you've successfully followed all the steps you should see something similar to"),(0,o.kt)("div",{className:d.Z.ChartContainer},(0,o.kt)(l.Z,{ChartComponent:u,mdxType:"ThemedChart"})))}g.isMDXComponent=!0},8007:(t,e,n)=>{n.d(e,{ZP:()=>O});var a=n(7294),r=n(814),o=n(1262),l=n(2949),i=n(373),s=n(4908);function c(t,e,n){t.addEventListener("resize",(()=>{const t=e.getBoundingClientRect();n(t.width,t.height)}),!0)}const p={3.8:async t=>{const e=await n.e(193).then(n.bind(n,193));return{module:e,createChart:(n,a)=>{const r=e.createChart(n,a);return c(t,n,r.resize.bind(r)),r}}},current:async()=>{const t=await n.e(6173).then(n.bind(n,6173));return{module:t,createChart:(e,n)=>{const a=t.createChart(e,n);return c(window,e,a.resize.bind(a)),a}}}},u="iframe_R_Fr";function d(t){const{script:e}=t,{preferredVersion:n}=(0,i.J)(),r=s&&s.length>0?s[0]:"",o=n?.name??r??"current",l=function(t){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${t}\n\t\t\t};\n\t\t<\/script>\n\t`}(e),c=a.useRef(null);return a.useEffect((()=>{const t=c.current,e=t?.contentWindow,n=t?.contentDocument;if(null===t||!e||!n)return;const a=async()=>{try{const{module:t,createChart:n}=await p[o](e);Object.assign(e,t),e.createChart=n,e.run?.()}catch(t){console.error(t)}};if(void 0!==e.run)a();else{const e=()=>{a(),t.removeEventListener("load",e)};t.addEventListener("load",e)}}),[l]),a.createElement("iframe",{key:e,ref:c,srcDoc:l,className:u})}var h=n(3864);function m(){const[t,e]=(0,a.useState)("");return(0,a.useEffect)((()=>e(`${Math.random().toString(36).slice(2,11)}`)),[]),t}const C=Object.keys(h.l.DARK);const O=t=>{const{chart:e,replaceThemeConstants:n,hideableCode:i,...s}=t;let{children:c}=t;const{colorMode:p}=(0,l.I)(),O="dark"===p,_="string"==typeof R?R:m();var R;return n&&"string"==typeof c&&(c=function(t,e){const n=e?h.l.DARK:h.l.LIGHT;let a=t;for(const r of C)a=a.replace(new RegExp(r,"g"),`'${n[r]}'`);return a}(c,O)),c=c.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),e||i?a.createElement(a.Fragment,null,i&&a.createElement(a.Fragment,null,a.createElement("input",{id:_,type:"checkbox",className:"toggle-hidden-lines"}),a.createElement("label",{className:"toggle-label",htmlFor:_},"Show all code")),a.createElement(r.Z,s,c),e&&a.createElement(o.Z,{fallback:a.createElement("div",{className:u},"\xa0")},(()=>a.createElement(d,{script:c})))):a.createElement(r.Z,s,c)}},6383:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(2949),r=n(7294),o=n(3864);function l(t){const e=t?"DARK":"LIGHT";return{backgroundColor:o.l[e].CHART_BACKGROUND_COLOR,lineColor:o.l[e].LINE_LINE_COLOR,textColor:o.l[e].CHART_TEXT_COLOR,areaTopColor:o.l[e].AREA_TOP_COLOR,areaBottomColor:o.l[e].AREA_BOTTOM_COLOR}}function i(t){const{ChartComponent:e}=t,n=function(){const{colorMode:t}=(0,a.I)(),e="dark"===t,[n,o]=(0,r.useState)(l(e));return(0,r.useEffect)((()=>{o(l(e))}),[e]),n}();return r.createElement(e,{colors:n})}},3864:(t,e,n)=>{n.d(e,{l:()=>a});const a={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},5804:(t,e,n)=>{n.d(e,{Z:()=>a});const a={ChartContainer:"ChartContainer_Hwvl"}},4908:t=>{t.exports=["3.8"]}}]);