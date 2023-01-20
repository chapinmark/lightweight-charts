"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5359,7918],{440:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(7462),l=(n(7294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"How to use the code sample"),(0,l.kt)("strong",null,"The code presented below requires:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"That ",(0,l.kt)("inlineCode",{parentName:"li"},"createChart")," has already been imported. See ",(0,l.kt)("a",{parentName:"li",href:"/docs#creating-a-chart"},"Getting Started")," for more information,"),(0,l.kt)("li",{parentName:"ul"},"and that there is an html div element on the page with an ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"container"),".")),(0,l.kt)("p",null,"Here is an example skeleton setup: ",(0,l.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/lightweight-charts-skeleton-n67pm6"},"Code Sandbox"),".\nYou can paste the provided code below the ",(0,l.kt)("inlineCode",{parentName:"p"},"// REPLACE EVERYTHING BELOW HERE")," comment."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Some code may be hidden to improve readability. Toggle the checkbox above the code block to reveal all the code."))))}i.isMDXComponent=!0},5157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>R,frontMatter:()=>r,metadata:()=>O,toc:()=>c});var a=n(7462),l=(n(7294),n(3905)),o=n(440),i=n(8007);const r={title:"Price and volume on a single chart",sidebar_label:"Price and Volume",description:"An example of how to include both price and volume series on a single chart.",pagination_prev:null,pagination_next:null,keywords:["example"]},m=void 0,O={unversionedId:"how_to/price-and-volume",id:"how_to/price-and-volume",title:"Price and volume on a single chart",description:"An example of how to include both price and volume series on a single chart.",source:"@site/tutorials/how_to/price-and-volume.mdx",sourceDirName:"how_to",slug:"/how_to/price-and-volume",permalink:"/lightweight-charts/tutorials/how_to/price-and-volume",draft:!1,tags:[],version:"current",frontMatter:{title:"Price and volume on a single chart",sidebar_label:"Price and Volume",description:"An example of how to include both price and volume series on a single chart.",pagination_prev:null,pagination_next:null,keywords:["example"]},sidebar:"tutorialsSidebar"},u={},c=[{value:"How to add a volume histogram",id:"how-to-add-a-volume-histogram",level:2},{value:"Resources",id:"resources",level:2},{value:"Full example",id:"full-example",level:2}],_={toc:c};function R(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example shows how to include a volume study on your chart."),(0,l.kt)("h2",{id:"how-to-add-a-volume-histogram"},"How to add a volume histogram"),(0,l.kt)("p",null,"An additional series can be added to a chart as an 'overlay' by setting the series'\n",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/SeriesOptionsCommon#pricescaleid"},(0,l.kt)("inlineCode",{parentName:"a"},"priceScaleId"))," to ",(0,l.kt)("inlineCode",{parentName:"p"},"''"),".\nAn overlay doesn't make use of either the left or right price scale, and it's positioning\nis controlled by setting the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/PriceScaleOptions#scalemargins"},(0,l.kt)("inlineCode",{parentName:"a"},"scaleMargins")),"\nproperty on the series options."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const volumeSeries = chart.addHistogramSeries({\n    priceFormat: {\n        type: 'volume',\n    },\n    priceScaleId: '', // set as an overlay by setting a blank priceScaleId\n    // set the positioning of the volume series\n    scaleMargins: {\n        top: 0.7, // highest point of the series will be 70% away from the top\n        bottom: 0,\n    },\n});\n")),(0,l.kt)("p",null,"We are using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/series-types#histogram"},"Histogram")," series type to draw the volume bars.\nWe can set the ",(0,l.kt)("inlineCode",{parentName:"p"},"priceFormat")," option to ",(0,l.kt)("inlineCode",{parentName:"p"},"'volume'")," to have the values display correctly within\nthe crosshair line label."),(0,l.kt)("p",null,"We adjust the position of the overlay series to the bottom 30% of the chart by\nsetting the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/PriceScaleOptions#scalemargins"},(0,l.kt)("inlineCode",{parentName:"a"},"scaleMargins"))," properties as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"series.applyOptions({\n    scaleMargins: {\n        top: 0.7, // highest point of the series will be 70% away from the top\n        bottom: 0, // lowest point will be at the very bottom.\n    },\n});\n")),(0,l.kt)("p",null,"Similarly, we can set the position of the main series using the same approach. By setting\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"bottom")," margin value to ",(0,l.kt)("inlineCode",{parentName:"p"},"0.4")," we can ensure that the two series don't overlap each other."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"mainSeries.applyOptions({\n    scaleMargins: {\n        top: 0.1, // highest point of the series will be 10% away from the top\n        bottom: 0.4, // lowest point will be 40% away from the bottom\n    },\n});\n")),(0,l.kt)("p",null,"We can control the color of the histogram bars by directly specifying color inside\nthe data set."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"histogramSeries.setData([\n    { time: '2018-10-19', value: 19103293.0, color: 'green' },\n    { time: '2018-10-20', value: 20345000.0, color: 'red' },\n]);\n")),(0,l.kt)("p",null,"You can see a full ",(0,l.kt)("a",{parentName:"p",href:"#full-example"},"working example")," below."),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api#overlaypricescaleoptions"},"OverlayPriceScale Options")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/series-types#histogram"},"Histogram Series Type")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/interfaces/PriceFormatBuiltIn#type"},"PriceFormat Types")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/interfaces/PriceScaleOptions#scalemargins"},"Scale Margins"))),(0,l.kt)("h2",{id:"full-example"},"Full example"),(0,l.kt)(o.ZP,{mdxType:"UsageGuidePartial"}),(0,l.kt)(i.ZP,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,mdxType:"CodeBlock"},"// remove-start\n// Lightweight Charts Example: Price and Volume\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/price-and-volume\n\n// remove-end\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n\t// highlight-start\n\trightPriceScale: {\n\t\t// positioning the price scale for the area series\n\t\tscaleMargins: {\n\t\t\ttop: 0.1,\n\t\t\tbottom: 0.4,\n\t\t},\n\t\tborderVisible: false,\n\t},\n\t// highlight-end\n};\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(document.getElementById('container'), chartOptions);\n\nconst areaSeries = chart.addAreaSeries({\n\ttopColor: AREA_TOP_COLOR,\n\tbottomColor: AREA_BOTTOM_COLOR,\n\tlineColor: LINE_LINE_COLOR,\n\tlineWidth: 2,\n});\n\nconst volumeSeries = chart.addHistogramSeries({\n\tcolor: BAR_UP_COLOR,\n\t// highlight-start\n\tpriceFormat: {\n\t\ttype: 'volume',\n\t},\n\tpriceScaleId: '', // set as an overlay by setting a blank priceScaleId\n\t// set the positioning of the volume series\n\tscaleMargins: {\n\t\ttop: 0.7, // highest point of the series will be 70% away from the top\n\t\tbottom: 0,\n\t},\n\t// highlight-end\n});\n\nareaSeries.setData([\n\t{ time: '2018-10-19', value: 54.90 },\n\t// hide-start\n\t{ time: '2018-10-22', value: 54.98 },\n\t{ time: '2018-10-23', value: 57.21 },\n\t{ time: '2018-10-24', value: 57.42 },\n\t{ time: '2018-10-25', value: 56.43 },\n\t{ time: '2018-10-26', value: 55.51 },\n\t{ time: '2018-10-29', value: 56.48 },\n\t{ time: '2018-10-30', value: 58.18 },\n\t{ time: '2018-10-31', value: 57.09 },\n\t{ time: '2018-11-01', value: 56.05 },\n\t{ time: '2018-11-02', value: 56.63 },\n\t{ time: '2018-11-05', value: 57.21 },\n\t{ time: '2018-11-06', value: 57.21 },\n\t{ time: '2018-11-07', value: 57.65 },\n\t{ time: '2018-11-08', value: 58.27 },\n\t{ time: '2018-11-09', value: 58.46 },\n\t{ time: '2018-11-12', value: 58.72 },\n\t{ time: '2018-11-13', value: 58.66 },\n\t{ time: '2018-11-14', value: 58.94 },\n\t{ time: '2018-11-15', value: 59.08 },\n\t{ time: '2018-11-16', value: 60.21 },\n\t{ time: '2018-11-19', value: 60.62 },\n\t{ time: '2018-11-20', value: 59.46 },\n\t{ time: '2018-11-21', value: 59.16 },\n\t{ time: '2018-11-23', value: 58.64 },\n\t{ time: '2018-11-26', value: 59.17 },\n\t{ time: '2018-11-27', value: 60.65 },\n\t{ time: '2018-11-28', value: 60.06 },\n\t{ time: '2018-11-29', value: 59.45 },\n\t{ time: '2018-11-30', value: 60.30 },\n\t{ time: '2018-12-03', value: 58.16 },\n\t{ time: '2018-12-04', value: 58.09 },\n\t{ time: '2018-12-06', value: 58.08 },\n\t{ time: '2018-12-07', value: 57.68 },\n\t{ time: '2018-12-10', value: 58.27 },\n\t{ time: '2018-12-11', value: 58.85 },\n\t{ time: '2018-12-12', value: 57.25 },\n\t{ time: '2018-12-13', value: 57.09 },\n\t{ time: '2018-12-14', value: 57.08 },\n\t{ time: '2018-12-17', value: 55.95 },\n\t{ time: '2018-12-18', value: 55.65 },\n\t{ time: '2018-12-19', value: 55.86 },\n\t{ time: '2018-12-20', value: 55.07 },\n\t{ time: '2018-12-21', value: 54.92 },\n\t{ time: '2018-12-24', value: 53.05 },\n\t{ time: '2018-12-26', value: 54.44 },\n\t{ time: '2018-12-27', value: 55.15 },\n\t{ time: '2018-12-28', value: 55.27 },\n\t{ time: '2018-12-31', value: 56.22 },\n\t{ time: '2019-01-02', value: 56.02 },\n\t{ time: '2019-01-03', value: 56.22 },\n\t{ time: '2019-01-04', value: 56.36 },\n\t{ time: '2019-01-07', value: 56.72 },\n\t{ time: '2019-01-08', value: 58.38 },\n\t{ time: '2019-01-09', value: 57.05 },\n\t{ time: '2019-01-10', value: 57.60 },\n\t{ time: '2019-01-11', value: 58.02 },\n\t{ time: '2019-01-14', value: 58.03 },\n\t{ time: '2019-01-15', value: 58.10 },\n\t{ time: '2019-01-16', value: 57.08 },\n\t{ time: '2019-01-17', value: 56.83 },\n\t{ time: '2019-01-18', value: 57.09 },\n\t{ time: '2019-01-22', value: 56.99 },\n\t{ time: '2019-01-23', value: 57.76 },\n\t{ time: '2019-01-24', value: 57.07 },\n\t{ time: '2019-01-25', value: 56.40 },\n\t{ time: '2019-01-28', value: 55.07 },\n\t{ time: '2019-01-29', value: 53.28 },\n\t{ time: '2019-01-30', value: 54.00 },\n\t{ time: '2019-01-31', value: 55.06 },\n\t{ time: '2019-02-01', value: 54.55 },\n\t{ time: '2019-02-04', value: 54.04 },\n\t{ time: '2019-02-05', value: 54.14 },\n\t{ time: '2019-02-06', value: 53.79 },\n\t{ time: '2019-02-07', value: 53.57 },\n\t{ time: '2019-02-08', value: 53.95 },\n\t{ time: '2019-02-11', value: 54.05 },\n\t{ time: '2019-02-12', value: 54.42 },\n\t{ time: '2019-02-13', value: 54.48 },\n\t{ time: '2019-02-14', value: 54.03 },\n\t{ time: '2019-02-15', value: 55.16 },\n\t{ time: '2019-02-19', value: 55.44 },\n\t{ time: '2019-02-20', value: 55.76 },\n\t{ time: '2019-02-21', value: 56.15 },\n\t{ time: '2019-02-22', value: 56.92 },\n\t{ time: '2019-02-25', value: 56.78 },\n\t{ time: '2019-02-26', value: 56.64 },\n\t{ time: '2019-02-27', value: 56.72 },\n\t{ time: '2019-02-28', value: 56.92 },\n\t{ time: '2019-03-01', value: 56.96 },\n\t{ time: '2019-03-04', value: 56.24 },\n\t{ time: '2019-03-05', value: 56.08 },\n\t{ time: '2019-03-06', value: 55.68 },\n\t{ time: '2019-03-07', value: 56.30 },\n\t{ time: '2019-03-08', value: 56.53 },\n\t{ time: '2019-03-11', value: 57.58 },\n\t{ time: '2019-03-12', value: 57.43 },\n\t{ time: '2019-03-13', value: 57.66 },\n\t{ time: '2019-03-14', value: 57.95 },\n\t{ time: '2019-03-15', value: 58.39 },\n\t{ time: '2019-03-18', value: 58.07 },\n\t{ time: '2019-03-19', value: 57.50 },\n\t{ time: '2019-03-20', value: 57.67 },\n\t{ time: '2019-03-21', value: 58.29 },\n\t{ time: '2019-03-22', value: 59.76 },\n\t{ time: '2019-03-25', value: 60.08 },\n\t{ time: '2019-03-26', value: 60.63 },\n\t{ time: '2019-03-27', value: 60.88 },\n\t{ time: '2019-03-28', value: 59.08 },\n\t{ time: '2019-03-29', value: 59.13 },\n\t{ time: '2019-04-01', value: 59.09 },\n\t{ time: '2019-04-02', value: 58.53 },\n\t{ time: '2019-04-03', value: 58.87 },\n\t{ time: '2019-04-04', value: 58.99 },\n\t{ time: '2019-04-05', value: 59.09 },\n\t{ time: '2019-04-08', value: 59.13 },\n\t{ time: '2019-04-09', value: 58.40 },\n\t{ time: '2019-04-10', value: 58.61 },\n\t{ time: '2019-04-11', value: 58.56 },\n\t{ time: '2019-04-12', value: 58.74 },\n\t{ time: '2019-04-15', value: 58.71 },\n\t{ time: '2019-04-16', value: 58.79 },\n\t{ time: '2019-04-17', value: 57.78 },\n\t{ time: '2019-04-18', value: 58.04 },\n\t{ time: '2019-04-22', value: 58.37 },\n\t{ time: '2019-04-23', value: 57.15 },\n\t{ time: '2019-04-24', value: 57.08 },\n\t{ time: '2019-04-25', value: 55.85 },\n\t{ time: '2019-04-26', value: 56.58 },\n\t{ time: '2019-04-29', value: 56.84 },\n\t{ time: '2019-04-30', value: 57.19 },\n\t{ time: '2019-05-01', value: 56.52 },\n\t{ time: '2019-05-02', value: 56.99 },\n\t{ time: '2019-05-03', value: 57.24 },\n\t{ time: '2019-05-06', value: 56.91 },\n\t{ time: '2019-05-07', value: 56.63 },\n\t{ time: '2019-05-08', value: 56.38 },\n\t{ time: '2019-05-09', value: 56.48 },\n\t{ time: '2019-05-10', value: 56.91 },\n\t{ time: '2019-05-13', value: 56.75 },\n\t{ time: '2019-05-14', value: 56.55 },\n\t{ time: '2019-05-15', value: 56.81 },\n\t{ time: '2019-05-16', value: 57.38 },\n\t{ time: '2019-05-17', value: 58.09 },\n\t{ time: '2019-05-20', value: 59.01 },\n\t{ time: '2019-05-21', value: 59.50 },\n\t{ time: '2019-05-22', value: 59.25 },\n\t{ time: '2019-05-23', value: 58.87 },\n\t{ time: '2019-05-24', value: 59.32 },\n\t{ time: '2019-05-28', value: 59.57 },\n\t// hide-end\n]);\n\n// setting the data for the volume series.\n// note: we are defining each bars color as part of the data\nvolumeSeries.setData([\n\t{ time: '2018-10-19', value: 19103293.00, color: BAR_UP_COLOR },\n\t// hide-start\n\t{ time: '2018-10-22', value: 21737523.00, color: BAR_UP_COLOR },\n\t{ time: '2018-10-23', value: 29328713.00, color: BAR_UP_COLOR },\n\t{ time: '2018-10-24', value: 37435638.00, color: BAR_UP_COLOR },\n\t{ time: '2018-10-25', value: 25269995.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-10-26', value: 24973311.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-10-29', value: 22103692.00, color: BAR_UP_COLOR },\n\t{ time: '2018-10-30', value: 25231199.00, color: BAR_UP_COLOR },\n\t{ time: '2018-10-31', value: 24214427.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-01', value: 22533201.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-02', value: 14734412.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-05', value: 12733842.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-06', value: 12371207.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-07', value: 14891287.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-08', value: 12482392.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-09', value: 17365762.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-12', value: 13236769.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-13', value: 13047907.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-14', value: 18288710.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-15', value: 17147123.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-16', value: 19470986.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-19', value: 18405731.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-20', value: 22028957.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-21', value: 18482233.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-23', value: 7009050.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-26', value: 12308876.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-27', value: 14118867.00, color: BAR_UP_COLOR },\n\t{ time: '2018-11-28', value: 18662989.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-29', value: 14763658.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-11-30', value: 31142818.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-03', value: 27795428.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-04', value: 21727411.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-06', value: 26880429.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-07', value: 16948126.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-10', value: 16603356.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-11', value: 14991438.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-12', value: 18892182.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-13', value: 15454706.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-14', value: 13960870.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-17', value: 18902523.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-18', value: 18895777.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-19', value: 20968473.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-20', value: 26897008.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-21', value: 55413082.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-24', value: 15077207.00, color: BAR_DOWN_COLOR },\n\t{ time: '2018-12-26', value: 17970539.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-27', value: 17530977.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-28', value: 14771641.00, color: BAR_UP_COLOR },\n\t{ time: '2018-12-31', value: 15331758.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-02', value: 13969691.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-03', value: 19245411.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-04', value: 17035848.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-07', value: 16348982.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-08', value: 21425008.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-09', value: 18136000.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-10', value: 14259910.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-11', value: 15801548.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-14', value: 11342293.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-15', value: 10074386.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-16', value: 13411691.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-17', value: 15223854.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-18', value: 16802516.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-22', value: 18284771.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-23', value: 15109007.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-24', value: 12494109.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-25', value: 17806822.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-28', value: 25955718.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-29', value: 33789235.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-01-30', value: 27260036.00, color: BAR_UP_COLOR },\n\t{ time: '2019-01-31', value: 28585447.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-01', value: 13778392.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-04', value: 15818901.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-05', value: 14124794.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-06', value: 11391442.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-07', value: 12436168.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-08', value: 12011657.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-11', value: 9802798.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-12', value: 11227550.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-13', value: 11884803.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-14', value: 11190094.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-15', value: 15719416.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-19', value: 12272877.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-20', value: 11379006.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-21', value: 14680547.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-22', value: 12534431.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-25', value: 15051182.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-26', value: 12005571.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-02-27', value: 8962776.00, color: BAR_UP_COLOR },\n\t{ time: '2019-02-28', value: 15742971.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-01', value: 10942737.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-04', value: 13674737.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-05', value: 15749545.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-06', value: 13935530.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-07', value: 12644171.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-08', value: 10646710.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-11', value: 13627431.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-12', value: 12812980.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-13', value: 14168350.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-14', value: 12148349.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-15', value: 23715337.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-18', value: 12168133.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-19', value: 13462686.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-20', value: 11903104.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-21', value: 10920129.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-22', value: 25125385.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-25', value: 15463411.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-26', value: 12316901.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-27', value: 13290298.00, color: BAR_UP_COLOR },\n\t{ time: '2019-03-28', value: 20547060.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-03-29', value: 17283871.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-01', value: 16331140.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-02', value: 11408146.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-03', value: 15491724.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-04', value: 8776028.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-05', value: 11497780.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-08', value: 11680538.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-09', value: 10414416.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-10', value: 8782061.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-11', value: 9219930.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-12', value: 10847504.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-15', value: 7741472.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-16', value: 10239261.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-17', value: 15498037.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-18', value: 13189013.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-22', value: 11950365.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-23', value: 23488682.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-24', value: 13227084.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-25', value: 17425466.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-04-26', value: 16329727.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-29', value: 13984965.00, color: BAR_UP_COLOR },\n\t{ time: '2019-04-30', value: 15469002.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-01', value: 11627436.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-02', value: 14435436.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-03', value: 9388228.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-06', value: 10066145.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-07', value: 12963827.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-08', value: 12086743.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-09', value: 14835326.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-10', value: 10707335.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-13', value: 13759350.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-14', value: 12776175.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-15', value: 10806379.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-16', value: 11695064.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-17', value: 14436662.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-20', value: 20910590.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-21', value: 14016315.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-22', value: 11487448.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-23', value: 11707083.00, color: BAR_DOWN_COLOR },\n\t{ time: '2019-05-24', value: 8755506.00, color: BAR_UP_COLOR },\n\t{ time: '2019-05-28', value: 3097125.00, color: BAR_UP_COLOR },\n\t// hide-end\n]);\n\nchart.timeScale().fitContent();\n"))}R.isMDXComponent=!0},8007:(e,t,n)=>{n.d(t,{ZP:()=>C});var a=n(7294),l=n(814),o=n(1262),i=n(2949),r=n(373),m=n(4908);function O(e,t,n){e.addEventListener("resize",(()=>{const e=t.getBoundingClientRect();n(e.width,e.height)}),!0)}const u={3.8:async e=>{const t=await n.e(193).then(n.bind(n,193));return{module:t,createChart:(n,a)=>{const l=t.createChart(n,a);return O(e,n,l.resize.bind(l)),l}}},current:async()=>{const e=await n.e(6173).then(n.bind(n,6173));return{module:e,createChart:(t,n)=>{const a=e.createChart(t,n);return O(window,t,a.resize.bind(a)),a}}}},c="iframe_R_Fr";function _(e){const{script:t}=e,{preferredVersion:n}=(0,r.J)(),l=m&&m.length>0?m[0]:"",o=n?.name??l??"current",i=function(e){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${e}\n\t\t\t};\n\t\t<\/script>\n\t`}(t),O=a.useRef(null);return a.useEffect((()=>{const e=O.current,t=e?.contentWindow,n=e?.contentDocument;if(null===e||!t||!n)return;const a=async()=>{try{const{module:e,createChart:n}=await u[o](t);Object.assign(t,e),t.createChart=n,t.run?.()}catch(e){console.error(e)}};if(void 0!==t.run)a();else{const t=()=>{a(),e.removeEventListener("load",t)};e.addEventListener("load",t)}}),[i]),a.createElement("iframe",{key:t,ref:O,srcDoc:i,className:c})}var R=n(3864);function v(){const[e,t]=(0,a.useState)("");return(0,a.useEffect)((()=>t(`${Math.random().toString(36).slice(2,11)}`)),[]),e}const s=Object.keys(R.l.DARK);const C=e=>{const{chart:t,replaceThemeConstants:n,hideableCode:r,...m}=e;let{children:O}=e;const{colorMode:u}=(0,i.I)(),C="dark"===u,L="string"==typeof p?p:v();var p;return n&&"string"==typeof O&&(O=function(e,t){const n=t?R.l.DARK:R.l.LIGHT;let a=e;for(const l of s)a=a.replace(new RegExp(l,"g"),`'${n[l]}'`);return a}(O,C)),O=O.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),t||r?a.createElement(a.Fragment,null,r&&a.createElement(a.Fragment,null,a.createElement("input",{id:L,type:"checkbox",className:"toggle-hidden-lines"}),a.createElement("label",{className:"toggle-label",htmlFor:L},"Show all code")),a.createElement(l.Z,m,O),t&&a.createElement(o.Z,{fallback:a.createElement("div",{className:c},"\xa0")},(()=>a.createElement(_,{script:O})))):a.createElement(l.Z,m,O)}},3864:(e,t,n)=>{n.d(t,{l:()=>a});const a={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},4908:e=>{e.exports=["3.8"]}}]);